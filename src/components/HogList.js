import React, {useState} from "react"
import HogTile from "./HogTile"
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";
import porkers_data from "../porkers_data"

const hogImages = [augustus_gloop, babe, bailey,cherub,galaxy_note,leggo_my_eggo,peppa,piggy_smalls,piglet,porkchop,trouble,truffle_shuffle]


const HogList = () => {
    const tiles = () => porkers_data.map(hogInfo => (<HogTile key={hogInfo.id} hogImg={hogImages[hogInfo.id]} hogName={hogInfo.name} hogSpecialty={hogInfo.specialty} hogGreased={hogInfo.greased} hogWeight={hogInfo.weight} hogHMA={hogInfo['highest medal achieved']}/>))

    return (
        <div>
            {tiles()}
        </div>
    )
}

export default HogList