import React, { useEffect, useState } from "react";
import {AiTwotoneEdit} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import { Link } from "react-router-dom";
import Searchbar from './Searchbar';





function Student() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://iteg.herokuapp.com/api/Student_Reg/List").then((result) => {
      result.json().then((response) => {
        console.log("result", response)
        setData(response.data);
      });
    });
  }, []);
  console.log(data);



  return (
    <>
  
      <Searchbar />
      <br></br>
      <br></br>
      <div>
        <table id="tb" className="table table-borderrd table-striped mb-0  containear-sm table-wrapper-scroll-y my-custom-scrollbar"   >
          <thead>
            <tr className="border" > 
              
              <th>FirstName</th>
              <th>LastName</th>
              <th >Father's Name</th>
              <th  >Email</th>
              <th >Address</th>
              <th >Enrool</th>
              <th  >Level</th>
              <th  >Action</th>

            </tr>
          </thead>
          {
            data.map((item) => (

              <tr className="border1">

                 <td >{item.FirstName}</td>
                 <td>{item.LastName}</td>
                <td>{item.FatherName}</td>
                <td>{item.Email}</td>
                <td>{item.PermanentAddress}</td>
                <td>{item.EnrollmentNo}</td>
                <td>{item.Leval}</td>
                <td><Link to={"/update/" }><AiTwotoneEdit id="icon" /></Link><Link to={"/update/" }><MdDelete id="ic" /></Link></td> 
                




              </tr>


            )
            )
          }

        </table>
      </div>
    </>


  );
}

export default Student;

