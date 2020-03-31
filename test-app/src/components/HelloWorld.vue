<template>
  <div>
    <div class="first">primo blocco</div>
    <div class="second">secondo blocco</div>
    <div class="third">terzo blocco</div>
    <div class="fourth">quarto blocco</div>
    <div class="fifth">quinto blocco blocco</div>
    <div class="sixth">sesto blocco</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.first {
  background: red;
  width: 200px;
  height: 20px;
}

.second {
  background: green;
  width: 200px;
  height: 20px;
  position: relative;
  left: 200px;
  top: -20px;
}

.third {
  background: yellow;
  width: 200px;
  height: 20px;
  position: relative;
  left: 400px;
  top: -40px;
}

.fourth {
  background: grey;
  width: 250px;
  height: 30px;
  position: relative;
  top: -40px;
}

.fifth {
  background: brown;
  width: 250px;
  height: 30px;
  position: relative;
  top: -70px;
  left: 250px;
}

.sixth {
  background: orange;
  width: 100px;
  height: 30px;
  position: relative;
  left: 500px;
  top: -100px;

}
</style>
