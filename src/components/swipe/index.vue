<template>
<van-swipe class="swipe-body" :autoplay="1500" indicator-color="white">
    <van-swipe-item class="swipe-img" v-for="(image, index) in swipeImages" :key="index">
        <a :href="image.url">
        <img v-lazy="image.img" />
        </a>
    </van-swipe-item>
</van-swipe>
</template>

<script>
export default {
    props: [ "swipeImages" ]
}
</script>

<style scoped>
.swipe-body {
    width: 100%;
    height: 136px;
    margin: 40px auto auto auto;
}
.swipe-body img{
    width: 100%;
    height: 100%;
} 
</style>