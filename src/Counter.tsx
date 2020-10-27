import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState<number>(0); // typescript에서 useState를 사용할때는 일반적인 useState에서 useState<number>(0)과 같이 Generics를 사용하여 해당 상태가 어떤 타입을 가지는지만 설정해주면 된다.
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

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
