module.exports = {
  siteMetadata: {
    title: "Veterinaria Gatsby ",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "0da1e98c6d5b60e5c1d694b1befbeb",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    `gatsby-plugin-react-helmet`,{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
        }
    },
    {
      resolve:"gatsby-plugin-offline",
      options: {
        appendScript: require.resolve('./src/push-notification.js'),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Veterinaria-Gatsby',
        short_name: 'Veterinaria',
        start_url: '/',
        background_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-firebase-messaging`,
      options: {
        //required unless removeFirebaseServiceWorker == true
        config: { 
          apiKey: 'AIzaSyBmj_POBbsOadAulImwZgaNBsDxFOeJRUA',
          appId: '1:960500878700:web:6742321412cd4fee6cf749',
          messagingSenderId: '960500878700',
          projectId: 'veterinaria-d8d23',
        },
      },
    },
    
  ],
};
