import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser)


    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        console.log(name, email)

        const updateUser = {name, email}

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold underline">Update {loadedUser.name} Data</h1>
            <hr />
            <br />
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" className="border-2 border-emerald-500 w-1/3 p-2" placeholder="Name"/> <br /><br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" className="border-2 border-emerald-500 w-1/3 p-2" placeholder="Email"/> <br /><br />
                <button className="bg-orange-200 px-4 py-1">Submit</button>
            </form>
        </div>
    );
};

export default Update;