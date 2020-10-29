import React, { useState } from 'react';
import { useTodosDispatch } from '../contexts/TodosContext';


function TodoForm() {

    const [value, setValue] = useState('');
    
    // useTodosDispatch Hook을 이용하여 dispatch 함수를 받아오기
    const dispatch = useTodosDispatch()

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // dispatch를 통한 새글 등록
        dispatch({
            type: 'CREATE',
            text: value
        });
        // TODO: 새 항목 생성하기
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                placeholder="무엇을 하실 건가요?"
                onChange={e => setValue(e.target.value)}
            />
            <button>등록</button>
        </form>
    )
}

export default TodoForm
