<template>
  <div class="menu-body">
    <ul class="nav-menu">
      <li v-for="menu in menus" :key="menu.id">
        <a :href="menu.url"
          ><img :src="menu.imageUrl" /><span>{{ menu.title }}</span></a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ["menus"]
};

</script>

<style scoped>
.menu-body {
  padding: 2% 3%;
}

.nav-menu {
  overflow: hidden;
  padding: 1% 0;
}

.nav-menu li {
  float: left;
  width: 25%;
  text-align: center;
  margin: 16px 0;
}

.nav-menu li img {
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto;
}

.nav-menu li span {
  color: #333;
  font-size: 12px;
  display: block;
  margin-top: 6px;
}
</style>
