import React from "react";

class UserClass extends React.Component{
    constructor (){
        super();

        // this.state ={
        //     count :0,
        //     count2:1
        // }
        // console.log("Child Constructor");
        this.state = {
            userInfo : {
               name: "Dummy",
               location : "Default"
           }
       }
    }
    async componentDidMount(){
        // console.log("Child component Did Mount");
        const data= await fetch("https://api.github.com/users/RupaliBarnwal");
        const json= await data.json();
        console.log(json);

        this.setState ({
            userInfo : json,
        });

    }
    render(){
        console.log("child render");
        return(
            <div className="user-card">
        <h1>{this.state.userInfo.name}</h1>
        {/* <h2>Count= {this.state.count}</h2>
        <h2>Count2= {this.state.count2}</h2> */}
        <h2>Location: {this.state.userInfo.location}</h2>
        <h3>Contact : rupalibarnwal1997@gmail.com</h3>
    </div>
     )
    }
        
        
}

export default UserClass;