import React from "react";
import Button from "../../components/Button";

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    };
    render(){
        return(
            <div>
                <Button title="View Data" onClick={console.log("Button CLicked")}/>

            </div>
        )
    }
}