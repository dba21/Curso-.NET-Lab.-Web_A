<template>
    <div class="container">
      <h2>Oops! Página não foi encontrada.</h2>
      <h1>404</h1>
      <p>Não conseguimos encontrar a página que procura.</p>
      <router-link to="/">Voltar ao início</router-link>
    </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "monstserrat", sans-serif;
  background-image: linear-gradient(125deg, #a5df7e, #e3e994);
}

.container {
  width: 100%;
  margin-top: 20%;
  transform: translateY(-50%);
  text-align: center;
  color: #410f0f;
}

.container h1 {
  font-size: 160px;
  margin: 0;
  font-weight: 900;
  letter-spacing: 20px;
  background: url("../assets/cl.jpeg") center no-repeat;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.container a {
  text-decoration: none;
  background: #e55039aa;
  color: #fff;
  padding: 12px 54px;
  display: inline-block;
  border-radius: 25px;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.4s;
}

.container a:hover {
  background: #e55039;
}
</style>
