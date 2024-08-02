<script setup lang="ts">
import { useData } from 'vitepress'
import { inject, Ref } from 'vue'
const DEV = inject<Ref<boolean>>('DEV')

</script>

<template>
  <img
    v-if="!DEV"
    class="visitor"
    :src="`https://visitor-badge.laobi.icu/badge?page_id='sualpha.vitepress-nav1'`"
    onerror="this.style.display='none'"
  />
</template>

<style scoped>
.visitor {
  margin-left: 8px;
}

@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>