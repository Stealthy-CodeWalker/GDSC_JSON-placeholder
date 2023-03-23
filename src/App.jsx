import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [post, setPost] = useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)//fetching JSON data as a promise object
    .then((response)=>response.json())//parsing the promise object as a json file
    .then((data)=>setPost(data))//setting the json data to the hook
    .catch((err)=>console.log(err))
},[]);
  return (
    <body>
      {post.map((e)=>//mapping the hook data
      (
          <span>
            <p><b>userId</b>: {e.userId}</p>
            <p><b>id</b>: {e.id}</p>
            <p><b>title</b>: {e.title}</p>
            <p><b>body</b>: {e.body}</p>
          </span>
        ))
      }
    </body>
  )
}

export default App
