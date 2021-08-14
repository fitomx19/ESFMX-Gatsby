import * as React from "react"
import Layout from "../components/layout";
import styled from "@emotion/styled";
import ContenidoInicio from '../components/contenidoInicio';
import {css} from '@emotion/react';








const Container = styled.div`
    padding-top: 2rem;
    padding-bottom: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
 
`;




const NosotrosPage = () => {
 
  return (
    <Layout>
       
      
        <Container>
        <h2 css={css`
            text-align:center;
            font-size:4rem;
            font-family: PT Sans, serif;
            margin-top:4rem;
        `} >Nosotros</h2>
        
        </Container>
        
        
    </Layout>
    
    
  )
}

export default NosotrosPage
