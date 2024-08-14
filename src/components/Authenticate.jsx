import { useState } from 'react'

function Authenticate({ token }){
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState(null);
    const [error,setError] = useState(null);

    async function handleClick(e){
        console.log('i am in handleClick');
        console.log(token);
        e.preventDefault();
        try{
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
                { 
                  method: "GET", 
                  headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
                  }
                })
            const result = await response.json();
            console.log(result);
            console.log(result.data);
            setSuccessMessage(result.message);
            setUsername(result.data.username);
        }
        catch(error){
            setError(error.message);
            console.log(error.message);
        }
    }
    

    return(
        <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {successMessage && <p>Your user name is: {username}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}></button>
            
        </div>
    )
}

export default Authenticate;