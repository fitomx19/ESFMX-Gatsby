import React from 'react'; 
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap:2rem;
    }
    p{
        line-height: 2rem;
    }
`

const ContenidoInicio = () => {
    
        const Informacion = useStaticQuery(graphql `
            {
  allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
    nodes {
      id
      slug
      titulo
      contenido
      portada {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
}
`)
//console.log(Informacion.allDatoCmsPagina.nodes[0]);
const { titulo, contenido, portada} = Informacion.allDatoCmsPagina.nodes[0]
    return (<>
    
        <h2 css={css`
            text-align:center;
            font-size:4rem;
            font-family: PT Sans, serif;
            margin-top:4rem;
        `} >{titulo}</h2>
        <div >
            <TextoInicio>
                <p css={css`
            text-align:center;
            font-size:2rem;
            font-family: PT Sans, serif;
           
        `}>{contenido}</p>
                <Image css={css`border-radius: 20%;`} fluid={portada.fluid} />
            </TextoInicio>
            <br></br>
        </div>
    
    </>  );
}
 
export default ContenidoInicio;