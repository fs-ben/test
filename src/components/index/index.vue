<template>
  <div id="index">
    <!--幻灯片-->
    <swiper :list="bannerList" :show-desc-mask="false" auto style="width:100%;margin:0 auto;" :aspect-ratio="0.53" :show-dots="bannerList.length > 1" dots-class="custom-bottom" dots-position="center"></swiper>
    <!--菜单 -->
    <app-menu></app-menu>
  </div>
</template>

<script>
    import appMenu from '@/components/index/menu'
    import { Swiper } from 'vux'
    export default {
      data() {
        return {
          bannerList: [
            {
              url: 'javascript:',
              img: '../../assets/images/slide1.jpg',
              fallbackImg: ''
            }
          ]
        }
      },
      components: {
        Swiper, // 幻灯片
        appMenu // 主页菜单
      }
    }
</script>

<style lang="less">
 #index{background-color: @backgroundGray;}
</style>
