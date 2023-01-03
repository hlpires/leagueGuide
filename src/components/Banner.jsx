import React from 'react'
import { useRef  } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import pix from './imgs/pix.png'
const Banner = () => {


    const embed = useRef();

    const handleReady = (e) => {
        embed.current = e;
      };
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='banner' style={{ height: '80vh', maxHeight: '1100px',display:'flex',justifyContent:'center' }}>
            <div style ={{alignSelf:'center',maxWidth:'1000px'}}>
            <TwitchEmbed channel="inefavel1" width = {800} autoplay = {false} muted withChat = {false} darkMode={true} hideControls onVideoReady={handleReady} />
            </div>
            <div className = 'pix' style = {{width:'400px',height:'484px',alignSelf:'center', marginLeft:'50px',justifyContent:'center'}}>
            <div style = {{width:'90%',height:'35%',marginTop:'5%',marginLeft:'5%'}}>
                <h1 style = {{color:'white',textAlign:'center'}}>Ajude nos a fazer mais</h1>
                <p  style = {{color:'white',textAlign:'center',marginTop:'10px',fontSize:'20px'}}>Criamos esse site com o intuito de ajudar toda a comunidade x1, ao doar Você também nos ajuda a criar novos recursos para você usar, e ficar fera no x1 !</p>
            </div>
            <div style = {{width:'250px',height:'250px',marginTop:'5%',marginLeft:'18.5%'}}>
            <img src={pix} style = {{width:'100%',height:'100%'}}></img>
            </div>
    
            </div>
            </div>
        </div >
    )
}

export default Banner