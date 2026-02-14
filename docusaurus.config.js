// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from 'prism-react-renderer'

const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Компактные компьютеры на Linux и Embedded устройства',
  tagline: 'Comintech',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://napiworld.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Comintech', // Usually your GitHub org/user name.
  projectName: 'NapiWorld', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
        calendar: 'gregory',
        path: 'ru',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/lab240/napi-www/blob/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/lab240/napi-www/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        language: ["en", "ru"],
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 480, // min resized image's size. if original is lower, use that size.
        steps: 4, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'software',
        path: 'software',
        routeBasePath: 'software',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'recipes',
        path: 'techblog',
        routeBasePath: 'recipes',
        blogTitle: 'Рецепты и техзаметки',
        blogDescription: 'Технические заметки, решения проблем и полезные рецепты',
        postsPerPage: 10,
        blogSidebarTitle: 'Все заметки',
        blogSidebarCount: 'ALL',
      },
    ],
    ['docusaurus-plugin-yandex-metrica', {
      counterID: '95068299',
      enableInProdOnly: true,
      webvisor: true,
    }]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Image zoom config
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      // Theme dark/light mode config
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },

      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'NapiLinux',
        logo: {
          alt: 'Napi Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.png',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Каталог',
          },
          {
            to: '/software',
            label: 'База знаний'
          },
          /*{ to: "blog-archive", label: "Blog Archive", position: "left" },*/
          {to: '/blog', label: 'Новости NAPI', position: 'left',
            items: [
            {
              label: 'Лента новостей',
              to: 'blog'
            },
            {
              label: 'Все новости',
              to: 'blog/archive'
            },

            {
              label: 'Новости по тегам',
              to: 'blog/tags'
            },
          ],

          },
          {to: '/recipes', label: 'Техблог', position: 'left',
            items: [
            {
              label: 'Техзаметки',
              to: 'recipes'
            },
            {
              label: 'Все заметки',
              to: 'recipes/archive'
            },
            {
              label: 'Заметки по тегам',
              to: 'recipes/tags'
            },
          ],
          },
          {
            to: '/downloads',
            label: 'Скачать',
            position: 'left',
          },
          {
            to: '/contacts',
            label: 'Контакты',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/lab240',
          //   position: 'right',
          //   className: "header-github-link",
          //   "aria-label": "GitHub repository",
          // },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
