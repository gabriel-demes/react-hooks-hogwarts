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
import Filter from "./Filter"
import Sort from "./Sort"
import Form from "./Form"

const hogImages = {1:babe,2:porkchop,3:cherub,4:piggy_smalls,5:trouble,6:piglet,7:peppa,8:truffle_shuffle,9:bailey,10:galaxy_note, 11:leggo_my_eggo,12:augustus_gloop}

let data = [...porkers_data]


const HogList = () => {

    const [filter, setFilter] = useState("")
    const handleFilter = (e) =>{
        setFilter(e.target.value)
    }
    
    const filterList = () =>{
        switch(filter){
            case "true":
                return (porkers_data.filter(info => (info.greased == true)));
            case "false": 
                return (porkers_data.filter(info => info.greased === false));
            case "":
                return porkers_data;
        } 
    }

    const [sort, setSort] = useState("name")
    const handleSort = (e) => {
        setSort(e.target.value)
    }
    const sortList = (array) => {
        switch(sort){
            case "weight":
                return array.sort((a,b) => (a.weight - b.weight));
            case "name":
                return array.sort((a,b) => {
                    if(a.name < b.name) { return -1; }
                    if(a.name > b.name) { return 1; }
                    return 0;
                })
        }
    }

    const tiles = () => sortList(filterList(filter)).map(hogInfo => (<HogTile key={hogInfo.id} hogImg={hogImages[hogInfo.id]} hogName={hogInfo.name} hogSpecialty={hogInfo.specialty} hogGreased={hogInfo.greased} hogWeight={hogInfo.weight} hogHMA={hogInfo['highest medal achieved']}/>))
    
    let makeNewHog =[]
    const newHog = hog => {
        return makeNewHog = [<HogTile hogImg={hog.image} hogName={hog.name} hogSpecialty={hog.specialty} hogGreased={hog.greased} hogWeight={hog.weight} />]}
    

    return (
        <div >
            <Form newHog={newHog}/>
            <Sort handleSort={handleSort}/>
            <Filter handleFilter={handleFilter} />
            <br></br><br></br>
            <div className="ui grid container">
                {tiles()}
                {makeNewHog}
            </div>
            
        </div>
    )
}

export default HogList