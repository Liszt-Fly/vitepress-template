<script lang="ts"  setup>
import { onMounted, ref } from 'vue'
import { getColor } from '../utils/colors'
let container = ref<HTMLSpanElement | null>(null)

onMounted(() => {
    const color = getColor()
    container.value!.style.backgroundColor = color.code
})
</script>
<template>
    <span class="container" ref="container">
        <slot></slot>
    </span>
</template>



<style scoped>
.container {
    background: #9E7A7A;
    font-weight: 900;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    font-variant-east-asian: traditional;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
    font-family: "FZZJ-ZYWBJW";
}
</style>