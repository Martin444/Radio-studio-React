import React from 'react'
import Like from '../../Images/reacciones/me_gusta.png'
import MD from '../../Images/reacciones/me_divierte.png'
import ME from '../../Images/reacciones/me_encanta.png'
import MU from '../../Images/reacciones/me_enoja.png'
import MS from '../../Images/reacciones/me_entristece.png'
import MA from '../../Images/reacciones/me_asombra.png'
import MB from '../../Images/reacciones/me_aburre.png'

import styled from 'styled-components'



export default function Reacts() {
    return (
        <Container>
            <img src={Like} alt="Reaciones"/>
            <img src={ME} alt="Reaciones"/>
            <img src={MD} alt="Reaciones"/>
            <img src={MB} alt="Reaciones"/>
            <img src={MA} alt="Reaciones"/>
            <img src={MU} alt="Reaciones"/>
            <img src={MS} alt="Reaciones"/>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height: 35px;
 margin:0;
 padding:0;
 /* position:absolute; */

    img{
        width: 32px;
        height: 32px;
        margin-right:5px;
        margin-bottom: 8px;
        cursor:pointer;
        :hover{
            width: 42px;
            height: 42px;
            box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
        }
    }
`