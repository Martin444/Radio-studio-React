import React from 'react'
import styled from 'styled-components'

export default function Input() {
    return (
        <Container>
            <input type="text" />
            <div className="btns">
                <button className="donate"><i class="fas fa-dollar-sign"></i></button>
                <button className="send"><i class="fas fa-paper-plane"></i></button>
            </div>
            
        </Container>
    )
}

const Container = styled.div`
    margin:0;
    padding: 0;
    display:flex;
    input{
        margin:0;
        padding-left:6px;
        width: 270px;
        height: 36px;
        border-radius: 50px;
        background-color: #ffffff;
        text-align:left;
    }

    .btns{
        display:flex;
        color:#ffffff;
        right:39px;
        position:relative;
    }

    .donate{
        border: none;
        background: none;
        color: #757575;
        font-size: 14px;
    }

    .send{
        width: 36px;
        height: 36px;
        background-color: #3cd458;
        border: none;
        border-radius:  50px;
        color: #ffffff;

    }
`