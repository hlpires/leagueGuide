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
import barreira from './imgs/barreira.png'
import bolinha from './imgs/bolinha.png'
import orbeguard from './imgs/orbeguard.png'
import martelo from './imgs/martelo.png'
import lamina from './imgs/lamina.png'
import perola from './imgs/perola.png'
import ghost from './imgs/ghost.png'
import berrante from './imgs/berrante.png'
import gota from './imgs/lagrima.png'
import espada from './imgs/espada.png'
import bota from './imgs/bota.png'
import interrogas from './imgs/interrogas.png'

const Content = () => {
  

    const heros = [
        {
            nome: 'Rumble',
            tier: 'S+',
            itens:{
                0:orbeguard,
                1:perola
            },
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
                    imagem: darius
                },
                1: {
                    nome: '',
                    imagem: Aatrox
                },
                2: {
                    nome: '',
                    imagem: RENGAR
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEBLANC,
                    nome: 'Leesin'
                },
                2: {
                    imagem: QUINN,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            },   
        },
        {
            nome: 'Akali',
            tier: 'S+',
            foto: AKALI,
            itens:{
                0:orbeguard,
                1:perola
            },
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
                1: barreira
            }
        },
        {
            nome: 'Bardo',
            tier: 'S+',
            itens:{
                0:berrante,
                1:bota
            },
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
                    imagem: YORICK
                },
                1: {
                    nome: '',
                    imagem: RUMBLE
                },
                2: {
                    nome: '',
                    imagem: EVELYN
                },
            },
            good: {
                0: {
                    imagem: RENEKTON,
                    nome: 'Zed'
                },
                1: {
                    imagem: QUINN,
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
            },   
        },
        {
            nome: 'Trynda',
            tier: 'S+',
            itens:{
                0:martelo,
                1:espada
            },
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
                    imagem: interrogas
                },
                1: {
                    nome: '',
                    imagem: interrogas
                },
                2: {
                    nome: '',
                    imagem: interrogas
                },
            },
            good: {
                0: {
                    imagem: darius,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: BARDO,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: ghost
            },   
        },
        {
            nome: 'Evelyn',
            tier: 'S+',
            itens:{
                0:orbeguard,
                1:perola
            },
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
                    imagem: RENGAR
                },
                1: {
                    nome: '',
                    imagem: LEBLANC
                },
                2: {
                    nome: '',
                    imagem: REKSAY
                },
            },
            good: {
                0: {
                    imagem: NOC,
                    nome: 'Zed'
                },
                1: {
                    imagem: BARDO,
                    nome: 'Leesin'
                },
                2: {
                    imagem: Aatrox,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            },   
        },
        {
            nome: "Rek'Sai",
            tier: 'S+',
            itens:{
                0:lamina,
                1:espada
            },
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
                    imagem: NOC
                },
                1: {
                    nome: '',
                    imagem: darius
                },
                2: {
                    nome: '',
                    imagem: KLED
                },
            },
            good: {
                0: {
                    imagem: Aatrox,
                    nome: 'Zed'
                },
                1: {
                    imagem: AKALI,
                    nome: 'Leesin'
                },
                2: {
                    imagem: RENGAR,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: bolinha
            }
        },
        {
            nome: 'Leblanc',
            tier: 'S',
            itens:{
                0:orbeguard,
                1:perola
            },
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
                    imagem: RUMBLE
                },
                1: {
                    nome: '',
                    imagem: REKSAY
                },
                2: {
                    nome: '',
                    imagem: RENGARAP
                },
            },
            good: {
                0: {
                    imagem: RENEKTON,
                    nome: 'Zed'
                },
                1: {
                    imagem: NOC,
                    nome: 'Leesin'
                },
                2: {
                    imagem: WARWICK,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            }
        },
        {
            nome: 'Zed',
            tier: 'S',
            foto: ZED,
            itens:{
                0:lamina,
                1:espada
            },
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
                    imagem: LEESIN
                },
                1: {
                    nome: '',
                    imagem: RENGAR
                },
                2: {
                    nome: '',
                    imagem: REKSAY
                },
            },
            good: {
                0: {
                    imagem: Aatrox,
                    nome: 'Zed'
                },
                1: {
                    imagem: darius,
                    nome: 'Leesin'
                },
                2: {
                    imagem: QUINN,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            },   
        },
        {
            nome: 'Nocturne',
            tier: 'S',
            foto: NOC,
            itens:{
                0:martelo,
                1:gota
            },
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
                    imagem: AKALI
                },
                1: {
                    nome: '',
                    imagem: WARWICK
                },
                2: {
                    nome: '',
                    imagem: LEBLANC
                },
            },
            good: {
                0: {
                    imagem: REKSAY,
                    nome: 'Zed'
                },
                1: {
                    imagem: Aatrox,
                    nome: 'Leesin'
                },
                2: {
                    imagem: LEESIN,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: bolinha
            },   
        },
        {
            nome: 'Rengar AD',
            tier: 'S',
            itens:{
                0:lamina,
                1:espada
            },
            foto: RENGAR,
            runaPrimaria: {
                0: RITMO,
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
                    imagem: darius
                },
                1: {
                    nome: '',
                    imagem: Aatrox
                },
                2: {
                    nome: '',
                    imagem: KHA
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: EVELYN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KHA,
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
            itens:{
                0:orbeguard,
                1:espada
            },
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
                    imagem: darius 
                },
                1: {
                    nome: '',
                    imagem: IRELIA
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
                    imagem: LEBLANC,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KHA,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            },   
        },
        {
            nome: 'Lee sin',
            tier: 'S',
            itens:{
                0:berrante,
                1:espada
            },
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
                    imagem: darius
                },
                1: {
                    nome: '',
                    imagem: Aatrox
                },
                2: {
                    nome: '',
                    imagem: NOC
                },
            },
            good: {
                0: {
                    imagem: ZED,
                    nome: 'Zed'
                },
                1: {
                    imagem: AKALI,
                    nome: 'Leesin'
                },
                2: {
                    imagem: KHA,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            },   
        },
        {
            nome: 'Aatrox',
            tier: 'S',
            itens:{
                0:berrante,
                1:espada
            },
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
                    imagem: darius  ,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            },   
        },
        {
            nome: 'Kha Zix',
            tier: 'S',
            foto: KHA,
            itens:{
                0:lamina,
                1:gota
            },
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
                1: barreira
            }
        },       
        {
            nome: 'Yorick',
            tier: 'A',
            itens:{
                0:berrante,
                1:gota
            },
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
                    imagem: IRELIA
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
                    imagem: BARDO,
                    nome: 'Zed'
                },
                1: {
                    imagem: interrogas,
                    nome: 'Leesin'
                },
                2: {
                    imagem: interrogas,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            },   
        }, 
        {
            nome: 'Kindred',
            tier: 'A',
            itens:{
                0:martelo,
                1:bota
            },
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
                    imagem: REKSAY
                },
                1: {
                    nome: '',
                    imagem: AKALI
                },
                2: {
                    nome: '',
                    imagem: LEBLANC
                },
            },
            good: {
                0: {
                    imagem: RENEKTON,
                    nome: 'Zed'
                },
                1: {
                    imagem: WARWICK,
                    nome: 'Leesin'
                },
                2: {
                    imagem: darius,
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
            tier: 'A',
            itens:{
                0:martelo,
                1:espada
            },
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
                    imagem: AKALI
                },
                1: {
                    nome: '',
                    imagem: NOC
                },
                2: {
                    nome: '',
                    imagem: RENEKTON
                },
            },
            good: {
                0: {
                    imagem: Aatrox,
                    nome: 'Zed'
                },
                1: {
                    imagem: QUINN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: YORICK,
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
            tier: 'A',
            itens:{
                0:lamina,
                1:espada
            },
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
                    imagem: TRYNDA
                },
                1: {
                    nome: '',
                    imagem: LEBLANC
                },
                2: {
                    nome: '',
                    imagem: RUMBLE
                },
            },
            good: {
                0: {
                    imagem: REKSAY,
                    nome: 'Zed'
                },
                1: {
                    imagem: darius,
                    nome: 'Leesin'
                },
                2: {
                    imagem: Aatrox,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            },   
        },
        {
            nome: 'Warwick',
            tier: 'A',
            itens:{
                0:martelo,
                1:gota
            },
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
                    imagem: Kindred
                },
                1: {
                    nome: '',
                    imagem: Aatrox
                },
                2: {
                    nome: '',
                    imagem: AKALI
                },
            },
            good: {
                0: {
                    imagem: KHA,
                    nome: 'Zed'
                },
                1: {
                    imagem: NOC,
                    nome: 'Leesin'
                },
                2: {
                    imagem: IRELIA,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: barreira
            },   
        },      
        {
            nome: 'Renekton',
            tier: 'A',
            itens:{
                0:berrante,
                1:espada
            },
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
                    imagem: Aatrox
                },
                1: {
                    nome: '',
                    imagem: Kindred
                },
                2: {
                    nome: '',
                    imagem: LEBLANC
                },
            },
            good: {
                0: {
                    imagem: IRELIA,
                    nome: 'Zed'
                },
                1: {
                    imagem: AKALI,
                    nome: 'Leesin'
                },
                2: {
                    imagem: LEESIN,
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
            tier: 'A',
            itens:{
                0:martelo,
                1:bota
            },
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
                    imagem: REKSAY
                },
                1: {
                    nome: '',
                    imagem: LEBLANC
                },
                2: {
                    nome: '',
                    imagem: IRELIA
                },
            },
            good: {
                0: {
                    imagem: darius,
                    nome: 'Zed'
                },
                1: {
                    imagem: YORICK,
                    nome: 'Leesin'
                },
                2: {
                    imagem: RENEKTON,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: ghost
            },   
        },
        {
            nome: 'Nunu',
            tier: 'A',
            itens:{
                0:berrante,
                1:gota
            },
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
                    imagem: darius
                },
                1: {
                    nome: '',
                    imagem: Aatrox
                },
                2: {
                    nome: '',
                    imagem: EVELYN
                },
            },
            good: {
                0: {
                    imagem: LEBLANC,
                    nome: 'Zed'
                },
                1: {
                    imagem: RENEKTON,
                    nome: 'Leesin'
                },
                2: {
                    imagem: ZED,
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
            itens:{
                0:berrante,
                1:bota
            },
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
                    imagem: AKALI
                },
                1: {
                    nome: '',
                    imagem: Aatrox
                },
                2: {
                    nome: '',
                    imagem: LEBLANC
                },
            },
            good: {
                0: {
                    imagem: BARDO,
                    nome: 'Zed'
                },
                1: {
                    imagem: REKSAY,
                    nome: 'Leesin'
                },
                2: {
                    imagem: LEESIN,
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
            tier: 'A',
            itens:{
                0:orbeguard,
                1:gota
            },
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
                    imagem: KHA
                },
                1: {
                    nome: '',
                    imagem: Aatrox
                },
                2: {
                    nome: '',
                    imagem: AKALI
                },
            },
            good: {
                0: {
                    imagem: NOC,
                    nome: 'Zed'
                },
                1: {
                    imagem: RENEKTON,
                    nome: 'Leesin'
                },
                2: {
                    imagem: ZED,
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
            tier: 'A',
            itens:{
                0:berrante,
                1:perola
            },
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
                    imagem: darius
                },
                1: {
                    nome: '',
                    imagem: Aatrox
                },
                2: {
                    nome: '',
                    imagem: RENGAR
                },
            },
            good: {
                0: {
                    imagem: RUMBLE,
                    nome: 'Zed'
                },
                1: {
                    imagem: LEESIN,
                    nome: 'Leesin'
                },
                2: {
                    imagem: interrogas,
                    nome: 'Kled'
                },
            },
            spell: {
                0: IGNITE,
                1: ghost
            },   
        },
        {
            nome: 'Udyr',
            tier: 'B',
            itens:{
                0:berrante,
                1:gota
            },
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
                    imagem: darius
                },
                1: {
                    nome: '',
                    imagem: Aatrox
                },
                2: {
                    nome: '',
                    imagem: Kindred
                },
            },
            good: {
                0: {
                    imagem: KHA,
                    nome: 'Zed'
                },
                1: {
                    imagem: AKALI,
                    nome: 'Leesin'
                },
                2: {
                    imagem: interrogas,
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

                {heros.map(({ foto, counters, good, spell, runaPrimaria, runaSecundaria, tier, nome,itens}) => {

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
                            itens = {itens}
                            nome={nome} />
                    )
                })}

            </div>
        </div>
    )
}

export default Content