<template>
  <div class="card-wrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  --font-color: #fefefe;
  --font-color-sub: #7e7e7e;
  --bg-color: #327a81;
  --main-color: #fefefe;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
}
</style>
