'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditDataForm({ id, name, email, age, city }) {

    const router = useRouter();

    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [newAge, setNewAge] = useState(age);
    const [newCity, setNewCity] = useState(city);

    const handlerSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/datas/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                  },
                body: JSON.stringify({ newName, newEmail, newAge, newCity }),
            })
            if (!res.ok) {
                throw new Error('Failed to update data')
            }
            router.refresh();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <div>
            <form className="flex flex-col gap-3" onSubmit={handlerSubmit}>
                <input className="border border-slate-500 px-8 py-3" value={newName} type='text' placeholder='Edit Name' onChange={(e) => setNewName(e.target.value)} />
                <input className="border border-slate-500 px-8 py-3" value={newEmail} type='email' placeholder='Edit email' onChange={(e) => setNewEmail(e.target.value)} />
                <input className="border border-slate-500 px-8 py-3" value={newAge} type='number' placeholder='Edit age' onChange={(e) => setNewAge(e.target.value)} />
                <input className="border border-slate-500 px-8 py-3" value={newCity} type='text' placeholder='Edit City' onChange={(e) => setNewCity(e.target.value)} />
                <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit"  >Update</button>
            </form>
        </div>
    </>)
}