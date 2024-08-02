<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import NavVisitor from './NavVisitor.vue'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout v-bind="$attrs">
      <!--
        相关插槽
        https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
        https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
      -->
      <template #nav-bar-title-after>
        <NavVisitor />
      </template>

    </Layout>
  </template>
