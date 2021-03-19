import React from "react"

const HogDescrip = (props) => {

    return (
        <section>
            <p>Weight: {props.weight}</p>
            <p>Specialty: {props.specialty}</p>
            <p>Greased: {props.greased.toString()}</p>
            <p>Higest Medal Achieved: {props.hma}</p>
        </section>
    )
}

export default HogDescrip