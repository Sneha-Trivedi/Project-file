import React from 'react'
import "./Infonext.css"
import { Link } from 'react-router-dom'
export const Infonext = () => {
  return (
    <div>
        <div className='main'>
         <div class="app-wrapper">
    <div class="app-content pt-3 p-md-3 p-lg-4">
      <div class="container-xl">

            <div class="container col-5" id="mainCtn">
                <div class="d-flex justify-content-center mt-4" id="academics">
                    Academics
                </div>
                <div class="p-2 mt-3">
                    <div>
                        <div className="d-flex">
                            <label className="col-3 pb-4" id="label" >Course</label>
                            <div class="col-3">
                                <select class="form-select col-3">
                                    <option selected>&nbsp;</option>
                                    <option value="1">BCA</option>
                                    <option value="2">Bsc(cs)</option>
                                    <option value="3">BBA</option>
                                    <option value="3">Bcom</option>
                                    <option value="3">Bsc(Biotach)</option>
                                    <option value="3">Bsc(Microbiology)</option>
                                    <option value="3">Diploma</option>
                                </select>
                            </div>

                            <label className="col-3 mgn" id="label" >Date of Join</label>
                            <div class="col-3">
                                <select class="form-select col-3">
                                    <option selected>&nbsp;</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="d-flex">
                            <label class="col-3" id="label" >Level</label>
                            <div class="col-3">
                                <select class="form-select col-3 ">
                                    <option selected>&nbsp;</option>
                                    <option value="1">Level-A</option>
                                    <option value="2">Level-B</option>
                                    <option value="3">Level-c</option>
                                </select>
                            </div>

                            <label class="col-3 mgn" id='label' >Year</label>
                            <div class="col-3">
                                <select class="form-select col-3">
                                    <option selected>&nbsp;</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" border-dark mt-3 p-2 font" >
                    <div class="d-flex justify-content-around">
                        <div class="heading col-3">Qualification's</div>
                        <div class="heading col-3">Board</div>
                        <div class="heading col-3">Percentage</div>
                        <div class="heading col-3">Passing Year</div>
                    </div>
                    <div class="d-flex justify-content-around">
                        <div class="heading mt-3">Class 10th</div>
                        <input type="text" class="form-control mt-3" id="inputFeild" placeholder="" />
                        <input type="text" class="form-control mt-3" id="inputFeild" placeholder="" />
                        <input type="text" class="form-control mt-3" id="inputFeild" placeholder="" />
                    </div>
                    <div class="d-flex justify-content-around">
                        <div class="heading mt-3">Class 12th</div>
                        <input type="text" class="form-control mt-3" id="inputFeild" placeholder="" />
                        <input type="text" class="form-control mt-3" id="inputFeild" placeholder="" />
                        <input type="text" class="form-control mt-3" id="inputFeild" placeholder="" />
                    </div>

                </div>
                <div class="ml-3">
                    <div class="d-flex mt-3">
                        <label class="col-5 mt-3 text-center" id="head" >10th Marksheet</label>
                        
                        {/* <button type="button" class="btn btn-primary mt-3 col-2" id="btn"><span id="upload">Upload</span></button> */}
                        <div class="mb-3">
  
  <input class="form-control mt-3" type="file" id="formFile"/>
   </div>
                    </div>
                    <div class="d-flex mt-3">
                        <label class="col-5 mt-3 text-center" id="head" >12th Marksheet</label>
                        
                        {/* <button type="button" class="btn btn-primary mt-3 col-2" id="btn"><span id="upload">Upload</span></button> */}                       
                         <div class="mb-3">
  
                          <input class="form-control" type="file" id="formFile"/>
                           </div>

                    </div>
                    <div class="d-flex mt-3">
                        <label class="col-5 mt-3 text-center" id="head" >Sport's Certificate</label>
                        
                        {/* <button type="button" class="btn btn-primary mt-3 col-2" id="btn"><span id="upload">Upload</span></button> */}
                        <div class="mb-3">
  
  <input class="form-control" type="file" id="formFile"/>
   </div>

                    </div>
                    <div class="d-flex mt-3">
                        <label class="col-5 mt-3 text-center" id="head" >Diploma Certificate</label>

                        {/* <button type="button" class="btn btn-primary mt-3 col-2" id="btn"><span id="upload">Upload</span></button> */}
                        <div class="mb-3">
  
  <input class="form-control" type="file" id="formFile"/>
   </div>
                    </div>
                    <div class="d-flex mt-3 pb-3">
                        <label class="col-5 mt-3 text-center" id="head" >Aadhar Card</label>
                        {/* <div class="col-1"></div> */}
                       
                        <div class="mb-3">
  
                          <input class="form-control" type="file" id="formFile"/>
                           </div>

                    </div>
                </div>
                <Link to="/Nextreg">
                <div class="d-flex justify-content-center pb-3">
                <button className="next">Next</button>
                </div>
                </Link>
            </div>
        </div>
          </div>
          </div>
          </div>
          </div>
  )
}
