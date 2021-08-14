import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import Layout from '../components/layout';

import { graphql } from 'gatsby';

export const query = graphql`

    query($slug: String!){
        allDatoCmsPet(filter: {slug: {eq:$slug}}){
    nodes{	
    titulo
    info
    id
    contenido
    imagen{
    fluid(maxWidth:1200){
        ...GatsbyDatoCmsFluid
                     }
                }
            }
	    }
    }
`;
const Title = styled.div`
    font-family: 'Atkinson Hyperlegible', sans-serif;
    text-align:center;
    font-size: 5rem;
    padding-bottom: 2rem;
`;
const Contenido = styled.div`
    font-family: 'Atkinson Hyperlegible', sans-serif;
    text-align:center;
    font-size: 1.5rem;
`;

const Descripcion = styled.div`
    font-family: 'Atkinson Hyperlegible', sans-serif;
    text-align:center;
    font-size: 2rem;
`;

const Container = styled.div`
    padding-top: 2rem;
    padding-bottom: 8rem;
`;

const Macotas = ({data: {allDatoCmsPet: {nodes}}}) => {
    const {titulo,info,id,contenido,imagen} = nodes [0];
    return ( 
        <Layout>
            <Container css={css`justify-content:center`}>
                <Title css={css`text-align:center;`}>{titulo}</Title>
                <Descripcion><b>{info}</b></Descripcion>
                <Contenido css={css`padding-bottom: 2rem;`}>{contenido}</Contenido>
                <Image css={css`display: block;

                                margin-left: auto;
                                margin-right: auto;  
                                width: 50%;`} fluid={imagen.fluid} />
            </Container>
        </Layout>
     );
}
 
export default Macotas;
