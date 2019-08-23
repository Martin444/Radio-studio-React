import React from 'react'
import styled from 'styled-components'
import PlayLive from './PlayLive';

export default function DescriptionLive() {
    return (
        <Description>
            <div className="container">
                <div className="description-header">
                    <h1>Nombre de la tansmisión</h1>
                    <h5>Descripcion del programa que explica de que se puede tratar</h5>
                </div>

                <div className="btns">
                    <div className="follow-btns">
                        <button className="btn-primary">Seguir</button>
                        <button className="btn-secundary">Compartir</button>
                    </div>
                    <div className="share-btn">
                            <span>2M</span>
                            <span>23M</span>
                    </div>
                </div>
                <div>
                    <PlayLive/>
                </div>
            </div>
        </Description>
    )
}

const Description = styled.div`
    width: 100%;
    display: grid;
    top: 400%;
    margin:auto;
    padding:auto;
    /* padding-left:40px; */
    padding-bottom:100px;

    .container{
        margin:0;
        padding:auto;
    }

    && .btns{
        margin: auto;
        padding:auto;
        display: grid;
        margin-top: 10px;
    }

    && .follow-btns && .share-btn{
        margin: auto;
    }

    && .btn-primary{
        width: 87px;
        height: 36px;
        margin-right: 20px;
        border-radius: 40px;
        border: none;
        background-color: #3cd458;
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.4;
        letter-spacing: 0.14px;
        color: #ffffff;
        cursor:pointer;
    }

    && .btn-secundary{
        width: 134px;
        height: 36px;
        border-radius: 40px;
        border: solid 1px #ffffff;
        background:none;
        font-family: Poppins;
        font-size: 14px;
        font-weight: bold;
        line-height: 1.4;
        letter-spacing: 0.14px;
        color: #ffffff;
        cursor:pointer;
    }


    && h5{
        color:#fff;
        font-size: 16px;
        font-weight: normal;
        margin-top:6px;
    }

    && span{
        color: #fff;
        padding: 0 0 0 100px;
        right: 23%;
        margin: auto;
        position: relative;
    }
`