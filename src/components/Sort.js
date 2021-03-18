import React from "react"

const Sort = (props) => {

    return (
        <select onChange={e=>props.handleSort(e)}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    )
}

export default Sort