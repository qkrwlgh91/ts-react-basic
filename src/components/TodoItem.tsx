import React from 'react';
import './TodoItem.css';
import { useTodosDispatch, Todo } from '../contexts/TodosContext';

/*
export type TodoItemProps = {
    todo: {
        id: number;
        text: string;
        done: boolean;
    };
}
*/

// TodoContext에서 선언한 타입 불러오기
type TodoItemProps = {
    todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {

    // context를 사용하면 굳이 함수들을 props를 통해서 가져오지 않고, 이 컴포넌트 내부에서 바로 액션을 디스패치하여 사용할 수 있다.
    const dispatch = useTodosDispatch();

    // 할일 완료 여부 
    const onTogoole = () => {
        dispatch({
            type: 'TOGGLE',
            id: todo.id
        });
    };

    // 할일 등록 제거
    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id: todo.id
        });
    };

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text" onClick={onTogoole}>{todo.text}</span>
            <span className="remove" onClick={onRemove}>(X)</span>
        </li>
    )
}

export default TodoItem
