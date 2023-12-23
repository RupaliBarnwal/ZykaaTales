 import { useState } from "react";
 

const User=(props)=>{

    const [count, setCount]= useState(0);

    const {name, location}= props; /// array destructuring
    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
        <h1>{name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact : rupalibarnwal1997@gmail.com</h3>
    </div>
    );
};

export default User;
