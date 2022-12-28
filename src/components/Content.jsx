import React from 'react'
import AKALI from './imgs/AKALI.png'
import ZED from './imgs/ZED.png'
import LEESIN from './imgs/LEESIN.png'
import KLED from './imgs/KLED.png'
import IGNITE from './imgs/IGNITE.png'
import EXAUST from './imgs/EXAUST.png'
import Cards from './Cards'
import ESPONTANIEDADE from './imgs/celeridade.png'
import CONQUEROR from './imgs/conqueror.png'
import MORTE from './imgs/morte.png'
import PRESENCA from './imgs/presenca.png'
import CHAMUSCAR from './imgs/chamuscar.png'
import TRANSCENDENCIA from './imgs/Transcendence.png'
import FEITICARIA from './imgs/8200.webp'
import KHA from './imgs/KHA.png'
import COMETA from './imgs/COMETA.png'
import ORBE from './imgs/ORBE.png'
import OSSO from './imgs/OSSO.png'
import revitalizar from './imgs/revitalizar.png'
import DETER from './imgs/DETER.png'
import YORICK from './imgs/yorick.png'
import GRASP from './imgs/GRASP.png'
import DEMOLIR from './imgs/Demolir.png'
import VENTOS from './imgs/ventos.png'
import INABALAVEL from './imgs/INABALAVEL.png'
import FAIXA from './imgs/FAIXA.png'
import Aatrox from './imgs/Aatrox.png'
import MANTOS from './imgs/mantos.png'
import TRYNDA from './imgs/Tryndamere.png'
import RITMO from './imgs/RITMO.png'
import CURA from './imgs/CURA.png'
import RENEKTON from './imgs/RENEKTON.png'
import GOLPE from './imgs/GOLPE.png'
import BARDO from './imgs/Bard.png'
import RENGAR from './imgs/rengar.png'
import RENGARAP from './imgs/RengarAP.png'
import AGILIDADE from './imgs/AGILIDADE.png'
import LINHAGEM from './imgs/linhagem.png'
import ELETRO from './imgs/ELETRO.png'
import IMPACTO from './imgs/IMPACTO.png'
import GLOBOS from './imgs/GLOBOS.png'
import cacada from './imgs/cacada.png'
import Kindred from './imgs/Kindred.png'
import EVELYN from './imgs/EVELYN.png'
import TENACIDADE from './imgs/TENACIDADE.png'
import IRELIA from './imgs/IRELIA.png'
import WARWICK from './imgs/WARWICK.png'
import NOC from './imgs/noc.png'
import RUMBLE from './imgs/Rumble.png'
import LEBLANC from './imgs/leblanc.png'
import REKSAY from './imgs/reksay.png'
import CHUVAS from './imgs/CHUVAS.png'
import QUINN from './imgs/QUINN.png'
import CELERIDADE from './imgs/espontaniedade.png'
import golpeescudo from './imgs/golpeescudo.png'
import nunu from './imgs/nunu.png'
import udyr from './imgs/udyr.png'
import inspiracao from './imgs/inspiracao.png'
import pulverizador from './imgs/pulverizador.png'
import perspicacia from './imgs/perspicacia.png'
import darius from './imgs/darius.png'
import gragas from './imgs/gragas.png'
import tahm from './imgs/tahm.png'
import IMPETO from './imgs/impeto.png'
const Content = () => {
  

    const heros = [
        {
            nome: 'Akali',
            tier: 'S',
            foto: AKALI,
            runaPrimaria: {
                0: CONQUEROR,
                1: PRESENCA,
                2: ESPONTANIEDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: FEITICARIA,
                1: TRANSCENDENCIA,
                2: CHAMUSCAR
            },
            counters: {
                0: {
                    nome: '',
                    imagem: LEESIN
                },
                1: {
                    nome: '',
                    imagem: KHA
                },
                2: {
                    nome: '',
                    imagem: RENEKTON
                },
            },
            good: {
                0: {
                    imagem: NOC,
                    nome: 'Zed'
                },
                1: {
                    imagem: RUMBLE,
                    nome: 'Leesin'
                },
                2: {
                    imagem: Aatrox,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            nome: 'Kha Zix',
            tier: 'S',
            foto: KHA,
            runaPrimaria: {
                0: COMETA,
                1: FAIXA,
                2: TRANSCENDENCIA,
                3: CHAMUSCAR
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: WARWICK
                },
                1: {
                    nome: '',
                    imagem: RENGAR
                },
                2: {
                    nome: '',
                    imagem: LEESIN
                },
            },
            good: {
                0: {
                    imagem: LEBLANC,
                    nome: 'Zed'
                },
                1: {
                    imagem: ZED,
                    nome: 'Leesin'
                },
                2: {
                    imagem: Kindred,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            }
        },
        {
            nome: 'Yorick',
            tier: 'S',
            foto: YORICK,
            runaPrimaria: {
                0: GRASP,
                1: DEMOLIR,
                2: INABALAVEL,
                3: VENTOS
            },
            runaSecundaria: {
                0: FEITICARIA,
                1: TRANSCENDENCIA,
                2: FAIXA
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: NOC
                },
                2: {
                    nome: '',
                    imagem: REKSAY
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Aatrox',
            tier: 'S',
            foto: Aatrox,
            runaPrimaria: {
                0: COMETA,
                1: MANTOS,
                2: TRANSCENDENCIA,
                3: CHAMUSCAR
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: NOC
                },
                1: {
                    nome: '',
                    imagem: REKSAY
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: KHA,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Trynda',
            tier: 'S',
            foto: TRYNDA,
            runaPrimaria: {
                0: RITMO,
                1: CURA,
                2: ESPONTANIEDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Renekton',
            tier: 'S',
            foto: RENEKTON,
            runaPrimaria: {
                0: CONQUEROR,
                1: CURA,
                2: ESPONTANIEDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: ' Bardo',
            tier: 'S',
            foto: BARDO,
            runaPrimaria: {
                0: RITMO,
                1: PRESENCA,
                2: ESPONTANIEDADE,
                3: GOLPE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Rengar AD',
            tier: 'S',
            foto: RENGAR,
            runaPrimaria: {
                0: AGILIDADE,
                1: CURA,
                2: LINHAGEM,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Rengar AP',
            tier: 'S',
            foto: RENGARAP,
            runaPrimaria: {
                0: ELETRO,
                1: IMPACTO,
                2: GLOBOS,
                3: cacada
            },
            runaSecundaria: {
                0: DETER,
                1: DEMOLIR,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Kindred',
            tier: 'S',
            foto: Kindred,
            runaPrimaria: {
                0: RITMO,
                1: PRESENCA,
                2: ESPONTANIEDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Evelyn',
            tier: 'S',
            foto: EVELYN,
            runaPrimaria: {
                0: CONQUEROR,
                1: PRESENCA,
                2: TENACIDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Irelia',
            tier: 'S',
            foto: IRELIA,
            runaPrimaria: {
                0: CONQUEROR,
                1: PRESENCA,
                2: ESPONTANIEDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Kled',
            tier: 'S',
            foto: KLED,
            runaPrimaria: {
                0: CONQUEROR,
                1: CURA,
                2: LINHAGEM,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Warwick',
            tier: 'S',
            foto: WARWICK,
            runaPrimaria: {
                0: RITMO,
                1: PRESENCA,
                2: ESPONTANIEDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Nocturn',
            tier: 'S',
            foto: NOC,
            runaPrimaria: {
                0: RITMO,
                1: PRESENCA,
                2: ESPONTANIEDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Rumble',
            tier: 'S',
            foto: RUMBLE,
            runaPrimaria: {
                0: COMETA,
                1: MANTOS,
                2: TRANSCENDENCIA,
                3: CHAMUSCAR
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Leblanc',
            tier: 'S',
            foto: LEBLANC,
            runaPrimaria: {
                0: COMETA,
                1: FAIXA,
                2: TRANSCENDENCIA,
                3: CHAMUSCAR
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
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
            nome: "Rek'Sai",
            tier: 'S',
            foto: REKSAY,
            runaPrimaria: {
                0: CHUVAS,
                1: IMPACTO,
                2: GLOBOS,
                3: cacada       
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
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
            nome: 'Zed',
            tier: 'S',
            foto: ZED,
            runaPrimaria: {
                0: ELETRO,
                1: IMPACTO,
                2: GLOBOS,
                3: cacada
            },
            runaSecundaria: {
                0: FEITICARIA,
                1: TRANSCENDENCIA,
                2: CHAMUSCAR
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Quinn',
            tier: 'S',
            foto: QUINN,
            runaPrimaria: {
                0: RITMO,
                1: CURA,
                2: ESPONTANIEDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: FEITICARIA,
                1: MANTOS,
                2: CELERIDADE
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Lee sin',
            tier: 'S',
            foto: LEESIN,
            runaPrimaria: {
                0: GRASP,
                1: golpeescudo,
                2: OSSO,
                3: revitalizar
            },
            runaSecundaria: {
                0: FEITICARIA,
                1: TRANSCENDENCIA,
                2: CHAMUSCAR
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Nunu',
            tier: 'S',
            foto: nunu,
            runaPrimaria: {
                0: GRASP,
                1: DEMOLIR,
                2: OSSO,
                3: revitalizar
            },
            runaSecundaria: {
                0: FEITICARIA,
                1: TRANSCENDENCIA,
                2: ORBE
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Udyr',
            tier: 'S',
            foto: udyr,
            runaPrimaria: {
                0: GRASP,
                1: DEMOLIR,
                2: OSSO,
                3: revitalizar
            },
            runaSecundaria: {
                0: inspiracao,
                1: pulverizador,
                2: perspicacia
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Darius',
            tier: 'S',
            foto: darius,
            runaPrimaria: {
                0: RITMO,
                1: PRESENCA,
                2: ESPONTANIEDADE,
                3: MORTE
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Gragas',
            tier: 'S',
            foto: gragas,
            runaPrimaria: {
                0: COMETA,
                1: FAIXA,
                2: TRANSCENDENCIA,
                3: CHAMUSCAR
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
        {
            nome: 'Tahm Kentch',
            tier: 'S',
            foto: tahm,
            runaPrimaria: {
                0: IMPETO,
                1: MANTOS,
                2: CELERIDADE,
                3: CHAMUSCAR
            },
            runaSecundaria: {
                0: DETER,
                1: OSSO,
                2: revitalizar
            },
            counters: {
                0: {
                    nome: '',
                    imagem: ZED
                },
                1: {
                    nome: '',
                    imagem: ZED
                },
                2: {
                    nome: '',
                    imagem: ZED
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KLED,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: EXAUST
            },   
        },
    ]



    console.log(heros)
    return (
        <div className='imageBc' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='position' style = {{paddingBottom:'100px'}}>

                {heros.map(({ foto, counters, good, spell, runaPrimaria, runaSecundaria, tier, nome }) => {

                    return (
                        <Cards
                            key = {nome}
                            foto={foto}
                            counters={counters}
                            good={good}
                            spell={spell}
                            runaPrimaria={runaPrimaria}
                            runaSecundaria={runaSecundaria}
                            tier={tier}
                            nome={nome} />
                    )
                })}

            </div>
        </div>
    )
}

export default Content