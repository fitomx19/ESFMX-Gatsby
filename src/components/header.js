import React from 'react';
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {Link} from 'gatsby';
import Navegacion from '../components/nav';

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align:center;
    text-decoration: none;
`

const Header = () => {
    return ( 
        <header  css={css`
            background-color: #9E8EE8;
            padding: 1rem;
        `} >
            <div css={css`
                     max-width: 1200px;
                     margin: 0 auto;
                     @media (min-width: 768px) {
                       display: flex;
                       align-items: center;
                       justify-content: space-between;
                     }
            `}>
                <EnlaceHome>
                    <h1 css={css`font-family: PT Sans , serif`}>¡Veterinaria Gatsby!</h1>
                </EnlaceHome>
                <Navegacion/>
            </div>
           
        </header>

     );
}
 
export default Header;