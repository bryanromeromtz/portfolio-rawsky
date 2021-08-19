import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode, faRocket, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <div className="py-5">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <div className="box box-align">
                <div className="hexagon-icon-wrapper">
                  <div className="icon"><FontAwesomeIcon icon={faDesktop} size="3x" /></div>
                  <div className="hexagono-wrapper">
                    <div className="hexagono-1">
                      <div className="hexagono-2"></div>
                    </div>
                  </div>
                </div>
                <h3 className="details-services">Web Design</h3>
                <p>I approach each project individually and always focus on the result</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="box box-align">
                <div className="hexagon-icon-wrapper">
                  <div className="icon margin-left"><FontAwesomeIcon icon={faFileCode} size="3x" /></div>
                  <div className="hexagono-wrapper">
                    <div className="hexagono-1">
                      <div className="hexagono-2"></div>
                    </div>
                  </div>
                </div>
                <h3 className="details-services">Web Development</h3>
                <p>Your website will be built with proven new technologies. </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="box box-align">
                <div className="hexagon-icon-wrapper">
                  <div className="icon margin-left"><FontAwesomeIcon icon={faMobileAlt} size="3x" /></div>
                  <div className="hexagono-wrapper">
                    <div className="hexagono-1">
                      <div className="hexagono-2"></div>
                    </div>
                  </div>
                </div>
                <h3 className="details-services">Responsive</h3>
                <p>My layouts will work on any device, big or small.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="box box-align">
                <div className="hexagon-icon-wrapper">
                  <div className="icon"><FontAwesomeIcon icon={faRocket} size="3x" /></div>
                  <div className="hexagono-wrapper">
                    <div className="hexagono-1">
                      <div className="hexagono-2"></div>
                    </div>
                  </div>
                </div>
                <h3 className="details-services">Dinamic</h3>
                <p>Websites don't have to be static, I love making pages come to life. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
