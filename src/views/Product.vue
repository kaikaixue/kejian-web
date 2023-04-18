<template>
    <div class="product">
        <banner title="产品中心"></banner>
        <div class="product-content">
            <div class="p-video">
                <video-player
                    class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
                ></video-player>
            </div>
            <div class="lacking">
                <h3 class="title">传统管理模式不足</h3>
                <div class="lacking-bottom">
                    <div class="lacking-bottom-item">
                        <div class="lacking-bottom-item-img">
                            <img
                                src="../assets/img/product-group-icon_3.png"
                                alt=""
                            />
                        </div>
                        <p>
                            质量检查、安全检查以抽查为主，避免存在遗漏，留下质量安全隐患
                        </p>
                    </div>
                    <div class="lacking-bottom-item">
                        <div class="lacking-bottom-item-img">
                            <img
                                src="../assets/img/product-group-icon_2.png"
                                alt=""
                            />
                        </div>
                        <p>
                            数据统计、数据分析的缺失，无法为统计、分析、项目评估等工作提供数据支撑。
                        </p>
                    </div>
                    <div class="lacking-bottom-item">
                        <div class="lacking-bottom-item-img">
                            <img
                                src="../assets/img/product-group-icon_1.png"
                                alt=""
                            />
                        </div>
                        <p>
                            检查工作和检查记录文件脱节，无法做到同步对应；缺少影像文档，无法做到可追溯性。
                        </p>
                    </div>
                </div>
            </div>
            <div class="target">
                <h3 class="title">平台目标</h3>
                <p class="eTitle">TARGET</p>
                <div class="target-img">
                    <img src="../assets/img/product_group_3_img.png" alt="" />
                </div>
            </div>
            <div class="modular">
                <h3 class="title">功能模块</h3>
                <p class="eTitle">MODULAR</p>
                <div class="modular-content">
                    <div class="modular-content-same">
                        <div class="same-item">
                            <div class="same-item-img">
                                <img
                                    src="../assets/img/product-group_4-icon_1.png"
                                />
                            </div>
                            <p>质量控制模块</p>
                        </div>
                        <div class="same-item">
                            <div class="same-item-img">
                                <img
                                    src="../assets/img/product-group_4-icon_2.png"
                                />
                            </div>
                            <p>知识仓库模块</p>
                        </div>
                        <div class="same-item">
                            <div class="same-item-img">
                                <img
                                    src="../assets/img/product-group_4-icon_3.png"
                                />
                            </div>
                            <p>信息流程模块</p>
                        </div>
                        <div class="same-item">
                            <div class="same-item-img">
                                <img
                                    src="../assets/img/product-group_4-icon_4.png"
                                />
                            </div>
                            <p>定位复核模块</p>
                        </div>
                    </div>
                    <div class="modular-content-center">
                        <img
                            src="../assets/img/product_group_4_img.png"
                            alt=""
                        />
                    </div>
                    <div class="modular-content-same">
                        <div class="same-item">
                            <p>信息处理模块</p>
                            <div class="same-item-img">
                                <img
                                    src="../assets/img/product-group_4-icon_5.png"
                                />
                            </div>
                        </div>
                        <div class="same-item">
                            <p>材料设备模块</p>
                            <div class="same-item-img">
                                <img
                                    src="../assets/img/product-group_4-icon_6.png"
                                />
                            </div>
                        </div>
                        <div class="same-item">
                            <p>进度控制模块</p>
                            <div class="same-item-img">
                                <img
                                    src="../assets/img/product-group_4-icon_7.png"
                                />
                            </div>
                        </div>
                        <div class="same-item">
                            <p>安全管理模块</p>
                            <div class="same-item-img">
                                <img
                                    src="../assets/img/product-group_4-icon_8.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
    name: 'Product',
    components: {
        Banner,
    },
    data() {
        return {
            videoSrc: 'http://www.shkjem.com/video/kj.mp4',
            playerOptions: {
                playbackRates: [0.5, 1.0, 1.5, 2.0, 4.0, 8.0], // 播放速度
                autoplay: false, // 自动播放
                muted: false, // 默认情况下将会消除任何音频
                loop: false, // 循环播放
                preload: 'auto', // 建议浏览器在加载元素后是否应该开始下载数据
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式
                fluid: true, // player拥有流体大小，按照比例缩放适应
                sources: [
                    {
                        type: '',
                        src: 'http://www.shkjem.com/video/kj.mp4',
                    },
                ],
                notSupportedMessage: '此视频暂无法播放，请稍后再试',
                controlBar: {
                    timeDivider: true, // 当前时间和持续时间的分隔符
                    durationDisplay: true, // 显示持续时间
                    remainingTimeDisplay: false, // 是否显示剩余时间功能
                    fullscreenToggle: true, // 全屏按钮
                },
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.product {
    width: 100%;
    height: 100%;
    background-color: #14679f;
}

.product-content {
    width: 1240px;
    margin: 0 auto;
    background-color: #fff;
}

.p-video {
    width: 1000px;
    margin: 0 auto;
    padding: 60px 0;
}

.lacking {
    height: 420px;
    padding: 20px 0;

    .lacking-bottom {
        display: flex;
        justify-content: space-around;
        padding: 100px 100px;

        .lacking-bottom-item {
            width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            .lacking-bottom-item-img {
                width: 120px;
                height: 120px;
                background-color: #1677a0;
                border-radius: 50%;
                line-height: 160px;
                overflow: hidden;
            }
            p {
                font-size: 16px;
                text-align: start;
                margin: 10px 0;
            }
        }
    }
}

.target {
    margin-top: 50px;
    .target-img {
        margin-top: 50px;
        text-align: center;
    }
}

.modular {
    margin-top: 50px;
    .modular-content {
        padding: 50px 50px;
        display: flex;
        justify-content: space-around;
    }
}

.modular-content-same {
    width: 182px;
    height: 405px;
    .same-item {
        height: 70px;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        .same-item-img {
            width: 70px;
            height: 70px;
            line-height: 100px;
            background: #1677a0;
            border-radius: 50%;
            text-align: center;
        }
        p {
            color: #1667a0;
            font-weight: 700;
            line-height: 70px;
        }
    }
}

.modular-content-center {
    width: 355px;
    height: 355px;
    img {
        width: 100%;
    }
}

.title,
.eTitle {
    font-size: 34px;
    font-weight: 400;
    color: #333;
    text-align: center;
}

.eTitle {
    font-size: 30px;
    padding: 10px 0;
}
</style>
