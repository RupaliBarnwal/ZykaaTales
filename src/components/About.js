import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor (){
        super()
        // console.log("Parent Constructor");

    }
    componentDidMount(){
        // console.log("Parent component Did Mount");
       }
    render(){
        // console.log("Parent render");
        return(
            
                    <div className="aboutComponent">
                        
                        <h1>About page</h1>
                        <div>
                            LoggedIn User 
                            
                        <UserContext.Consumer>   
                            {({loggedInUser})=> (
                                // React Context
                                <h1 className="text-xl font-bold">{loggedInUser}</h1>
                            )}
                        </UserContext.Consumer>
                        </div>
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