<template name="skeleton">
  <view class="sk-container">
    <view class="navbar navbar" style="padding-top:20px">
      <view class="wrap wrap">
        <navigator class="back icon-left sk-pseudo sk-pseudo-circle" open-type="navigateBack"></navigator>
        <view class="title sk-transparent sk-text-14-2857-98 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view :scroll-y="true" class="viewport viewport" id="scroller" :enable-back-to-top="true">
      <view class="overview sk-image" style="padding-top:40px">
        <view class="status icon-clock sk-transparent sk-text-0-0000-209 sk-text sk-pseudo sk-pseudo-circle">等待付款
        </view>
        <view class="tips tips">
          <text class="money sk-transparent sk-text-0-0000-816 sk-text">应付金额: ¥ 464</text>
          <text class="time sk-transparent sk-text-0-0000-374 sk-text">支付剩余</text>
          <view is="node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown">
            <view class="uni-countdown countdown--uni-countdown data-v-342c352a countdown--data-v-342c352a">
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-510 sk-text"
                style="color: rgb(255, 255, 255); font-size: 14px; width: 22px; line-height: 20px; border-radius: 3px; background-position-x: 50%;">00</text>
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color:#fff;font-size:12px;margin:;">:</text>
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-55 sk-text"
                style="color: rgb(255, 255, 255); font-size: 14px; width: 22px; line-height: 20px; border-radius: 3px; background-position-x: 50%;">29</text>
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color:#fff;font-size:12px;margin:;">:</text>
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-650 sk-text"
                style="color: rgb(255, 255, 255); font-size: 14px; width: 22px; line-height: 20px; border-radius: 3px; background-position-x: 50%;">52</text>
            </view>
          </view>
        </view>
        <view class="button sk-transparent sk-text-28-1250-49 sk-text" style="background-position-x: 50%;">去支付
        </view>
      </view>
      <view class="shipment shipment">
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-943 sk-text">py666 13127158639</view>
          <view class="address sk-transparent sk-text-14-2857-619 sk-text">北京市 北京市 东城区123</view>
        </view>
      </view>
      <view class="goods goods">
        <view class="item item">
          <navigator class="navigator navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-699 sk-text">平台云音乐氧气立体声蓝牙头戴式触控耳机
              </view>
              <view class="type sk-transparent sk-text-22-2222-913 sk-text">曜岩灰</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-331 sk-text">459.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
        </view>
        <view class="total total">
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-559 sk-text">商品总价: </view>
            <view class="symbol sk-transparent sk-text-0-0000-806 sk-text sk-pseudo sk-pseudo-circle">459.00
            </view>
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-595 sk-text">运费: </view>
            <view class="symbol sk-transparent sk-text-0-0000-812 sk-text sk-pseudo sk-pseudo-circle">5</view>
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-717 sk-text">应付金额: </view>
            <view class="symbol primary sk-transparent sk-text-0-0000-894 sk-text sk-pseudo sk-pseudo-circle">
              464</view>
          </view>
        </view>
      </view>
      <view class="detail detail">
        <view class="title sk-transparent sk-text-0-0000-726 sk-text">订单信息</view>
        <view class="row row">
          <view class="item sk-transparent"> 订单编号: 1749038919304876034
            <text class="copy sk-transparent sk-text-0-0000-830 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-694 sk-text">下单时间: 2024-01-21 19:59:09</view>
        </view>
      </view>
      <view is="components/XtxGuess" class="r r">
        <view class="caption XtxGuess--caption">
          <text
            class="text XtxGuess--text sk-transparent sk-text-0-0000-718 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
        </view>
        <view class="guess XtxGuess--guess">
          <navigator class="guess-item XtxGuess--guess-item">
            <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
          </navigator>
          <navigator class="guess-item XtxGuess--guess-item">
            <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
          </navigator>
        </view>
      </view>
      <view class="toolbar toolbar" style="padding-bottom:0px">
        <view class="button primary sk-transparent sk-text-14-2857-357 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-188 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-98 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-0-0000-209 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 36.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-816 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 28.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-374 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 28.0000rpx;
  position: relative !important;
}

.sk-text-15-0000-510 {
  background-image: linear-gradient(transparent 15.0000%, #EEEEEE 0%, #EEEEEE 85.0000%, transparent 0%) !important;
  background-size: 100% 40.0000rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-15-0000-55 {
  background-image: linear-gradient(transparent 15.0000%, #EEEEEE 0%, #EEEEEE 85.0000%, transparent 0%) !important;
  background-size: 100% 40.0000rpx;
  position: relative !important;
}

.sk-text-15-0000-650 {
  background-image: linear-gradient(transparent 15.0000%, #EEEEEE 0%, #EEEEEE 85.0000%, transparent 0%) !important;
  background-size: 100% 40.0000rpx;
  position: relative !important;
}

.sk-text-28-1250-49 {
  background-image: linear-gradient(transparent 28.1250%, #EEEEEE 0%, #EEEEEE 71.8750%, transparent 0%) !important;
  background-size: 100% 64.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-943 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-619 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-699 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-22-2222-913 {
  background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
  background-size: 100% 43.2000rpx;
  position: relative !important;
}

.sk-text-14-2857-331 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-0-0000-559 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-806 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-595 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-812 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-717 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-894 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 36.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-726 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 30.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-830 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 20.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-694 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.0000rpx;
  position: relative !important;
}

.sk-text-0-0000-718 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 32.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-357 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-188 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>