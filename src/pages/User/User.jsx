import { useLoaderData } from "react-router-dom";


const User = () => {

    const users = useLoaderData();

    const handleDelete = id =>{
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`,{
                method: 'DELETE'
            })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.deletedCount>0){
                alert('delete successfully')
            }
        })
    }

    return (
        <div className="text-center">
            <h1>All users {users.length}</h1>
            <hr />
            <br />
            {
                users.map(user => <ol key={user._id} className="p-4 bg-orange-50 my-2">
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <button onClick={()=>handleDelete(user._id)} className="bg-red-400 px-2 py-1">Delete</button>
                </ol>)
            }
        </div>
    );
};

export default User;