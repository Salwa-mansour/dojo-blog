import { useState,useEffect } from "react";

const Home = () => {
    const [cats,setCats]=useState([])
    const key ='api_key=live_O5GVLcrkcR1HqG4Pkkk0N5Bu6J3XO78c7Nafdgr1ppXkwdGlCUFMXmaiFrf0raNx'
    const url =`https://api.thecatapi.com/v1/images/search?limit=10&width=200&${key}`

    useEffect(() => {
        fetch(url)
          .then(res => {
            return res.json();
          })
          .then(data => {
            setCats(data);
         
          }).catch(error=>{
            console.log(error);
          })
      }, [])
    return ( 
        <ul className="home">
        {
            cats.map(cat=> <li key={cat.id}>
                <img src={cat.url} width={200} alt="cat" />
            </li>)
        }
        </ul>
     );
}
 
export default Home;