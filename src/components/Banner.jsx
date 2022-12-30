import React from 'react'
import { useRef  } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
const Banner = () => {


    const embed = useRef();

    const handleReady = (e) => {
        embed.current = e;
      };
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='banner' style={{ height: '80vh', maxHeight: '1100px',display:'flex',justifyContent:'center' }}>
            <div style ={{alignSelf:'center',maxWidth:'1000px'}}>
            <TwitchEmbed channel="inefavel1" width = {1000} autoplay = {false} muted withChat = {false} darkMode={true} hideControls onVideoReady={handleReady} />
            </div>
            </div>
        </div >
    )
}

export default Banner