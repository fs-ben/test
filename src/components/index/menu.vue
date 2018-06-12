<template>
    <div id="menu">
      <div class="container">
        <div class="threeMenu">
          <div class="threeItem"><div class="threeIcons"><i class="icon supplyIcon"></i></div><span class="threeItemName">供需对接</span></div>
          <div class="threeItem"><div class="threeIcons"><i class="icon siteIcon"></i></div><span class="threeItemName">智慧工地</span></div>
          <div class="threeItem"><div class="threeIcons"><i class="icon storeIcon"></i></div><span class="threeItemName">共德旗舰店</span></div>
        </div>
        <div class="fourMenu">
          <div class="fourItem"><i class="icon projectIcon"></i><span class="fourItemName">建筑工程</span></div>
          <div class="fourItem"><i class="icon merchIcon"></i><span class="fourItemName">土地招商</span></div>
          <div class="fourItem"><i class="icon stockIcon"></i><span class="fourItemName">建筑集购</span></div>
          <div class="fourItem"><i class="icon memberIcon"></i><span class="fourItemName">会员风采</span></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="less">
  #menu{background-color: @backgroundWhite;padding:10px 8px;}
  #menu .container{}
  #menu .threeMenu{display: flex;}
  #menu .threeItem{width:33.3333%;display: flex; align-items: center; justify-content: center; flex-direction: column;margin-right: 10px;}
  #menu .threeItem:last-child{margin-right:0;}
  #menu .threeIcons{width:40px;height: 40px;border-radius: 50%;padding:13px;}
  #menu .supplyIcon{width:100%;height: 100%;-webkit-mask-image: url(../../assets/images/menuIcons/supply.svg);background-color: @textHuiBlack;}
  #menu .threeItemName{display: block;text-align: center;padding-top: 5px;}
  #menu .fourMenu{padding-top:10px;display: flex;}
  #menu .fourItem{width:25%;display: flex;justify-content: center; align-items: center;margin-right:10px;}
  #menu .fourItem:last-child{margin-right: 0;}
  #menu .projectIcon{-webkit-mask-image: url(../../assets/images/menuIcons/supply.svg);background-color: @backgroundWhite;}
  #menu .merchIcon{-webkit-mask-image: url(../../assets/images/menuIcons/supply.svg);background-color: @backgroundWhite;}
  #menu .stockIcon{-webkit-mask-image: url(../../assets/images/menuIcons/supply.svg);background-color: @backgroundWhite;}
  #menu .memberIcon{-webkit-mask-image: url(../../assets/images/menuIcons/supply.svg);background-color: @backgroundWhite;}
  #menu .fourItemName{color: @backgroundWhite; margin-left:5px;}
</style>
