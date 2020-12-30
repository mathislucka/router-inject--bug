<template>
  <div>
        <child-component />
        <child-component />
        <child-using-route />
  </div>
</template>

<script>
import { provide, toRefs } from 'vue'
import ChildComponent from './ChildComponent.vue'
import ChildUsingRoute from './ChildUsingRoute.vue'

export default {
    components: { ChildComponent, ChildUsingRoute },
  name: 'ProvideComponent',
  props: ['increment'],
  setup (props) {
      const { increment } = toRefs(props)
      const provider = provide('increment', increment)

      return {
          provider
      }
  }
}
</script>