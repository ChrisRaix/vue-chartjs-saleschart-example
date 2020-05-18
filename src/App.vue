<template>
  <div class="box">
    <h2 class="title is-5">Monthly Sales Chart</h2>
    <monthly-sales-chart></monthly-sales-chart>
  </div>
</template>

<script>
import MonthlySalesChart from "./components/MonthlySalesChart";

export default {
  name: "app",
  components: {
    MonthlySalesChart
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
