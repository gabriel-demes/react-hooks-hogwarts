import React, {useState} from "react"

const Form = (props) => {

    const [name, setName] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [greased, setGreased] = useState("greased")
    const [weight, setWeight] = useState("")
    const [image, setImage] = useState("")
    const [hma, setHMA] = useState("")

    const handlesSubmit = (e) => {
        e.preventDefault()
        props.newHog({name, specialty, greased, weight, image, hma})
    }

    return (
        <form onSubmit={e=>handlesSubmit(e)} >
            <input onChange={e=>setName(e.target.value)} placeholder="Name" ></input>
            <input onChange={e=>setSpecialty(e.target.value)} placeholder="Specialty"></input>
            <select onChange={e=> setGreased(e.target.value)}>
                <option value="true">Greased</option>
                <option value="false">UnGrased</option>
            </select>
            <input onChange={e=>setWeight(e.target.value)}placeholder="Weight"></input>
            <input onChange={e=>setImage(e.target.value)} placeholder="Image"></input>
            <input onChange={e=>setHMA(e.target.value)}placeholder="Highest Medal"></input>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form