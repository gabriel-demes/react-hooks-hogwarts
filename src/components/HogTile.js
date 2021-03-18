import React, {useState} from "react"
import HogDescrip from "./HogDescrip"

const HogTile = (props) => {

    const [show, setShow] = useState(false)
    const handleClick = () =>{
        setShow(currentShow => (currentShow = !show))
    }
    return (
        <div onClick={handleClick}>
            <h3>{props.hogName}</h3>
            <img src={props.hogImg} alt={props.hogName}></img>
            <HogDescrip style={{display: show? "block": "none"}} specialty={props.hogSpecialty} weight={props.hogWeight} greased={props.hogGreased} hma={props.hogHMA}/>
        </div>

    )
}

export default HogTile