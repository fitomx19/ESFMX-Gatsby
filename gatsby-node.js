exports.createPages = async({actions,graphql,reporter}) => {
    const resultado = await graphql(`
        query{
            allDatoCmsPet{
                nodes{
                    slug
                }
            }
        }
    `);

    if(resultado.errors){
        reporter.panic('No hubo resultados', resultado.errors);
    }

    const mascotas = resultado.data.allDatoCmsPet.nodes;

    mascotas.forEach(mascotas => {
        actions.createPage({
            path: mascotas.slug,
            component: require.resolve('./src/components/mascotas.js'),
            context: {
                slug: mascotas.slug
            }
        })
        
    });
}