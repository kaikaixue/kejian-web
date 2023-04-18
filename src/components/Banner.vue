<template>
    <div class="banner">
        <div class="mm"></div>
        <div class="banner-img">
            <img src="../assets/img/bgtop.jpg" alt="" />
        </div>
        <div class="banner-title">
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        title: {
            type: String,
            default: '',
        },
        img: {
            type: String,
            default: '../assets/img/bgtop.jpg',
        },
    },
}
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    height: 300px;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: #fff;

    .mm {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(../assets/img/bgtop.jpg);
        filter: blur(10px);
        margin: -10px;
        padding: 10px;
        background-position: center;
        background-size: 100%;
    }

    img {
        position: absolute;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
    }

    .banner-title {
        position: absolute;
        color: #fff;
        font-size: 45px;
        font-weight: 400;
        text-align: center;
        line-height: 300px;
        width: 100%;
    }
}
</style>
