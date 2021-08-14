import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header'
const Layout = (props) =>{
    return(
        <>
        <Helmet>
            <title>Veterinaria Gatsby</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap" rel="stylesheet"/>
        </Helmet>
        <Header/>
        {props.children}
        </>
    )
}

export default Layout