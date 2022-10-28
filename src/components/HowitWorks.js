import React, { Component } from 'react';
import db from '../Images/blockchainDatabase.gif';
import bg1 from '../Images/Design-System.svg';
import './App.css';

class HowitWorks extends Component {
  render() {
    return (
      <div>
        
        <div style={{ alignItems:"center" }}>
          <img src={db} width="100%" height="75%" alt="" />
        </div>

        <img src={bg1} width="100%" height="100%" alt="" />
       
        <div class="footerc">
					<div class="container-row">
            <div class="A3L_Slogan">
              <div class="slogan_title" style={{ marginTop:5, fontFamily: "Arial", color:"white" }}>
                <h1><b>Direktorat Telekomunikasi</b><h6> Kementerian Komunikasi dan Informatika Republik Indonesia </h6></h1>
              </div>
              <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20, color:"white" }}>
                <p>
                  <h6 style={{ fontWeight: "bold" }}>
                    <a href='https://github.com/Sidb07/Ether-Cloud' style={{ fontWeight: "bold", textDecoration: "none", color: "white" }}>KOMINFO </a>
                    | 2022
                  </h6>
                </p>
              </div>
            </div>
          </div>
				</div> 

      </div>
    );
  }
}

export default HowitWorks;