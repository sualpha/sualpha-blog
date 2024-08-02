// index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import { injectSpeedInsights } from '@vercel/speed-insights';
import './custom.css'

export default {
    extends: DefaultTheme,
    Layout: Layout,
    enhanceApp({ app }) {
        injectSpeedInsights();
        app.provide('DEV', process.env.NODE_ENV === 'development')
      }
}

