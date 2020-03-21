export default {
  mode: 'spa',
  head: {
    title: 'DakoCoin',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'author',
        content: 'Dominik Wilusz'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/logo.jpg'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/rwj2nux.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
      }
    ]
  },
  loading: {
    color: '#fff'
  },
  css: [
    'normalize.css/normalize.css',
    '@/assets/main.css',
    '@/assets/sass/main.scss'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ]
};
