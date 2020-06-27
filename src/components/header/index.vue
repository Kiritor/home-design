<template>
    <div class="top-header">
        <div class="top-wrap">
            <div class="top-logo">
                <a href="">
                    <img src="@/assets/images/logo.png">
                </a>
            </div>
            <div class="top-tel">
			<h2>
				<img src="@/assets/images/icon_call.png">
				<span>18883251958</span>
			</h2>
		</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.top-header {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 40px;
}
.top-header .top-wrap {
    margin: 0 3%;
    overflow: hidden;
}
.top-header .top-logo {
    float: left;
    width: 50%;
    height: 40px;
    position: relative;
}

.top-header .top-logo a {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%,-50%);
    text-decoration: none;
    outline: none;
}
.top-header .top-logo img {
    max-width: 90%;
    max-height: 30px;
    display: block;
    border: none;
}
.top-header .top-tel {
    float: right;
    padding: 2px auto auto auto;
}

.top-header .top-tel img {
    vertical-align: middle;
    width: 20px;
}

.top-header .top-tel span {
    display: inline-block;
    font-size: 12px;
    color: #dea869;
    vertical-align: middle;
    padding-left: 4px;
}
</style>