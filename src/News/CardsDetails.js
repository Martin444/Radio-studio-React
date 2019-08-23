import React from 'react'
import styled from 'styled-components'
import Nov from '../Images/nov.jpg'

export default function CardsDetails() {
    return (
        <DivDetails>
            <img src={Nov} alt="Imagen de la noticia"/>
            <h3>Titulo o información relevante de la noticia</h3>
        </DivDetails>
    )
}

const DivDetails = styled.div`
    width: 290px;
    height: 190px;
    display: block;
    text-align:left;
    margin-right: 20px;
    cursor:pointer;

    img{
        margin-right: 20px;
        width: 290px;
        height: 190px;
        border-radius: 10px;
    }

    h3{
        padding-top: 10px;
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.2px;
        color: #ffffff;
        text-align: left;
    }
`