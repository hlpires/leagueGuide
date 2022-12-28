import React from 'react'
import SAMUCA from '../components/imgs/samuca.png'
const Header = () => {
  return (
    <div style={{ width: '100vw', backgroundColor: 'black', opacity: '60%', height: '100px', position: 'fixed', zIndex: '99' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '92vw', maxWidth: '2400px' }}>
          <a href='https://www.twitch.tv/inefavel1'><img alt='' src={SAMUCA} style={{ width: '120px', height: '100px', float: 'left' }}>

          </img></a>
          <p style={{ float: 'left', color: 'white', marginLeft: '2%', marginTop: '2.5%', fontSize: '30px' }}>TWTV/INEFAVEL1</p>
        </div>
      </div>
    </div >
  )
}

export default Header