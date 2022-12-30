import React from 'react'
import SAMUCA from '../components/imgs/samuca.png'
const Header = () => {
  return (
    <div style={{ width: '100vw', backgroundColor: 'black', opacity: '60%', height: '100px', position: 'fixed', zIndex: '99' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '92vw', maxWidth: '2400px' }}>
          <a target="_blank" rel="noopener noreferrer" href='https://www.twitch.tv/inefavel1'><img alt='' src={SAMUCA} style={{ width: '120px', height: '100px', float: 'left' }}>

          </img></a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.twitch.tv/inefavel1'><div> <p className = 'text' style={{ float: 'left', color: 'white', marginLeft: '2%', marginTop: '2.5%', fontSize: '30px',cursor:'pointer' }}>TWTV/INEFAVEL1</p></div></a>
        </div>
      </div>
    </div >
  )
}

export default Header