// index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"
import './custom.css'

export default {
    extends: DefaultTheme,
    Layout: Layout,
    SpeedInsights: SpeedInsights,
    enhanceApp({ app }) {
        app.provide('DEV', process.env.NODE_ENV === 'development')
      }
}