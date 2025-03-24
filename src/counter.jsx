import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = ()=>{
        const newCount = count + 1;
        setCount(newCount)
        // alert('add button clicked')
    }
    const counterStyle = {
        border: '1px solid yellow'
    }
return(
    <div style={counterStyle}>
        <h3>Count: {count} </h3>
        <button onClick={handleAdd}>Click Me </button>
    </div>
)
}