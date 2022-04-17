import React from "react";
import {MdOutlineVerifiedUser} from 'react-icons/md'
// import {GrCertificate} from 'react-icons/gr'
import {SiGoogleclassroom} from 'react-icons/si'
import {FaBookReader} from 'react-icons/fa'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {FaLaptopCode} from 'react-icons/fa'
import {RiCreativeCommonsNcFill} from 'react-icons/ri'
import {HiPuzzle} from 'react-icons/hi'
import './Whatwe.css';
export const Whatwe = () => {
  return (
    <>
      <div class="app-wrapper">
        <div class="app-content  p-md-3 p-lg-4">
          <div class="container-xl">
            
              <div className="row pt-5">
                <div class="col-md-6">
                
                {/* <img classname="border img-fluid"  src="https://fienta.com/uploads/16894.jpg"></img> */}
                <img src="https://fienta.com/uploads/16894.jpg" className="img-fluid pb-5 img-1" alt="..."></img>
                </div>
                <div class="col-md-6">
                <h2 class="text-center mt-3 what">What We Offer</h2>
                <p className="pb-3 text-center pb-3">On her way she met a copy. The copy warned the Little Blind Text,  that was left from its origin would be the word.</p>
                <div className="row g-4">
                <div className="col-md-6 ">
            <div className="d-flex">
                <div className="safe "><SiGoogleclassroom size="35px" color="white"/>
                  </div>
                  
                  <div className="center">
                  <h6>Regular Classes</h6>
                  </div>
                </div>
                  </div>
                 
                
                  <div className="col-md-6 pb-3 d-flex">
                  
                  <div className="safe"><FaBookReader size="35px" color="white"/>
                  </div>
                  <div className="center">
                  <h6>Safety First</h6></div>
                  </div>
                  </div>

                  
                  <div className="row g-4">
               <div className="col-md-6   d-flex">
                  
                  <div className="safe"><BsJournalBookmarkFill size="35px" color="white"/>
                  </div>
                  <div className="center">
                  <h6>Certified Teachers</h6></div>
                  </div>
                  <div className="col-md-6 d-flex">
                  
                  <div className="safe"><FaLaptopCode size="35px" color="white"/>
                  </div>
                  <div className="center">
                  <h6>Computer Lab</h6></div>
                  </div>
                  </div>
                  
                  <div className="row mt-3">
               <div className="col-md-6 pb-3   d-flex">
                  
                  <div className="safe"><RiCreativeCommonsNcFill size="35px" color="white"/>
                  </div>
                  <div className="center">
                  <h6>Communication Skills</h6></div>
                  </div>
                  <div className="col-md-6 d-flex">
                  
                  <div className="safe"><HiPuzzle size="35px" color="white"/>
                  </div>
                  <div className="center">
                  <h6>Creative Lessons </h6></div>
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
