import React from 'react'
import styled from 'styled-components'
import Play from '../Footer/Play';

export default function Footer() {
    return (
        <PlayFooter>
            <Play/>
        </PlayFooter>
    )
}

const PlayFooter = styled.footer`
    margin: 0;
    padding:0;
    width: 100%;
    height: 100px;
    background: #343a40;
    border-top: 1px solid #3cd458;
    position: fixed;
    bottom: 0%;
    color: #fff;
    z-index:20000;
`