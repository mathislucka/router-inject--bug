<template>
  <div>{{ injected }}</div>
  <router-link :to="{ name: 'home', params: { increment: parseInt(injected) + 1 }}">Increment</router-link>
</template>

<script>
import { inject, watch } from 'vue'
export default {
  name: 'ChildComponent',
  setup () {
      const injected = inject('increment')

      watch(injected, () => {
          console.log('route param changed', injected)
      })

      return {
          injected
      }
  }
}
</script>