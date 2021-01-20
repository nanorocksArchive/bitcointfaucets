module.exports = {
  siteMetadata: {
    siteUrl: "https://www.bitcointfaucets.ml",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-cname",

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-T1K9R10SC6",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
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
