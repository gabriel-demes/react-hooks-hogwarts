import React from "react"

const Filter = (props) => {

    return (
        <select onChange={e => props.handleFilter(e)}> 
            <option value={""}>All</option>
            <option value={true}>Greased</option>
            <option value={false}>Not Greased</option>
        </select>
    )
}

export default Filter