<template>
  <div></div>
</template>

<script>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'ChildUsingRoute',
  setup () {
      const route = useRoute()
      const increment = computed(() => route.params.increment)


      watch(increment, () => {
          console.log(`This is called before leaving the route which is not nice because now increment is ${increment.value}`)
      })
  }
}
</script>