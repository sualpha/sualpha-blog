// index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import './custom.css'

export default {
    extends: DefaultTheme,
    Layout: Layout,
    enhanceApp({ app }) {
        app.provide('DEV', process.env.NODE_ENV === 'development')
      }
}