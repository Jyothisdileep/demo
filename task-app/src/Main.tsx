import React, { useState} from "react";
import { IUser } from "./Api";
import { data } from "./Data"
import './Mains.css'


const main = () => {
    const [username] = useState<IUser>()
    const {uname} = useParams();
    console.log(username)

    
        
        return (
            <form onChange={handleSubmit}>
                <div className="mains">
                <label >data</label>
                <input type="text" value={username}/></div>

                <button>Update</button>
                        </form>
        )


    export default main;
function useParams(): { uname: any; } {
    throw new Error("Function not implemented.");
}
}
