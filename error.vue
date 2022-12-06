<template>
  <div class="error-wrapper">
    <img
      src="/img/pikachu-not-found.png"
      alt=""
      class="pikachu-not-found"
    >
    <h1 class="error-title">
      No such page was found
    </h1>
    <NuxtLink
      to="/"
      class="to-home"
    >
      Home
    </NuxtLink>
  </div>
</template>

<style scoped>
.error-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.pikachu-not-found {
  width: 200px;
  margin-right: -35px;
}
.error-title {
  font-size: 30px;
  margin: 10px;
  padding: 10px 0;
}
.to-home:visited,
.to-home {
  text-decoration: none;
  color: #000;
  border: 1px solid #000000;
  padding: 10px 40px;
  transition: all 0.1s ease;
}

.to-home:hover {
  background: rgb(247, 255, 132);
}
</style>