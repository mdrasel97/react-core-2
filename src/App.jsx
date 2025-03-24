
import './App.css'
import Counter from './counter';
import Batsman from './batsman';
import Users from './users';
import Friends from './friends';
import { Suspense } from 'react';
import Posts from './posts';

// const fetchUsers=  fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json())

// const fetchFriends = async ()=>{
//   const url = await fetch('https://jsonplaceholder.typicode.com/users');
//   return url.json();

// }

function App() {
  // const [count, setCount] = useState(0)
  // const friendsPromize = fetchFriends()
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

    <Suspense >
      <Posts></Posts>
    </Suspense>


      {/* <Suspense fallback={<h3>Friends are camming trit...</h3>}>
      <Friends friendsPromize={friendsPromize}></Friends>
      </Suspense>; */}

      

      {/* <Suspense fallback={<h3>loading...</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Batsman></Batsman>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me </button>
      <button onClick={()=>{handleadd(10)}}>Click Me </button>
      
    </>
  )
}

export default App
