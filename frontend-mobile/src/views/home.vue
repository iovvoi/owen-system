<template>
  <div>
    <section class="my-swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide  class="my-swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id">
          <img class="my-swp-img" :src="slide.img" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'mHome',
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperList: [
        {
          id: 1001,
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584202341226&di=eb7afb31c5d014a9cf349e0239bcf0e5&imgtype=jpg&src=http%3A%2F%2Fwww.dmyzw.com%2Fpicture%2F0d422134e596cf1edfcdc05480f78f3b.jpg'
        },
        {
          id: 1002,
          img: 'http://img2.imgtn.bdimg.com/it/u=3535831606,728475268&fm=26&gp=0.jpg'
        },
        {
          id: 1003,
          img: 'http://img1.imgtn.bdimg.com/it/u=138916822,3615167733&fm=26&gp=0.jpg'
        }
      ],
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
        initialSlide: 0,
        loop: true,
        pagination: { el: '.swiper-pagination' }, // 分页按钮
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          //console.log('onSlideChangeEnd', swiper.realIndex)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    height: 300px;
  }
}
</style>
