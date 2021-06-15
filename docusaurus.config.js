
const sideConfigOptions = require('./siteConfig.options.json');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: sideConfigOptions.title,
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: sideConfigOptions.baseUrl,
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  scripts: [
    sideConfigOptions.baseUrl + 'js/mermaid.min.js',
    sideConfigOptions.baseUrl + 'js/init-mermaid.js',
    sideConfigOptions.baseUrl + 'js/doc-search-indices.js',
  ].map(scriptUrl => ({
    src: scriptUrl,
    defer: true,
  })),
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: sideConfigOptions.title,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      // items: [
      //   {
      //     type: 'doc',
      //     docId: 'intro',
      //     position: 'left',
      //     label: 'Tutorial',
      //   },
      //   {to: '/blog', label: 'Blog', position: 'left'},
      //   {
      //     href: 'https://github.com/facebook/docusaurus',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      // ],
      items: sideConfigOptions.headerLinks,
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          numberPrefixParser: false,
          // Please change this to your repo.
          editUrl: () => '',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: () => '',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
