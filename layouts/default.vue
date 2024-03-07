<template>
  <header>
    <NuxtLink to="/" :class="$style.header_link">
      <img :class="$style.logo" src="https://mi-gcs.taichan.site/files/b036e900-d787-4f77-bcdc-36f2fda72b19.png" alt="" />
      なですきー docs
    </NuxtLink>
  </header>
  <div :class="$style.page">
    <slot />
  </div>
  <footer></footer>
</template>
<style module>
* {
  --accent: #FF39C8;
  --bg: #FEDADA;
  --bg-rgb: 254, 218, 218;
  --bg-sub: #EEEEEE;
  --bg-sub-rgb: 238, 238, 238;
  --text-normal: #5f5f5f;
  --text-normal-rgb: 95, 95, 95;
  --text-sub: #fafafa;
  --border-radius: 12px;
  color: var(--text-normal);

  font-family: 'Yu Gothic', 'YuGothic', '游ゴシック', '游ゴシック体', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo', 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}

html, body {
  margin: 0;
  padding: 0;

  background-color: var(--bg);
  line-height: 1.6;
}

header {
  align-items: center;
  background-color: var(--accent);
  color: var(--text-sub);
  display: flex;
  padding: 12px 8px;
  font-weight: 500;
}

header a {
  color: var(--text-sub);
  text-decoration: none;
}

.header_link {
  display: flex;
  align-items: center;
}

.logo {
  border: var(--accent) 1px solid;
  height: 40px;
  width: 40px;
  margin: 0 12px;
}

.page {
  background-color: rgba(var(--bg-sub-rgb), 0.55);
  border-radius: var(--border-radius);
  display: flex;
  margin: 12px 16px;
  padding: 4px 16px 32px;
}

h1 {
  font-size: 28px;
  font-weight: 700;
  border-bottom: 1px solid rgba(var(--text-normal-rgb), 0.5);
  margin: 16px 0;
  & > a {
    color: var(--text-normal);
    text-decoration: none;
  }
}

h2 {
  font-size: 24px;
  font-weight: 700;
  padding: 0;
  margin: 32px 0 16px 0;
  & > a {
    color: var(--text-normal);
    text-decoration: none;
  }
}

h3 {
  font-size: 18px;
  font-weight: 700;
  margin: 26px 0 8px 0;
  & > a {
    color: var(--text-normal);
    text-decoration: none;
  }
}

h4 {
  font-size: 16px;
  font-weight: 700;
  border-left: 4px solid var(--accent);
  padding: 0 4px;
  margin: 20px 0 12px 0;
  & > a {
    color: var(--text-normal);
    text-decoration: none;
  }
}

p {
  margin: 12px 0;
}

ul {
  margin: 0;
  padding: 0 0 0 2rem;
}
</style>