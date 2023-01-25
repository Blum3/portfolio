<template>
  <div>
    <div class="separator"></div>
    <div class="container">
      <h1> Project Title </h1>
      
      <img src="../images/wave-bg.png">
      
      <p> description description description description description </p>
      <p> description description description description description </p>
      <p> description description description description description </p>
      <p> description description description description description </p>
      <p> description description description description description </p>
      <p> description description description description description </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPreview"
}
</script>

<style scoped>

*{
  color: rgba(239,239,51,1);
  text-align: center;
}

h1{
  padding: 20px
}

.container{
  background-color: black;
  padding-bottom: 40px;
  padding-top: 30px;
}

.separator{
  background-color: rgba(239,239,51,1);
  width: 100%;
  height: 20px;
}

img{
  width: 60%;
  height: 60%;
  padding : 30px;
}
</style>