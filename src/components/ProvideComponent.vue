<template>
  <div>
        <child-component />
        <child-component />
  </div>
</template>

<script>
import { provide, toRefs } from 'vue'
import ChildComponent from './ChildComponent.vue'
export default {
    components: { ChildComponent },
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