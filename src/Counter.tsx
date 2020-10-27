import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState<number>(0); // typescript에서 useState를 사용할때는 일반적인 useState에서 useState<number>(0)과 같이 Generics를 사용하여 해당 상태가 어떤 타입을 가지는지만 설정해주면 된다.
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
    /*
    useState를 사용할때 Generics를 이용하여 useState의 타입을 알려주지 않아도 useState는 타입을 유추할 수있기 때문에 Generics를 선언하지 않아도 된다.
    그렇다면! 언제 Generics를 사용할까?
    1. 상태가 null일 수도 있고 아닐수도 있을 때
    type Information = { name: string; description: string };
    const [info, setInformation] = useState<Information | null>(null);\
    2. 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일때 Generics를 명시해주는 것이 좋다.
    type Todo = { id: number, text: string, done: boolean};
    const [todos, setTodos] = useState<Todo[]>([]);
    or
    const [todos, setTodos] = useState([] as Todo[]);
    as : Type Assertion문법(특정 값이 특정 타입이다라는 정보를 덮어 쓸 수 있는 문법)
    */

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;
