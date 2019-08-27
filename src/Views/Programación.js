import React from 'react'
import styled from 'styled-components'
import Ads from '../Components/Ads'
import Carusel from '../Programing/carusel';

export default function Programación() {
    return (
        <DivPrograming>
            <div className="ads">
                <Ads/>
            </div>
        
            <div className="programing">
                <h4>Programación</h4>
                <h5>La mejór programacion la encontrás aquí</h5>
            </div>
            <Carusel/>
        </DivPrograming>
    )
}

const DivPrograming = styled.div`
    margin:auto;
    padding:0;
    width:100%;
    height: 1424px;
    background: #343a40;

    .ads{
        padding-top: 30px;
    }

    .programing{
        width: 1024px;
        padding-top: 50px;
        display: inline-flex;
        text-align: left;
        color: #fff;
    }

    h5{
        padding-top: 30px;
        position:absolute;
        font-family: Poppins;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.18px;
        color: #757575;
    }
`