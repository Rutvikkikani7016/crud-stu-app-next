import EditDataForm from "@/components/EditDataForm";

const getDataById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/datas/${id}`, { cache: 'no-store' });

        if (!res.ok) {
            throw new Error('Falied to fetch data');
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditData({ params }) {
    const { id } = params;
    const { data } = await getDataById(id)
    const {name, email, age, city} = data;
    // console.log("id:" id);
    return (<>
        <div>
            <EditDataForm id={id} name={name} email={email} age={age} city={city} />
        </div>
    </>)
}