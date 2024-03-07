<template>
  <NuxtPage />
</template>
<script setup lang="ts">
  useHead({
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    titleTemplate: (titleChunk) => {
      return `${titleChunk ? titleChunk + ' | ' : ''}` + 'なですきーdocs';
    }
  })
</script>