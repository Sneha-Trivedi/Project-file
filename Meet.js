import React from "react";
import "./Meet.css"
export const Meet = () => {
  return (
    <div>
      <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
          <div class="container-xl">
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="m-auto">
                <h1 className="text-center meet ">Meet To ITEG</h1>
               <h6 className="text-center">please watch this video</h6>
               </div>
              </div>
              <div className="col-md-6 text-center">
                {/* <video width="320" height="220" autoPlay="true" controls>
                  <source src="https://www.youtube.com/video/=Cn6vBe6PvLc" type="video/mp4" /> */}
                  {/* <source src="movie.ogg" type="video/ogg" /> */}
                  {/* Your browser does not support the video tag. */}
                {/* </video> */}
                <embed src="https://youtu.be/jJPw0tnMOt4" width="300" height="220"></embed>
              </div>
            </div>
           </div>
           </div>
           </div>
           </div>
          
        
  );
};
