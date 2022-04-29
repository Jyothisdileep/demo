import React from "react";
import './Card.css'

const Card: React.FC (IProps)= ({item}) =>{

    return (

        <form>
<div className="card">
    <div className="container">
  {item.name}
  {item.birthday}
    </div>
    </div>

 
    </form> 
    
    )
}
export default Card;

interface IProps {
    item: {
        name: string
    birthday : string
    }
}