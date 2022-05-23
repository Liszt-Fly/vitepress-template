<template>
    <div class="prompt-container">
        <svg class="icon" aria-hidden="true" width="20" height="20">
            <use :xlink:href="'#' + getCode(item!).code"></use>
        </svg>
        <span class="content">
            <slot></slot>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { getCode } from "../utils/IconSet"

const props = defineProps({
    item: String
})
</script>

<style scoped >
.prompt-container {
    background-color: rgb(235, 235, 235);
    padding: 5px;

}

svg,
span {
    margin-right: 10px;
    vertical-align: middle;
}
</style>