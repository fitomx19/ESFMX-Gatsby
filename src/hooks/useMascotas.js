import {graphql, useStaticQuery} from 'gatsby';

const useMascotas = () => {
    const data = useStaticQuery(
        graphql `query{
               allDatoCmsPet{
    nodes{	
    titulo
    info
    id
    slug
    contenido
    imagen{
    fluid(maxWidth:1200){
        ...GatsbyDatoCmsFluid
                     }
                }
            }
	    }
            }`
    )
    return data.allDatoCmsPet.nodes.map(e =>({
        titulo: e.titulo,
        id: e.titulo,
        contenido: e.contenido,
        info: e.info,
        imagen: e.imagen,
        slug: e.slug

    }))
}

export default useMascotas;