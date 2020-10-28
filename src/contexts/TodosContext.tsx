// 상태 전용 Context
import { createContext } from 'react';

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

