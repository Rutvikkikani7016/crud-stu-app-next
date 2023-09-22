'use client'
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {

    const router = useRouter();

    const removeData = async () => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/datas?id=${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                router.push('/');
            } else {
                alert("sum error in delete Data")
            }
        }
    }
    return (
        <>
            <button className="text-red-400" onClick={removeData}><HiOutlineTrash size={24} /></button>
        </>
    )
}