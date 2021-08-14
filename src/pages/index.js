import * as React from "react"
import Layout from "../components/layout";
import styled from "@emotion/styled";
import ContenidoInicio from '../components/contenidoInicio';
import useMascotas from '../hooks/useMascotas'
import MascotasPreview from '../components/mascotasPreview';
import {Link} from 'gatsby';
import {css} from '@emotion/react';


const Titulo = styled.div`
  font-size: 1.5rem;
  fontFamily: "PT SANS, sans-serif"
`
const ListadoMascotas = styled.ul`
    max-width:1200px;
    width: 95%;
    margin: 4rem auto 0 auto;
    @media (min-width: 768px){
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3rem;
    }
`;

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #9E8EE8;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;

`;



const BotonNotificaciones = styled.button`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #9E8EE8;
    color: #FFF;
    font-size: 1.5rem;
    fontFamily: "PT SANS, sans-serif"
    display: block;
    text-decoration: none;
    text-align: center;

`;
const Container = styled.div`
    padding-top: 2rem;
    padding-bottom: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
 
`;


// Conseguir propia key de DATOCMS 
// https://www.datocms.com/


const IndexPage = () => {
  const EnableNotifications = async () =>{
    let sw = await navigator.serviceWorker.ready;
    let result = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      //añadir tu propia key de server
      //¿como generar tu propia key?
      //npx web-push generate-vapid-keys
      applicationServerKey: 'AQUI_VA_SU_KEY'
    })
    console.log(result)
  }
  const mascotas = useMascotas();
  console.log(mascotas);
  return (
    <Layout>
        <ContenidoInicio/>
      
        <Container>
          <BotonNotificaciones onClick={EnableNotifications}>
              Activar Notificaciones
          </BotonNotificaciones>
        </Container>
        <ListadoMascotas>
          {mascotas.map(mascotas => (
           <MascotasPreview key={mascotas.id} mascotas={mascotas}/>
          ))}
        </ListadoMascotas>
        
    </Layout>
    
    
  )
}

export default IndexPage
