import React from "react";
import './Card.css';
import { Link } from "react-router-dom";
export const Cards = () => {
  return (
    <div>
        <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
          <div class="container-xl">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
              <div className="col">
                <div className="border">
                  <Link to="/Student">
                <div className="card">
                  <img src="https://media.istockphoto.com/vectors/meeting-ompany-employees-teamwork-illustration-vector-id1206795585?k=20&m=1206795585&s=612x612&w=0&h=76zKxQLiJL7uZIosN03TKKm-Qo-hD8Az9i2IPJBZCLk=" alt="..." />
                  <div class="card-body color">
                    <h5 class="card-title">Level-A</h5>
                   </div>
                </div>
                </Link>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://media.istockphoto.com/vectors/informational-poster-meeting-daily-glider-flat-vector-id1158179060?k=20&m=1158179060&s=612x612&w=0&h=37ghf6UcAkkJAPnTVDfVg1h_5QMiSPwpiXO290yJcn8=" alt="..." />
                  <div class="card-body color">
                    <h5 class="card-title">Level-B</h5>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://media.istockphoto.com/vectors/cognitive-banner-teamwork-task-execution-flat-vector-id1158789823?k=20&m=1158789823&s=612x612&w=0&h=iSTP0pV5-TUE6I68nC77Yvla8kBXTht8UII9JKYcEuM=" class="card-img-top" alt="..." />
                  <div class="card-body color">
                    <h5 class="card-title">Level-C</h5>
                    
                  </div>
                </div>
              </div>

              {/* <a class="app-card-link-mask" href="#"></a> */}
            </div>
          </div>
          </div>
             </div>
       {/* </div> */}
          //   </div>
  );
};
export default Cards;
