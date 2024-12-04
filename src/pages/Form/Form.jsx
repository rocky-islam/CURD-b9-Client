

const Form = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const email =form.email.value;

        const user = {name, email}
        console.log(user)

        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            form.reset()
            alert('data insert successfully')
        }).catch(e=>{
            console.log(e)
        })

    }
    return (
        <div className="text-center">
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" className="border-2 border-emerald-500 w-1/3 p-2" placeholder="Name"/> <br /><br />
                <input type="email" name="email" id="" className="border-2 border-emerald-500 w-1/3 p-2" placeholder="Email"/> <br /><br />
                <button className="bg-orange-200 px-4 py-1">Submit</button>
            </form>
        </div>
    );
};

export default Form;