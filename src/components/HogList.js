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



const HogList = () => {
    const hogImages = {"Babe":babe, "Porkchop":porkchop,"Cherub":cherub,"Piggy smalls":piggy_smalls,"Trouble":trouble,"Piglet":piglet,"Peppa":peppa,"Truffle Shuffle":truffle_shuffle,"Bailey":bailey,"Galaxy Note":galaxy_note, "Leggo My Eggo":leggo_my_eggo,"Augustus Gloop":augustus_gloop}

    const [images, setImages] = useState({...hogImages})
    const [hogs, setHogs] = useState([...porkers_data])

    const [filter, setFilter] = useState("")
    const handleFilter = (e) =>{
        setFilter(e.target.value)
    }
    
    const filterList = () =>{
        switch(filter){
            case "true":
                return (hogs.filter(info => (info.greased === true)));
            case "false": 
                return (hogs.filter(info => info.greased === false));
            default:
                return hogs;
            
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


    const tiles = () => sortList(filterList(filter)).map(hogInfo => (<HogTile key={hogInfo.id} hogImg={images[hogInfo.name]} hogName={hogInfo.name} hogSpecialty={hogInfo.specialty} hogGreased={hogInfo.greased} hogWeight={hogInfo.weight} hogHMA={hogInfo['highest medal achieved']}/>))
    
    const newHog = hog => {
        setHogs([...hogs, {id:(hogs.length +1), name:hog.name, specialty:hog.specialty, greased:hog.greased, weight:hog.weight, "highest medal achieved":hog.hma}])
        setImages({...images, [hog.name]:hog.image})
        }
    

    return (
        <div >
            <Form newHog={newHog}/>
            <Sort handleSort={handleSort}/>
            <Filter handleFilter={handleFilter} />
            <br></br><br></br>
            <div className="ui grid container">
                {tiles()}

            </div>
            
        </div>
    )
}

export default HogList