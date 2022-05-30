<template>
    <span class="container" ref="emph">
        <slot></slot>
    </span>
</template>

<script lang="ts" setup>
import { getColor } from '../utils/colors';
import { onMounted, ref } from 'vue';
const emph = ref<HTMLSpanElement | null>()
onMounted(() => {
    const color = getColor()
    emph.value!.style.color = color.code
})
</script>

<style  scoped>
.container {
    font-weight: bold;
    text-decoration: underline;
}
</style>