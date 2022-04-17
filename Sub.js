import React from 'react'
import './Sub.css';
import{AiOutlinePlus} from 'react-icons/ai'
import {GrFacebook} from 'react-icons/gr'
import{BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
export const Sub = () => {
  return (
    <div>
        <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
          <div class="container-xl">
        <section id="team" class="pb-5">
    <div class="container-5">
        <h6  className="text-center the-best">The Best</h6>
        <h5 class="section-title h1">OUR Faculty</h5>
        <div class="row">
            {/* <!-- Team member --> */}
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oC0cLNyFt4XMtPNe35Tct-8iicsxnDi--fghnv05pczTghd04zc3wR9ATttVVHswLX4&usqp=CAU"/></p>
                                    
                                    <h4 className="pb-3">Ken Silburn</h4>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                               < GrFacebook class="Icon-color"/>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <BsLinkedin class="Icon-color" />
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                               <BsTwitter class="Icon-color"/>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title"> Teacher Profile</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <button type="button" className="View-profile">View Profile</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://images.ctfassets.net/4f3rgqwzdznj/1hUSCabcoMdzEp7FxKLLyN/c154604d80cfe126983e2cc4352785cc/92be7d82-1b87-4c6e-9d6d-d625d343df70_edited_-_Alex_Evans__1_.jpg.png" alt="card image"/></p>

                                    <h4 className="pb-3">Michael Wamaya </h4>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                               < GrFacebook class="Icon-color"/>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <BsLinkedin class="Icon-color"/>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                               <BsTwitter class="Icon-color"/>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Teacher Profile</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <button type="button" className="View-profile">View Profile</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* <!-- ./Team member --> */}
            {/* <!-- Team member --> */}
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://llhealthyfit.files.wordpress.com/2016/07/profile-picture-june-2015-corner-rounded.png" alt="card image"/></p>
                                    {/*  */}
                                    <h4 className="pb-3">Marie-Christine</h4>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                               < GrFacebook class="Icon-color"/>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <BsLinkedin class="Icon-color"/>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                               <BsTwitter class="Icon-color"/>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title"> Teacher Profile</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <button type="button" className="View-profile">View Profile</button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshI7GTVwE68wubiCZRsHr9nKiv5ngPFNSWpWV4lh0QZ6ykBChZHhkkvdwwfxRQKvTl1U&usqp=CAU"/></p>
                                    {/*  */}
                                    <h4 className="pb-3">Ghanbari Jahromi</h4>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                               < GrFacebook class="Icon-color"/>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <BsLinkedin class="Icon-color"/>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                               <BsTwitter class="Icon-color"/>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Teacher Profile</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <button type="button" className="View-profile">View Profile</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            </div>
            </section>
            
            
        </div>
    </div>
  </div>
  </div>
  )
}
