<template>
    <router-link :to="{ name: 'home', params: { increment: 1 }}">Go to increment</router-link>
</template>

<script>
export default {
    name: 'SomeLinkComponent'
}
</script>