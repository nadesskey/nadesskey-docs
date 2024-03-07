<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <h1>404 Not Found</h1>
        <p>アクセスしたページが見つかりませんでした。</p>
      </template>
    </ContentDoc>
  </main>
</template>
<style>
  h2 {
    text-decoration: none;
  }
  main {
    width: 100%;
  }
</style>