const path = require('path');


export default {
  head: {
    title: 'Kévin Poulet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/leaf.svg' }]
  },

  modules: [
    'nuxt-purgecss',
    'nuxt-webfontloader',
  ],

  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },

  webfontloader: {
    google: {
      families: ['Quicksand:300,400,500,600,700']
    }
  },

  css: [
      '~assets/styles/tailwind.css', 
  ],

  build: {
      postcss: {
        plugins: {
          'postcss-import': {},
          tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
          'postcss-nested': {}
        }
      },
      preset: {
        stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
      }
  }

}