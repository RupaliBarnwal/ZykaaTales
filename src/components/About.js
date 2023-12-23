import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor (){
        super()
        // console.log("Parent Constructor");

    }
    componentDidMount(){
        // console.log("Parent component Did Mount");
       }
    render(){
        console.log("Parent render");
        return(
                    <div className="aboutComponent">
                        <h1>About page</h1>
                        <h2> This is a about page</h2>
                        <User name={"Rupali Barnwal function"} location={"Bihar"}/>
                        <UserClass />
                    </div>
                );
    }
}

// const About =()=>{
//     return(
//         <div className="aboutComponent">
//             <h1>About page</h1>
//             <h2> This is a about page</h2>
//             <User name={"Rupali Barnwal function"} location={"Delhi"}/>
//             <UserClass name={"Rupali Barnwal class"}/>
//         </div>
//     );
// };

export default About;