'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function addData() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    const router = useRouter();

    const HandlerSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !age || !city) {
            alert('All filed are requiered..');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/datas', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name, email, age, city })
            })
            if (res.ok) {
                router.push('/');
            } else {
                throw new Error('Failed to create a user')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <div>
            <form className="flex flex-col gap-3" onSubmit={HandlerSubmit} >
                <input className="border border-slate-500 px-8 py-3" value={name} type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input className="border border-slate-500 px-8 py-3" value={email} type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input className="border border-slate-500 px-8 py-3" value={age} type='number' placeholder='age' onChange={(e) => setAge(e.target.value)} />
                <input className="border border-slate-500 px-8 py-3" value={city} type='text' placeholder='City' onChange={(e) => setCity(e.target.value)} />
                <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add</button>
            </form>

        </div>
    </>)
}