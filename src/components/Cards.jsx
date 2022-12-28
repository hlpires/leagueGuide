import React from 'react'
import { useState } from 'react'



const Cards = ({foto,counters,good,spell,runaPrimaria,runaSecundaria,tier,nome}) => {


    const [estado, setEstado] = useState(true)
    const [estado1, setEstado1] = useState(false)
    const [estado2, setEstado2] = useState(false)
    return (
        <div style={{ borderRadius:'15px',width: '24%', height: '65vh', float: 'left', marginLeft: '7%', marginTop: '50px', maxHeight: '700px', backgroundColor: '#323336', boxShadow: 'rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px',border:'0.5px solid black' }}>

            <div className='tittleCard' style={{ display: 'flex', height: '25%' }}>
                <div style={{ width: '30%', height: '100%' }}>
                    <img alt='' src={foto} style={{ width: '100%', height: '100%' }}></img>
                </div>
                <div style={{ marginLeft: '5%', height: '100%', width: '60%', fontSize: '35px', fontWeight: 'bolder' }}>
                    <div style={{ width: '100%', height: '50%', display: 'flex' }}>
                        <div style={{ alignSelf: 'center',color:'red' }}>{nome}</div>
                    </div>
                    <div style={{ width: '100%', height: '50%', display: 'flex' }}>
                        <img alt='' src={spell[0]} style={{ width: '20%', height: '80%',marginTop:'5%' }}></img>
                        <img alt='' src={spell[1]} style={{ marginLeft: '5%',width: '20%', height: '80%',marginTop:'5%' }}></img>
                        <div style={{ fontSize: '36px', alignSelf: 'center', marginLeft: '8%',marginTop:'12%' }}>Tier: <span style={{ color: 'red' }}>{tier}</span></div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '4%', width: '90%', marginLeft: '5%' }}>

                <button className='button' onClick= {() =>{ 
                    setEstado(true)
                    setEstado1(false)
                    setEstado2(false)}} 
                style={{ marginLeft: '15%' }}>Runas</button>
                <button className='button' onClick= {() =>{ 
                    setEstado1(true)
                    setEstado(false)
                    setEstado2(false)}}  >Counters</button>
                <button className='button' onClick= {() =>{ 
                    setEstado2(true)
                    setEstado(false)
                    setEstado1(false)}}>Bom VS</button>
            </div>
      
            {estado && <div className='runaBox' style={{ padding: '10px', height: '56%', width: '90%', marginLeft: '5%', marginTop: '8%' }}>
                <div style={{ width: '100%', height: '33%', display: 'flex', justifyContent: 'center' }}>
                    <img alt='' src={runaPrimaria[0]} style={{ width: '32%', height: '100%',marginRight: '4%' }}></img>
                    <img alt='' src={runaSecundaria[0]} style={{ width: '20%', height: '70%',marginTop:'5%', marginRight: ' 6%' }}></img>
                    <img alt='' src={runaSecundaria[0]} style={{ width: '20%', height: '70%',marginTop:'5%', marginLeft: ' 3%',marginRight: ' 4%' }}></img>
                </div>
                <div style={{ width: '100%', height: '18%', display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
                    <img alt='' src={runaPrimaria[1]} style={{ width: '15%', height: '90%',marginLeft: '5%' }}></img>
                    <img alt=''  src={runaSecundaria[1]} style={{ width: '15%', height: '90%', marginLeft: '15%',marginRight: '0%' }}></img>
                    <img alt='' src={runaSecundaria[0]} style={{ width: '20%', height: '120%',marginTop:'0%', marginLeft: '12%'}}></img>
                </div>
                <div style={{ width: '100%', height: '18%', display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
                    <img alt='' src={runaPrimaria[2]} style={{ width: '15%', height: '90%', marginRight: '15%' }}></img>
                    <img alt='' src={runaSecundaria[2]} style={{ width: '15%', height: '90%',  marginRight: '26%' }}></img>
                </div>
                <div style={{ width: '100%', height: '18%', display: 'flex', justifyContent: 'center', marginRight: '5%', marginTop: '2%' }}>
                    <img alt='' src={runaPrimaria[3]} style={{ width: '15%', height: '90%', marginRight: '56.5%' }}></img>
                </div>

            </div>}
            {estado1 && <div className='runaBox' style={{ padding: '10px', height: '56%', width: '90%', marginLeft: '5%', marginTop: '4%' }}>
                <div style={{ height: '30%',  }}>
                    <img alt='' src={counters[0].imagem} style={{ height: '100%', width: '25%', float: 'left',marginLeft:'37.5%' }}></img>
                {/* <div style={{ height: '100%', border: '1px solid red', width: '75%', float: 'left', textAlign: 'left', wordWrap: 'break-word', color: 'white', padding: '5px' }}>
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>*/}
                </div>
                <div style={{ height: '30%',  marginTop: '4%' }}>
                    <img alt='' src={counters[1].imagem} style={{ height: '100%',  width: '25%', float: 'left',marginLeft:'37.5%' }}></img>
                  {/*  <div style={{ height: '100%', border: '1px solid red', width: '75%', float: 'left', textAlign: 'left', wordWrap: 'break-word', color: 'white', padding: '5px' }}>
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>*/}
                </div>
                <div style={{ height: '30%',  marginTop: '4%' }}>
                    <img alt=''  src={counters[2].imagem} style={{ height: '100%',  width: '25%', float: 'left',marginLeft:'37.5%' }}></img>
                  {/*  <div style={{ height: '100%', border: '1px solid red', width: '75%', float: 'left', textAlign: 'left', wordWrap: 'break-word', color: 'white', padding: '5px' }}>
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>  */}
                </div>
            </div>}
            {estado2 && <div className='runaBox' style={{ padding: '10px', height: '56%', width: '90%', marginLeft: '5%', marginTop: '4%' }}>
                <div style={{ height: '30%' }}>
                    <img alt='' src={good[0].imagem} style={{ height: '100%', width: '25%', float: 'left',marginLeft:'37.5%' }}></img>
                   {/* <div style={{ height: '100%', border: '1px solid red', width: '75%', float: 'left', textAlign: 'left', wordWrap: 'break-word', color: 'white', padding: '5px' }}>
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div> */}
                </div>
                <div style={{ height: '30%', marginTop: '4%' }}>
                    <img alt='' src={good[1].imagem} style={{ height: '100%', width: '25%', float: 'left',marginLeft:'37.5%' }}></img>
                     {/* <div style={{ height: '100%', border: '1px solid red', width: '75%', float: 'left', textAlign: 'left', wordWrap: 'break-word', color: 'white', padding: '5px' }}>
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>*/}
                </div>
                <div style={{ height: '30%', marginTop: '4%' }}>
                    <img alt='' src={good[2].imagem} style={{ height: '100%',  width: '25%', float: 'left',marginLeft:'37.5%' }}></img>
                     {/* <div style={{ height: '100%', border: '1px solid red', width: '75%', float: 'left', textAlign: 'left', wordWrap: 'break-word', color: 'white', padding: '5px' }}>
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>*/}
                </div>
            </div>}


        </div>
    )
}

export default Cards