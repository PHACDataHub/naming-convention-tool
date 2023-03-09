<script setup>
import Naming from './components/Naming.vue'
</script>

<template>
  <div>
    <div class="header">
      <h1>Cloud Naming Convention</h1>
    </div>
    <div class="main">
      <Naming />
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 5px 20px;
  background-color: rgb(252, 48, 82);
  color: white;
  border-radius: 5px;
}

.main {
  width: 100%;
  margin-top: 25px;
}
</style>
