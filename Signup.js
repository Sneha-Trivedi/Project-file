import React from 'react'
import './Signup.css'
export const Signup = () => {
  return (
    <div>
      <div className="card-group">
    <div className="card">
      <div className="imeg">
        <img src="C:\Users\Bhola Mishra\Documents\all file\Image 1.jpg" 
          className="img-fluid" alt="Sample image" />
      </div>
    </div>
    <div className="card">
      <div className="card-body1">
        <form>
          <p className="head">Welcome</p>
          <p className="head1">  Create your Account </p>
          {/* <div className="">
            <label className="" for="exampleFormControlInput1"></label> */}
          {/* <Input placeholder="default size" className="name1" prefix={<UserOutlined />} /> */}

          {/* <input   type="text" id="form3Example1cg" className="name1" prefix={<UserOutlined />} placeholder="Username" name="Username" />
          </div> */}
          <div className="">
            <label className="" for="form3Example3cg"></label>
            <input type="email" id="form3Example3cg" className="email1"
              placeholder="Email Address" name="Email Address" />
          </div>

          <div className="">
            <label className="" ></label>
            <input type="password" className="password1" placeholder="Password" name="Password" />
          </div>

          {/* <div className="">
            <label className="" for=""></label>
            <input type="password" id="form3Example4cdg" className="password3" placeholder=" Confirm Password" name=" Confirm Password" />
          </div> */}

          <div className="">
            <input
              className="hi2"
              type="checkbox"
              id="form2Example3cg"
            // value=""
            />
            <label className="hi" for="form2Example3g">
              I agree all statements in <a href="#!" className="hi1"><u>ForgotPassword</u></a>
            </label>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" class="button"> Sign UP</button>
            {/* <button type="button" className=" button  ">Register</button >   */}
          </div>
          <p className="hello">already Have an account?
            <a href="http://localhost:3000/?name=&Email=&Password=kugjygvhjy&Password=" className="hello2"><u>Login</u></a></p   >
        </form>
      </div>
    </div>
  </div></div>
  )
}
