<template>
  <div id="header">
    <!--定位 begin-->
      <div class="posAds">
        <span class="adsName ellipsis1">佛山</span>
        <i class="icon adsIcons"></i>
      </div>
    <!--定位 end-->
    <!--搜索 begin-->
      <div class="searchIpt">
        <i class="icon searchIcon"></i>
        <span class="iptName">查找供需信息</span>
      </div>
    <!--搜索 end-->
    <!--扫一扫、发布 begin-->
      <div class="scanRight">
        <div class="scanMain"><i class="icon scanIcon"></i></div>
        <div class="releaseMain"><i class="icon addIcon"></i><i class="redDot"></i></div>
      </div>
    <!--扫一扫、发布 end-->
  </div>
</template>

<script>
    export default {
    }
</script>

<style lang="less">
  #header{background-color: @backgroundWhite; display: flex; align-items: center;justify-content: center; height: @headerHeight;}
  #header .posAds{width:100px;display: flex;justify-content: center; align-items: center;overflow: hidden;}
  #header .adsName{display: block;flex:1;color: @textHuiBlack;}
  #header .adsIcons{background-color: @textHuiBlack;display: block;width:32px;height: 32px;-webkit-mask-image: url(../../assets/images/svg/ico-down-arrow.svg);}
  #header .searchIpt{width:100%;display: flex; justify-content: center;align-items:center;flex:1;padding:0 5px;background-color: @searchBg;}
  #header .searchIcon{width:32px;height: 32px;-webkit-mask-image: url(../../assets/images/svg/search.svg);background-color: @textHuiBlack;}
  #header .iptName{color: @textHuiBlack;}
  #header .scanRight{width:80px;display: flex;justify-content: center;align-items: center;}
  #header .scanMain, #header .releaseMain{width:50%; text-align: center;position: relative;}
  #header .scanIcon{width:32px;height: 32px;-webkit-mask-image: url(../../assets/images/svg/scan.svg);background-color: @textHuiBlack;}
  #header .addIcon{width:32px;height: 32px;-webkit-mask-image: url(../../assets/images/svg/more.svg);background-color: @textHuiBlack;}
  #header .redDot{width: 12px;height: 12px;border-radius: 50%;position: absolute;right:0;top:5px;}
</style>
