import Link from "next/link";
import RemoveBtn from "./RemoveBrn";
import { HiPencilAlt } from 'react-icons/hi'

const getDatas = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/datas', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json();
    } catch (error) {
        console.log("Error loading data:", error);
    }
}

export default async function DataList() {

    const { datas } = await getDatas();

    return (<>
        {datas.map(data => (
            <div className="p-4 border border-slate-300 my-3 flex justify-between items-start">
                <div>
                    <h2 className="font-bold text=3xl">{data.name}</h2>
                    <div>Email:- {data.email}</div>
                    <div>Age:- {data.age}</div>
                    <div>City:- {data.city}</div>
                </div>
                <div className="flex gap-2 ">
                    <RemoveBtn id={data._id} />
                    <Link href={`/editData/${data._id}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        ))}
    </>)
}