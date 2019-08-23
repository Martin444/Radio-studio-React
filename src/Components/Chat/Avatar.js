import React from 'react'
import styled from 'styled-components'
import Perfil from '../../Images/perf.jpg'

export default function Avatar() {
    return (
        <Container>
                <img src={Perfil} alt="Foto de perfil del usuario"/>
                <p className="badge">
                    4
                </p>
            
        </Container>
    )
}

const Container = styled.div`
    margin:0;
    padding:0;
    display: inline-flex;
    img{
        width: 36px;
        height: 36px;
        border-radius:50px;
    }

    .badge{
        width: 10px;
        height: 10px;
        border-radius: 50px;
        background: #3cd458;
        position:relative;
        top:29px;
        right: 9px;
    }

    p{
        width: 10px;
        height: 6px;
        opacity: 2;
    }
`