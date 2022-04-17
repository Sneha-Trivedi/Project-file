import React, { useState } from 'react'
import './Project.css';

export default function Searchbar() {
 const [data,setData]=useState([])
 async function search(key){
    console.log(key)

    let result =await fetch("https://iteg.herokuapp.com/api/Student_Reg/Search/"+key);
   result=await result.json();
   setData(result)
  }
  
    return (
      <>

        <div id='ser' >
        
      <form  id='fo' class="d-flex ">
    
        <input id='in' class="form-control me-2 " type="search"   placeholder="Search Students..." onChange={(e)=>search(e.target.value)} />
        <div>
      
      </div>
       <button id='bu' class="btn btn-outline-primary " type="submit" >Search</button>
     
      
      </form>
    </div>
    </>

    )
 }

