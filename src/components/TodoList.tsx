import React from 'react'
import TodoItem from './TodoItem';
import { useTodosState } from '../contexts/TodosContext';

function TodoList() {
/*
    const todos = [
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
    ]
*/

    // Context안의 상태를 조회하여 렌더링
    // 커스텀 Hook을 만뜰 었기 때문에 간단히 처리 할 수 있는 장점이 있다.
    const todos = useTodosState();

    return (
        <ul>
            { todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList
