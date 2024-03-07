<template>
  <NuxtLayout>
  <div :class="$style.body">
    <section>
      <h1>なですきー docs</h1>
      <p>このサイトはなですきーのドキュメントサイトです。</p>
    </section>

    <section>
      <h2>なですきーとは</h2>
      <p>なですきーは2023年7月にオープンしたMisskeyサーバーです。</p>
      <h3>なですきーの特徴</h3>
      <ul>
        <li>ローカルタイムライン・グローバルタイムラインをログインせずに見ることができません。</li>
        <li>CWや公開範囲のルールを守る限り、禁止される投稿内容が少ないです。</li>
        <li>なですきーはMisskeyコア開発メンバーであるtaichanが運営しています。</li>
        <li>独自フォークによって体験のカスタムがされています。</li>
      </ul>
      <h4>フォークに関して</h4>
      <p>なですきーに最適化したフォークを利用して運営しています。</p>
      <p>オープンソース (AGPL)で、GitHub上にて公開されています。</p>
      <p><a href="http://github.com/nadesskey/nadesskey">GitHubはこちら</a></p>

      <h3>利用規約</h3>
      <NuxtLink to="/terms">利用規約はこちら</NuxtLink>
    </section>
  </div>
</NuxtLayout>
</template>
<style module>
.body {
  width: 100%;
}
</style>