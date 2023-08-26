import { useEffect, useState } from "react";

const Home = () => {
 const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(data=>setData(data))
    },[])
    console.log(data,"all data")
    return (
        <div>
           <h1>This is home page</h1> 
        </div>
    );
};

export default Home;