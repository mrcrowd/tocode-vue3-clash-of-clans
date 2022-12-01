<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgURL="item.img"
        :link="`/${item.alias}`"
      >
        <template v-slot:body>
          {{ item.desc }}
        </template>
        <template v-slot:footer>
          <Stats :stats="item.info" />
        </template>
      </Card>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items.js'
import Stats from '@/components/UI/Stats'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  components: {
    Card,
    Stats,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 2
        }
      }
    }
  }
}
</script>
