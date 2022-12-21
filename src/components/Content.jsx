import React from 'react'
import { useState, useEffect } from 'react'
import AKALI from './imgs/AKALI.png'
import LEESIN from './imgs/ZED.png'
import ZED from './imgs/LEESIN.png'
import KLED from './imgs/KLED.png'
import IGNITE from './imgs/IGNITE.png'
import EXAUST from './imgs/EXAUST.png'
import CELERIDADE from './imgs/celeridade.png'
import CONQUEROR from './imgs/conqueror.png'
import MORTE from './imgs/morte.png'
import PRESENCA from './imgs/presenca.png'
import CHAMUSCAR from './imgs/chamuscar.png'
import TRANSCENDENCIA from './imgs/Transcendence.png'
import FEITICARIA from './imgs/8200.webp'


const Content = () => {
    {/*AKALI --> (Exaust e Ignite) Zed, Kled, (Rengar = ganhavel), Lee sin
    NOCTURNE --> (Exaust e Ignite) Khazix, Akali, Warwick, Leblanc
    REKSAI --> (Barreira e Ignite), Kled, Nocturne, Rumble, kha'zix
    KHAZIX --> (Barreira e Ignite) Reksai, Rengar, Aatrox, Akali
    RUMBLE --> (Exaust e Ignite) Aatrox(item = berrante), Darius, Rengar, Olaf
    LEE'SIN --> (Exaust e Ignite) Darius, Renekton, Aatrox, Rek'sai, Nocturne, Warwick
    RENGAR --> (Exaust e Ignite) Darius, Aatrox, Nocturne, Irelia
    ZED --> (Exaust e Ignite) Kha zix, Rumble, Rek`sai, Lee sin, Udyr
    BARDO --> (Exaust e Ignite) Darius, Rumble
    LEBLANC --> (Barreira ou Exaust e Ignite) Akali, Rumble, Lee sin, Khazix
    TRYNDAMERE --> BAN
    RENEKTON --> (Exaust e Ignite) Quinn, Rumble, Kennen, Aatrox, Leblanc
    KLED --> (Exaust e Ignite) Warwick, Zed, Leblanc
    AATROX --> (Exaust e Ignite, Bolinha e ig pra noc)Nocturne, Akali, Irelia, Kled */}

    const heros = [
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            foto: AKALI,
            runaPrimaria: '',
            runaSecundaria: '',
            counters: {
                0: '32312312',
                1: '1323123',
                2: '312312341'
            },
            good: {
                zed: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                leesin: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                kled: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
    ]
    const [estado, setEstado] = useState(true)

    console.log(heros)
    return (
        <div className='imageBc' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='position'>

                {heros.map(({ foto, counters, good, spell }) => {
                    console.log(foto)
                    return (
                        <div style={{ width: '28%', height: '75vh', float: 'left', marginLeft: '4%', marginTop: '50px', maxHeight: '700px', backgroundColor: '#323336', boxShadow: 'rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px' }}>

                            <div style={{ display: 'flex', height: '25%' }}>
                                <div style={{ width: '30%', height: '100%' }}>
                                    <img src={foto} style={{ width: '100%', height: '100%' }}></img>
                                </div>
                                <div style={{ marginLeft: '5%', height: '100%', width: '60%', fontSize: '35px', fontWeight: 'bolder' }}>
                                    <div style={{ width: '100%', height: '50%', display: 'flex' }}>
                                        <div style={{ alignSelf: 'center' }}>Akali</div>
                                    </div>
                                    <div style={{ width: '100%', height: '50%', display: 'flex' }}>
                                        <img src={IGNITE} style={{ width: '25%', height: '100%' }}></img>
                                        <img src={EXAUST} style={{ marginLeft: '5%', width: '25%', height: '100%' }}></img>
                                        <div style={{ fontSize: '20px', alignSelf: 'center', marginLeft: '5%' }}>Tier: <span style={{ color: 'red' }}>GOD</span></div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5%', width: '90%', marginLeft: '5%' }}>

                                <button style={{ width: '20%', height: '100%', backgroundColor: 'rgb(30, 30, 30)', marginLeft: '14.5%', padding: '2%', color: 'white' }}>Runas</button>
                                <button style={{ width: '20%', height: '100%', backgroundColor: 'rgb(30, 30, 30)', marginLeft: '5%', padding: '2%', color: 'white' }}>Counters</button>
                                <button style={{ width: '20%', height: '100%', backgroundColor: 'rgb(30, 30, 30)', marginLeft: '5%', padding: '2%', color: 'white', cursor: 'pointer' }}>Buffers</button>
                            </div>
                            {estado ? <div className='runaBox' style={{ padding: '10px', height: '56%', width: '90%', marginLeft: '5%', marginTop: '4%' }}>
                                <div style={{ width: '100%', height: '33%', display: 'flex', justifyContent: 'center' }}>
                                    <img src={CONQUEROR} style={{ width: '26%', height: '100%' }}></img>
                                    <img src={FEITICARIA} style={{ width: '25%', height: '100%', marginLeft: '10%' }}></img>
                                </div>
                                <div style={{ width: '100%', height: '18%', display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
                                    <img src={PRESENCA} style={{ width: '12%', height: '90%', marginTop: '2%' }}></img>
                                    <img src={TRANSCENDENCIA} style={{ width: '12%', height: '90%', marginTop: '2%', marginLeft: '23%' }}></img>
                                </div>
                                <div style={{ width: '100%', height: '18%', display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
                                    <img src={CELERIDADE} style={{ width: '12%', height: '90%', marginTop: '2%' }}></img>
                                    <img src={CHAMUSCAR} style={{ width: '12%', height: '90%', marginTop: '2%', marginLeft: '23%' }}></img>
                                </div>
                                <div style={{ width: '100%', height: '18%', display: 'flex', justifyContent: 'center', marginRight: '5%', marginTop: '2%' }}>
                                    <img src={MORTE} style={{ width: '12%', height: '90%', marginTop: '2%', marginRight: '35%' }}></img>
                                </div>

                            </div> : <div></div>}

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Content