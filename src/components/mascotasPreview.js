import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #9E8EE8;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;
    font-size:1.5rem;
    font-family: 'Atkinson Hyperlegible', sans-serif;
`;

const TextCard = styled.div`
    font-family: 'Atkinson Hyperlegible', sans-serif;
    text-align:center;
    height: 6rem;
`;

const Card = styled.div`
    box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.62);
    -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.62);
    -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.62);
    margin-bottom: 2rem;

`;
const MascotasPreview = ({mascotas}) => {
    const { titulo,info,id,contenido,imagen,slug} = mascotas;
    return (  

       <Card>
            <Image css={css`width:100%; height: 400px;`} fluid={imagen.fluid} />
            <TextCard css={css`font-size: 3rem;`}>{titulo}</TextCard>
            <TextCard css={css`font-size: 2rem;`}>{info}</TextCard>
           
            <Boton to={slug}>Ver Mascota</Boton>
       </Card>
    );
}
 
export default MascotasPreview;