import React from "react";
import ParticlesBg  from "particles-bg";



const Home = () => {
    return (
        <div>
            <ParticlesBg type="cobweb" bg={true} />
        
        
        
            <div style={{display: 'block',textAlign: 'center',lineHeight: '100px',marginTop: '250px',}} >
                <h1 style={{ fontSize: "70px", textShadow: '3px 3px 10px  #ffbb00' }}  >Hi,</h1>
                <h1 style={{ fontSize: "70px", textShadow: '3px 3px 10px  #ffbb00' }} >My Name is Lauren</h1>
                <h3 style={{ fontSize: "40px", textShadow: '3px 3px 10px  #ffbb00'  }}> I am a Full Stack Developer</h3>
            </div>
          
        </div>
      );
    };

export default Home;