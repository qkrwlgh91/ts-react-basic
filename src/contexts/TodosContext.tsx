// 상태 전용 Context
import React, { createContext, Dispatch, useReducer, useContext } from 'react';

// 다른 컴포넌트에서 타입을 불러와서 쓸 수 있도록 export
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodosState = Todo[];


// createContext함수의 Generics를 사용하여 Context에서 관리할 값의 상태를 설정
// provider를 사용하지 않았을 때 Context의 값이 undefined가 되어야 하므로 <TodosState | undefined> 와 같이 TodosState일 수도 있고 undefined일 수도 있다고 선언
const TodosStateContext = createContext<TodosState | undefined>(undefined);

// action을 위한 타입 선언
// dispatch를 위한 context를 만들때 dispatch 함수릐 타입을 설정할 수 있다
type Action = 
    | { type: 'CREATE'; text: string }
    | { type: 'TOGGLE'; id: number }
    | { type: 'REMOVE'; id: number };

type TodosDispatch = Dispatch<Action>;

// Generics으로 액션들의 타입을 넣어주면 추 후 컴포넌트에서 랙션을 디스패치 할 때 액션들에 대한 타입을 검사할 수 있다.
// 예) 액션에 추가적으로 필요한 text나 id 가 빠지면 오류를 발생
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

// 리듀서 작성
function todosReducer(state: TodosState, action: Action): TodosState {
    switch (action.type) {
        case 'CREATE':
            const nextId = Math.max(...state.map( todo => todo.id)) + 1;
            return state.concat({
                id: nextId,
                text: action.text,
                done: false
            });
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unhandled action');
    }
}

// provider 작성
// App에서 불러와 사용해야 하므로 export!!
export function TodosContextProvider({ children }: { children: React.ReactNode } ) {
    const [todos, dispatch] = useReducer(todosReducer, [
        {
            id: 1,
            text: 'Context API 배우기',
            done: true
        },
        {
            id: 2,
            text: 'Typescript 배우기',
            done: true
        },
        {
            id: 3,
            text: 'TypeScript 와 Context API 함께 사용하기',
            done: false
        },
    ]);

    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodosStateContext.Provider value={todos}>
                {children}
            </TodosStateContext.Provider>
        </TodosDispatchContext.Provider>
    );
}

// 커스텀 Hooks 두개 작성하기
// TodosStateContext와 TodosDispatchContext를 사용하게 될 때는 다음과 같이 useContext를 사용해서 Context안의 값을 사용할 수 있다.
//const todos = useContext(TodosStateContext);
// todos의 타입은 TodosState | undefined 일 수도 있기 때문에 해당 배열을 사용하기 전에 꼭 해당 값이 유효한지 확인해주어야 한다.
//if (!todo) return null;

// 위에 작성된 코드를 TodosContext전용 Hooks를 작성하면 좀 더 편리하다.
// 아래와 같이 코드를 작성하면 추후 상태 또는 디스패치를 더욱 편하게 이용할 수 있고 유효성 검사도 생략할 수 있다.

export function useTodosState() {
    const state = useContext(TodosStateContext);
    if (!state) throw new Error('TodosProvider not found');
    return state;
}

export function useTodosDispatch() {
    const dispatch = useContext(TodosDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
}
// 위의 코드는 함수 내부에서 필요한 값이 유효하지 않다면 에러를 throw하여 각 Hook이 반환하는 값의 타입은 언제나 유효하다는 것을 보장 받을 수 있다.
// 유효하지 않는 경우라면 브라우저에 콘솔 에러가 표시 된다.

