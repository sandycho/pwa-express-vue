<template>
  <div id='userContainer'>
    <p>Hello</p>

    <p>{{message}}</p>
  </div>
</template>

<script>
module.exports = {
  data: {
    message: "hello"
  },
  el: 'userContainer'
};
</script>

<style>
p {
  font-size: 14px;
}
</style>