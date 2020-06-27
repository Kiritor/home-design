<template>
<div class="case-box">
    <div class="sy_title">
        <h2>装修案例
            <a href="#">更多案例</a>
        </h2>
        <p>您想要的装修风格,这里都有~</p>
    </div>
    <div class="case-body fix">
        <!-- 轮播区 -->
        <div class="swiper-container case_slide">
            <van-swipe :autoplay="2000" indicator-color="#f5f5f5" :show-indicators=false>
                <van-swipe-item class="swipe-img" v-for="(image, index) in caseImages" :key="index">
                    <a :href="image.url">
                        <img v-lazy="image.img" />
                        <p class="imgTips">
                            {{ image.title }}
                            <i></i>
                        </p>
                    </a>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!--  -->
        <div class="case_grid">
            <div class="header">
                <img src="@/assets/images/casepic02.jpg" />
                <a>
                    <h3>现代都市<i></i></h3>
                    <span>查看更多</span>
                </a>
            </div>
            <div class="bottom">
                <a>
                    <img src="@/assets/images/news_pic.jpg" />
                    <span>新中式</span>
                </a>
                  <a>
                    <img src="@/assets/images/team_pic.jpg" />
                    <span>法式</span>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ["caseImages"]
}
</script>

<style scoped>
.case-box {
    border-bottom: #f5f5f5 solid 6px;
}

.case-body {
    padding: 0 3% 3%;
}

.fix {
    zoom: 1;
}

.fix:after {
    display: table;
    content: '';
    clear: both;
}

.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.case_grid {
    float: right;
    width: 58%;
}
.case_grid .header {
    height: 60px;
    width: 100%;
    overflow: hidden;
    position: relative;
}
.case_grid .header img {
    width: 100%;
    display: block;
    position: absolute;
    height: 60px;
    left: 0;
}
.case_grid .header a {
    position: absolute;
    top: 0;
    right: 0;
    width: 33%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    color: #ffffff;
}
.case_grid .header a span{
    position: absolute;
    bottom: 8px;
    font-size: 8px;
    margin-left: 4px;
}

.case_grid .header a h3{
    position: relative;
    font-size: 10px;
    margin: 10px auto auto 4px;
    overflow: hidden;
    line-height: 100%;
    padding-bottom: 8px;
}
.case_grid .header a h3 i {
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 2px;
    width: 24px;
    background-color: #dea869;
}
.case_grid .bottom {
    height: 56px;
    margin-top: 6px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.case_grid .bottom a {
    float: left;
    width: 48.5%;
    position: relative;
    overflow: hidden;
}
.case_grid .bottom a img {
    width: 100%;
    height: 56px;
}
.case_grid .bottom a span {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    color: #ffffff;
    background-color: rgba(0, 0, 0, .5);
    font-size: 10px;
    text-align: center;
    padding-top: 4px;
}

.case_slide {
    float: left;
    width: 40%;
}

.case_slide img {
    width: 100%;
    height: 120px;
}

.case_slide a {
    display: block;
    position: relative;
}

.case_slide .imgTips {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    padding: 0 5%;
    height: 32px;
    background-color: rgba(0, 0, 0, .6);
    font-size: .26rem;
    color: #fff;
    line-height: 32px;
}
.case_slide .imgTips i {
    position: absolute;
    left: 5%;
    bottom: 4px;
    width: 24px;
    height: 2px;
    background-color: #dea869;
}
.case-body .van-swipe__indicators{
    right: 0%
}
</style>