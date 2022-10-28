import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>

        <div class="hero">
          <div class="container-row">
            <div class="hero2" style={{flex:1}}>
              <h1 class="hero-title" style={{ fontFamily: "Arial" }}><b>Distributed Ledger Technology</b></h1>
              <h5 class="hero-slogan" style={{ fontFamily: "Arial" }}><b>Sistem Distributed Ledger Technology (DLT)<br/> Pada layanan Perizinan Telekomunikasi</b></h5>
              <br />
              <a class="buttonHome button2"  style={{ fontFamily: "Arial", marginLeft: "350px", textDecoration: "none", color: "white"}} href="/App"><b>Get Started </b><i class="arrow right"></i></a>                 
            </div>
          </div>
        </div>

        <div class="hero3" >
            <div class="intro" style={{flex:1}}>
              <Fade left>
                <h1 class="hero-title" style={{ fontFamily: "Arial" }}><b>Mengapa DLT ?</b></h1>
                <h5 class="hero-slogan" style={{ fontFamily: "Arial" }}>
                  <ul>
                    <li>Desentralisasi. Karena jaringan terdesentralisasi jadi tidak ada satu entitas pun yang dapat mengontrol atau memanipulasi jaringan.</li> <br/> <p>&nbsp;</p>
                    <li>Transparansi. Jaringan blockchain menawarkan transparansi dalam hal ledger / buku besar transaksi yang sepenuhnya dapat diaudit dan valid.</li> <br/> <p>&nbsp;</p>
                    <li>Immutability. Immutability atau kekekalan sebagai basis data yang tidak dapat diubah dan Setiap blok informasi diproses menggunakan prinsip kriptografi atau nilai hash.</li> <br/> <p>&nbsp;</p>
                    
                  </ul>  
                </h5>
              </Fade>
            </div>
        </div>
        
        <div class="hero4" >  
          <div class="objective" style={{flex:1}}>
            <Fade right>
              <h1 class="hero-title" style={{ fontFamily: "Arial" }}><b>Kegunaan</b></h1>
              <h5 class="hero-slogan" style={{ fontFamily: "Arial" }}>
                <ul>
                  <li>---------------------------------------.</li> <br/> <p>&nbsp;</p>
                  <li>---------------------------------------.</li> <br/> <p>&nbsp;</p>  
                  <li>---------------------------------------.</li> <br/> <p>&nbsp;</p>                    
                  <li>---------------------------------------.</li> <br/> <p>&nbsp;</p>
                  <li>---------------------------------------.</li> <br/> <p>&nbsp;</p>
                  <li>---------------------------------------.</li> <br/> <p>&nbsp;</p>
                </ul>  
              </h5>
            </Fade>
          </div>
        </div>

        <div class="footerc">
					<div class="container-row">
            <div class="A3L_Slogan">
              <div class="slogan_title" style={{ marginTop:5, fontFamily: "Arial", color:"white" }}>
                <h1><b>Direktorat Telekomunikasi</b><h6> Kementerian Komunikasi dan Informatika Republik Indonesia </h6></h1>
              </div>
              <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20, color:"white" }}>
                <p>
                  <h6 style={{ fontWeight: "bold" }}>
                    <a href='https://kominfo.go.id/' style={{ fontWeight: "bold", textDecoration: "none", color: "white" }}>KOMINFO  </a>
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

export default Home;