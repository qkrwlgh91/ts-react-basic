import React, {useState} from 'react';

type MyFormProps = {
    onSubmit: (form: { name: string, description: string }) => void;
}

function MyForm({ onSubmit }: MyFormProps) {

    const [form, setForm] = useState({
        name: '',
        description: ''
    })

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e 값을 무엇으로 설정해야할까요?
        // 일단 모를때는 any로 설정하자
        // 그리고 return부에 이벤트 위에 마우스를 올리면 제안해주는 이벤트를 사용해보자
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        }); // 초기화
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange}/>
            <input name="description" value={description} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    )
}

export default MyForm;
