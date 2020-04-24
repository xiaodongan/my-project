<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <Swiper>
      <SwiperItem v-for="(item,index) in banners":key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import navbar from '../../components/common/nav-bar/Navbar'
  import {getHomeMultidata} from  '../../network/home'
  import {Swiper,SwiperItem} from '../../components/common/swiper/index'
  export default {
    name: "Home",
    data(){
      return {
        banners:[],
        recommend:[]
      }
    },
    components:{
      navbar,
      Swiper,
      SwiperItem
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    }
  }
</script>

<style scoped>
.home-nav{
  background: hotpink;
  color: #fff;
}
</style>


