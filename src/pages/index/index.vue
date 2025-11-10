<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
// Component
import CustomeNavBar from './components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPannel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables/index'
// API
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
// Type
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

// 获取广告数据
const bannerList = ref<BannerItem[]>([])
const getBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
const getCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
const getHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

const { guessRef, onScrolltolower } = useGuessList()

// 是否在进行下拉刷新的标记
const isTriggered = ref(false)

// 下拉刷新
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // 重置数据
  await Promise.all([getBannerData(), getCategoryData(), getHotData(), guessRef.value?.getMore()])
  isTriggered.value = false
}

// 是否加载中的标记
const isLoading = ref(false)

// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([
    getBannerData(),
    getCategoryData(),
    getHotData()
  ])
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomeNavBar />

  <!-- 滚动容器 -->
  <scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower" scroll-y class="scroll-view">
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 1. 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 2. 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 3. 热门推荐 -->
      <HotPannel :list="hotList" />
      <!-- 4. 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
