module.exports = {
  siteMetadata: {
    siteUrl: "https://www.bitcointfaucets.ml",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-cname",
    {
      resolve: "gatsby-plugin-seo",
      options: {
        siteName: "Bitcoint faucets for everyone",
        defaultSiteImage: "/img/logo.png",
        siteUrl: "https://www.bitcointfaucets.ml",
        globalSchema: `{
            "@type": "WebSite for Bitcoint Faucets",
            "@id": "https://www.bitcointfaucets.ml/#website",
            "url": "https://www.bitcointfaucets.ml",
            "name": "Bitcoint faucets for everyone",
            "publisher": {
              "@id": "nanorocks.github.io"
            }
          }`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "nanorocks.github.io",
      },
    },
  ],
};
