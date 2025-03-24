
import './App.css'
import Counter from './counter';
import Batsman from './batsman';

function App() {
  // const [count, setCount] = useState(0)
  function handleClick (){
    alert('clicked btn')
  }

  const handleadd = (num)=>{
    const sum = num + 5;
    alert(sum)
  }

  return (
    <>
      
      <h1>React core concepts 2</h1>

      <Batsman></Batsman>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me </button>
      <button onClick={()=>{handleadd(10)}}>Click Me </button>
      
    </>
  )
}

export default App
