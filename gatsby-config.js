module.exports = {
  siteMetadata: {
    siteUrl: "https://dcaris.github.io",
    title: "Daniel Caris Portfolio",
    titleTemplate: "%s - The OG Daniel Caris",
    description: "Daniel Caris is a Software Engineer based in Brisbane, QLD, Australia specializing in building systems in .NET.",
    url: "https://dcaris.github.io",
    image: "/og.png",
    twitterUsername: "@dcaris"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-pnpm",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
