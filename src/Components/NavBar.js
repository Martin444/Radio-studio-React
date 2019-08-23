import React from 'react'
import styled from 'styled-components'
import NavButtons from './NavButtons';

export default function NavBar() {
    return (
        <HeadNav>
            <Container>
                <Content>
                    <DivLogo>
                        <h1>LOGO</h1>
                    </DivLogo>
                    <div className="Nav">
                        <ul>
                            <li>Noticias</li>
                            <li>Eventos</li>
                            <li>Concursos</li>
                            <li>Programación</li>
                            <li>TV</li>
                        </ul>
                    {/* <div className="btn-container"> */}
                        <NavButtons/>
                    {/* </div> */}
                    </div>
                </Content>
            </Container>
        </HeadNav>
    )
}

const HeadNav = styled.div`
width:100%;
  padding: 0;
  padding-top: 20px;
  margin: 0;
  justify-content: center;
  height: 60px;
  position: fixed;
  z-index: 1;
  && h1{
      color: #fff;
      font-size: 36px;
      font-weight: 400;
  }
  && ul{
    margin: auto;
    padding: 0;
    color: #fff;
    border-right: solid 1px #fff;
  }
  && li {
    display: inline;
    margin-right: 5px;
    margin: 0 25px 0 0;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
  }

`

const Container = styled.div`
    grid-template-columns: minmax(auto, 1024px);
  display: grid;
  margin: 0;
  padding:0;
  align-content:center;
  align-items:center;
  align-self: center;
  justify-content: center;
`

const Content = styled.div`
    display: inline-flex;
  justify-content: space-between;
  align-items: center;

  && .Nav{
      margin: auto;
      margin-left: 230px;
      display: inline-flex;
      padding: 0;
      float:right;
      justify-content: right;
      align-self: right;
      align-content: right;
      align-items: right;
      
  }
`

const DivLogo = styled.div`
margin:auto;
    display: flex;
  justify-content: space-between;
  align-items: center;
`