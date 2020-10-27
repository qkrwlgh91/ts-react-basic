import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string; // 컴포넌트에서 props중에 생략해도 되는 값을 나타낼때는 ?를 붙여준다.
    onClick: (name: string) => void; // 컴포넌트에서 특정 함수를 props로 받아와야 할때, void는 아무것도 리턴하지 않는다는 함수를 의미한다.
}

// const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
//     <div>Hello, {name} {mark}</div>
// )

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
}

Greetings.defaultProps = {
    mark: '!'
}


export default Greetings
