import React from 'react'
import './Login.css';
export const Login = () => {
  return (
    <div>
        <div className='container'>
        <div className="card-group">
      <div className="card">
        <div className="imeg">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
        </div>
      </div>
      <div className="card">
        <div className="card-body1">
          <form>
            <p className="head">Welcome</p>
            <p className="head1">  Create your Account </p>
            <div className="">
              <label className="" for="exampleFormControlInput1"></label>
              {/* <Input placeholder="default size" className="name1"  /> */}

              <input   type="text" id="form3Example1cg" className="name1"  placeholder="Username" name="Username" />
            </div>
            <div className="">
              <label className="" for="form3Example3cg"></label>
              <input type="email" id="form3Example3cg" className="email1"  placeholder="Email Address" name="Email Address"/>
            </div>

            <div className="">
              <label className="" ></label>
              <input type="password"  className="password1" placeholder="Password" name="Password" />
            </div>

            <div className="">
              <label className="" for=""></label>
              <input type="password" id="form3Example4cdg" className="password3" placeholder=" Confirm Password" name=" Confirm Password" />
            </div>

            {/* <div className="">
              <input
                className="hi2"
                type="checkbox"
                id="form2Example3cg"
                // value=""
              />
              <label className="hi" for="form2Example3g">
                I agree all statements in <a href="#!" className="hi1"><u>ForgotPassword</u></a>
              </label>
            </div> */}

            <div className="d-flex justify-content-center">
            <button type="submit" class="button"> Sign UP</button>
              {/* <button type="button" className=" button  ">Register</button >   */}
            </div>
            <p className="hello">already Have an account? 
            <a href="" className="hello2"><u>Login</u></a></p>
          </form>  
             </div>
          </div> 
       </div>
       </div>
    </div>
  )
}
