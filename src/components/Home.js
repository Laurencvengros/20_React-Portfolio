import React from "react";
import ParticlesBg  from "particles-bg";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Anton', 'Montserrat']
    }
  });

const Home = () => {
    return (
        <div>
            <ParticlesBg type="cobweb" bg={true} />
        
        
        
            <div style={{display: 'block',textAlign: 'center',lineHeight: '100px',marginTop: '250px',}} >
                <h1 style={{ fontSize: "70px", textShadow: '3px 3px 10px  #ffbb00',fontFamily: 'Anton'  }}  >Hi,</h1>
                <h1 style={{ fontSize: "70px", textShadow: '3px 3px 10px  #ffbb00',fontFamily: 'Anton'  }} >My Name is Lauren</h1>
                <h3 style={{ fontSize: "40px", textShadow: '3px 3px 10px  #ffbb00', fontFamily: 'Montserrat'  }}> I am a Full Stack Developer</h3>
            </div>
          
        </div>
      );
    };

export default Home;