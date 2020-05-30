<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" aria-1hidden="true"/>
  </div>
    <div>
      <router-link to="/build">Get started </router-link> building your first robot
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  text-align:center
}
.robot{
  height : 300px;
}
.nav-link{
  text-decoration:none;
  color:inherit;
}

</style>
