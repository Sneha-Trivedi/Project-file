import React from 'react';
import swal from 'sweetalert';


const Schol = () => { 
    function num()
    {
        swal(  "hello " ,"somthing rong ");
    } 

function number(){
    swal({
        title:"hello",
        text : "how are you",
        icon: "success",
        button: "Aceptar"
    });
};

function numberr(){
    swal({
        title:"hello",
        text : "how are you",
        icon: "warning",
        button: "Aceptar"
    });
};

function numbe(){
    swal({
        title:"hello",
        text : "how are you",
        icon: "info",
        button: "Aceptar"
    });
};


function nu(){
    swal({
        title:"hello",
        text : "how are you",
        icon: "error",
        buttons: ["NO" , "YES"],
    }).then(res=>{
        if(res){
            swal({text : "i am sandhya ",
            icon: "success"}
            )
        }
    })
};

  return <div> <h1> sweet alert </h1> 
  <button onClick={num} className='btn btn-primary'> submit </button>
  <button onClick={number} className='btn btn-secondary'> submit </button>
  <button onClick={numberr} className='btn btn-danger'> submit </button>
  <button onClick={numbe} className='btn btn-primary'> submit </button>

  <button onClick={nu} className='btn btn-info'> submit </button>




  </div>;
};

export default Schol;
