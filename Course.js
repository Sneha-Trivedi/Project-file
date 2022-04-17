import React from "react";
import "./Course.css";
import photo from "../images/course1.png"
import photo1 from "../images/course2.png"
import photo3 from "../images/course4.jpg"
export const Course = () => {
  return (
    <>
    <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
          <div class="container-xl">
     <div className="Container mt-3">
              <h1 class="text-center pb-5 our">Our Courses</h1>
            </div>
            <div classname="Container">
            <div className="col-md-12 bg">
            <div className="row justify-content-center">
              
              <div className="col-md-4 g-4">
                <div class="col">
                  <div className=" card card-1">
                    <img style={{height:"300px"}}
                      src={photo } 
                      class="card-img-top mx-auto"
                      alt="photo"
                    /> 
                  </div>
                </div>
              </div>
              <div className="col-md-4 g-4">
                <div class="col">
                  <div class="card card-1">
                    <img style={{height:"300px"}}
                      src={photo3}
                      alt="photo"
                      class="card-img-top mx-auto"
                      
                    />
                     {/* <img src="https://media.istockphoto.com/vectors/programmer-working-on-the-computer-back-view-programming-and-concept-vector-id1128413234?k=20&m=1128413234&s=612x612&w=0&h=_9xkQF7FAn4FnpmQEyB-iD8Ohg5QXO2TPA6_-Zjw0s0=" class="img-fluid" alt="..."></img> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 g-4">
                <div class="col">
                  <div class="card  card-1">
                    <img style={{height:"300px"}}
                      src={photo1}
                      class="card-img-top mx-auto"
                      alt="..."
                    />
                  </div>
                </div>
                </div>
              </div>
           </div>
           </div>
         </div>
         </div>
         </div>
    </>
  );
};
