module.exports = {
    pathPrefix: `/proof-reading`,
    siteMetadata: {
        title: 'Wordpress Gatsby',
        subtitle: `Fetch Data From Local WP Install`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "proofreadingblog.thethasolutions.com",
                protocol: "http",
                hostingWPCOM: false,
                useACF: true,
                verboseOutput: true
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'
    ],
};
