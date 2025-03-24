import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const handleSingles = ()=>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }

    const handleSix = ()=>{
        const updatedRuns = runs + 6;

        setRuns(updatedRuns)
    }



    return(
<div>   
    <h3>Player: bangla Batsman</h3>
    <h1>Score: {runs} </h1>
    <button onClick={handleSingles}>singles</button>
    <button>four</button>
    <button onClick={handleSix}>six</button>
</div>
    )
}