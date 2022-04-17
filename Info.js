import React from "react";
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

import ".//Info.css";

export const Info = () => {
  return (
    <div className="container-fluid">
      <div className="container container-1 mt-5 mb-5">
        <div classname="col-md-6 pt-3">
          <h1 className="pb-3 per">Personal Info</h1>
        </div>

        <div className="center">
          <div className="row">
            <div class="col-md-6 pb-3">
              <label for="inputPassword4 " class="form-label">
                First Name
              </label>
              <input type="Text" class="form-control" id="inputPassword4" />
            </div>

            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Last Name
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Date Of Birth
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6  ">
              <label for="inputPassword4" class="form-label">
                Gender
              </label>
              <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect02">
                  <option selected></option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
            </div>

            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Father's Name
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>

            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Mother's Name
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Mobile No.
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Father Contact
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Enrollment No
              </label>
              <input type="Text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Email Address
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Father Occupation{" "}
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6  pb-3">
              <label for="inputPassword4" class="form-label">
                Aadhar Number
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6  pb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Permanent Address
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="col-md-6 pb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Residentail Address
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="row justify-content-center pb-3">
            <Link to="/Infonext">
            <button className="next">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
