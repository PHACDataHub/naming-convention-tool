<template>
  <div>
    <div class="header">
      <h1>Cloud Naming Convention</h1>
      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/validate">Validate</router-link>
        <router-link to="/convention">Naming Convention</router-link>

      </div>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 0px 15px;
  background-color: rgb(252, 48, 82);
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.main {
  width: 100%;
  margin-top: 25px;
  padding-left: 25px;
}

.nav a {
  text-decoration: none;
  color: white;
  padding: 10px;
}

.nav a:visited {
  text-decoration: none;
}
.nav a:hover{
  color: pink;
}

.nav{
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 18px;
}
</style>
