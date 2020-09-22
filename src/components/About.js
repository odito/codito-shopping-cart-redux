import React from 'react';
import aboutImg from '../images/logo.png';

export default function About() {
    return (
        <div className="about">
          <div className="about-center">
              <div className="about-img">
                <img src={aboutImg} alt=""/>
              </div>
              <div className="about-details">
                 <p><b>C</b>lothes is a net store which has benn created in order to provide you the best service and quality in the best price. It cooperates with many famous company and provides all the benefits that you gain from this store. We are the only one who brings clothes directly from companies.
                 </p>
              </div>
          </div>
        </div>
    )
}
