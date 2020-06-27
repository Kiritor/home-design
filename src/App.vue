<template>
<div id="app">
  <index></index>
</div>
</template>

<script>
import Index from './views/index';

export default {
  name: "App",
  components: {
    Index
  }
}
</script>

<style>
body,
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

button {
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  outline: none;
}

.sy_title {
    padding: 4% 0;
}

.sy_title h2 {
    font-size: 16px;
    line-height: 18px;
    padding-left: 3%;
    border-left: #dea869 solid 4px;
    color: #333;
    font-weight: normal;
}
.sy_title h2 a {
  float: right;
  margin-right: 10px;
  font-size: 10px;
  color: #dea869;
}

.sy_title p {
    margin-left: calc(3% + 4px);
    font-size: 12px;
    color: #999;
    margin-top: 3%;
}

</style>
