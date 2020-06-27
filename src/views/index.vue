<template>
<div>
    <!-- 顶部浮动 -->
    <app-header></app-header>
    <!-- 轮播图 -->
    <swipe :swipeImages="swipeImages"></swipe>
    <!-- 图标按钮区 -->
    <nav-menu :menus="menus"></nav-menu>
    <!-- 胶囊广告 -->
    <div class="adbutton"><a href="#"><img src="@/assets/images/ad_pic.jpg"></a></div>
    <!-- 装修报价 -->
    <div class="price_box">
        <div class="sy_title">
            <h2>装修估计</h2>
            <p>一分钟帮您估算家里装修价格</p>
        </div>
        <form>
            <label><input type="text" name="" placeholder="填写您的电话号码"></label>
            <label><input type="text" name="" placeholder="填写您的房屋面积">
                <span>平米</span>
            </label>
            <button>立即估算</button>
        </form>
    </div>
    <!-- 装修案例 -->
    <case-box :caseImages="caseImages"></case-box>
    <!-- foot ad -->
    <div class="footer_ad">
        <a href="#"><img src="@/assets/images/ad_foot.jpg"></a>
    </div>
    <!-- footer -->
    <foot></foot>
</div>
</template>

<script>
import AppHeader from "@/components/header/index";
import Swipe from "@/components/swipe/index";
import NavMenu from "@/components/nav-menu/index";
import CaseBox from "@/components/case-box/index";
import Foot from "@/views/footer"

export default {
    components: {
        AppHeader,
        Swipe,
        NavMenu,
        CaseBox,
        Foot
    },
    data() {
        return {
            swipeImages: [{
                    "id": 2,
                    "img": require("@/assets/images/banner02.jpg"),
                    "url": "http://www.baidu.com"
                },
                {
                    "id": 3,
                    "img": require("@/assets/images/banner03.jpg"),
                    "url": ""
                },
                {
                    "id": 4,
                    "img": require("@/assets/images/banner04.jpg"),
                    "url": ""
                },
                {
                    "id": 5,
                    "img": require("@/assets/images/banner05.jpg"),
                    "url": ""
                },
                {
                    "id": 6,
                    "img": require("@/assets/images/banner06.jpg"),
                    "url": ""
                }
            ],
            caseImages: [{
                    "id": 1,
                    "url": "",
                    "title": "美式田园",
                    "img": require("@/assets/images/casepic01.jpg")
                },
                {
                    "id": 1,
                    "url": "",
                    "title": "简约北欧",
                    "img": require("@/assets/images/casepic02.jpg")
                }
            ],
            menus: [{
                    "id": 1,
                    "title": "紫钻工艺",
                    "imageUrl": require("@/assets/images/icon01.png"),
                    "url": "https://www.baidu.com"
                },
                {
                    "id": 2,
                    "title": "设计团队",
                    "imageUrl": require("@/assets/images/icon02.png"),
                    "url": ""
                },
                {
                    "id": 3,
                    "title": "材料了解",
                    "imageUrl": require("@/assets/images/icon03.png"),
                    "url": ""
                },
                {
                    "id": 4,
                    "title": "合同预约",
                    "imageUrl": require("@/assets/images/icon04.png"),
                    "url": ""
                }, {
                    "id": 5,
                    "title": "装修案例",
                    "imageUrl": require("@/assets/images/icon05.png"),
                    "url": ""
                }, {
                    "id": 6,
                    "title": "装修动态",
                    "imageUrl": require("@/assets/images/icon06.png"),
                    "url": ""
                }, {
                    "id": 7,
                    "title": "售后无忧",
                    "imageUrl": require("@/assets/images/icon07.png"),
                    "url": ""
                },
                {
                    "id": 8,
                    "title": "一键报价",
                    "imageUrl": require("@/assets/images/icon08.png"),
                    "url": ""
                }
            ]
        };
    },
    mounted() {
        //数据挂载
        this.$axios.post("/api/data").then((res) => {
            const datas = res.data;
            console.log(datas)
            //this.swipeImages = datas;
            console.log(datas.menuList)
            //this.menus = datas.menuList;
        });
    }
}
</script>

<style scoped>
.adbutton {
    border-bottom: #f5f5f5 solid 6px;
}

.adbutton img {
    width: 100%;
    display: block;
}

.price_box {
    border-bottom: #f5f5f5 solid 6px;
}

.price_box form {
    display: block;
    padding: 0 3% 3%;
}


.price_box form label {
    display: block;
    padding: 0 3% 3%;
    position: relative;
}

.price_box form input {
    width: 100%;
    height: 38px;
    line-height: 38px;
    background-color: #f5f5f5;
    text-indent: 1em;
    font-size: 12px;
    border: #f5f5f5 solid 1px;
}
.price_box form input:focus{
    border-color: #dea869 ;
}

.price_box form label span {
    position: absolute;
    top: 0;
    right: 40%;
    line-height: 38px;
    font-size: 12px;
    color: #999;
}

.price_box form button {
    width: 100%;
    height: 38px;
    background-color: #dea869;
    color: white;
}

.footer_ad {
    padding: 3% 0;
}
.footer_ad img {
    width: 100%;
    display: block;
}
</style>