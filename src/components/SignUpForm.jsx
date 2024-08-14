import {useState} from 'react';

function SignUpForm({ setToken }){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        console.log('short message ');
        try{
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
                { 
                  method: "POST", 
                  headers: { 
                    "Content-Type": "application/json" 
                  }, 
                  body: JSON.stringify({ 
                    username: username, 
                    password: password 
                  }) 
                })
            const result = await response.json();
            setToken(result.token);
            console.log(result);
            console.log(result.token);
        }
        catch(error){
            setError(error.message);
            console.log(error.message);
        }
    }

    return(
    <div>
        <h2>SignUpForm</h2>{error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default SignUpForm;