<template>
  <button class="btn btn-primary"
          @click.prevent="doTask">Check Out Items</button>
</template>

<script>
export default {
  name: "CheckOutBtn",

  methods: {
    doTask(){
      this.$emit('check-out-bag')
    },
  },
}
</script>

<style scoped>

</style>