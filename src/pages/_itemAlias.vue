<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.desc" />
      <h1 class="title" style="color: #fff">{{ item.title }}</h1>
      <p>{{ item.desc }}</p>
      <Stats :stats="item.info" />
      <div>
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js'
import Stats from '@/components/UI/Stats'
export default {
  components: {
    Stats
  },
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)
    if (item === undefined) {
      return this.$router.push('/404')
    } else {
      this.item = item
    }
  }
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
  .card-stats {
    margin: 30px 0;
    border-radius: 14px;
  }
}
</style>
