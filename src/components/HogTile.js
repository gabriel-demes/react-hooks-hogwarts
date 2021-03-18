import React, {useState} from "react"
import HogDescrip from "./HogDescrip"

const HogTile = (props) => {

    const [hideCard, setHideCard] = useState(false)
    const handleHide = () => {
        setHideCard(currentHideCard => currentHideCard = !hideCard)
    }
    const [disp, setShow] = useState(false)
    const handleClick = () =>{ setShow(currentDis => currentDis = !disp)
    }
    return (
        <div onClick={handleClick} >
            <h3>{props.hogName}</h3>
            <button onClick={handleHide}>{hideCard ? "Show":"Hide"}</button>
            <div style={{display: hideCard ? "none":"block"}}>
                <img src={props.hogImg} alt={props.hogName}></img>
                {disp ? <HogDescrip specialty={props.hogSpecialty} weight={props.hogWeight} greased={props.hogGreased} hma={props.hogHMA}/> : null }
            </div>
            
        </div>
    )
}


export default HogTile