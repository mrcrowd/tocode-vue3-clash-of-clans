<template>
  <div class="card-stats">
    <div class="one-third" v-for="(stat, index) in stats" :key="index">
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat">{{ stat.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      required: false,
      default() {
        return [
          { title: 'training', value: '-' },
          { title: 'speed', value: '-' },
          { title: 'cost', value: '-' }
        ]
      }
    }
  }
}
</script>
