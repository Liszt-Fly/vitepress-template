<template>
    <div class="word-pronun">
        <audio ref="audio"
            :src="'https://ssl.gstatic.com/dictionary/static/sounds/oxford/' + (word != null ? word.innerText : 'test') + '--_gb_1.mp3'">
        </audio>

        <div class="word-part">
            <div class="button" @click="playAudio">
                <svg class="icon" aria-hidden="true" width="20" height="20">
                    <use :xlink:href="'#' + state"></use>
                </svg>
            </div>
            <div class="word" ref="word">
                <slot>{{ word_value }}</slot>
            </div>
        </div>
        <div class="property-part">
            <div class="property">
                {{ word_property }}
            </div>
            ｜
            <div class="symbol">{{ word_symobl }}</div>
        </div>


    </div>
</template>

<script lang="ts" setup>
import { dict } from 'interfaces/dict';
import { onMounted, Ref, ref, computed, ComputedRef } from 'vue';
import RandomStroke from './RandomStroke.vue';
let state: Ref<"icon-bofang" | "icon-zanting"> = ref("icon-bofang")
let word = ref<HTMLDivElement | null>()
const audio = ref<HTMLAudioElement | null>();
let word_value: ComputedRef<String>
let word_symobl: Ref<String> = ref("")
let word_property: Ref<String> = ref("")
const playAudio = () => {
    audio.value!.play()
    state.value = "icon-zanting"
}
onMounted(() => {
    audio.value!.onplay = () => {
        state.value = "icon-zanting"
    }
    audio.value!.onended = () => {
        state.value = "icon-bofang"
    }
    word.value!.innerText = word.value!.innerText.toLowerCase()
    word_value = computed(() => {
        if (word.value == null) return "error"
        return word.value!.innerText.toLowerCase()
    })
    //请求API
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/reading\?key\=acab3f0a-f181-49df-82b1-8dce68443227`).then((val) => {
        val.json().then((v) => {
            let data: dict = v[0]
            console.log(data)
            word_symobl.value = data.hwi.prs[0].mw
            word_property.value = data.fl
        })
    })
})
</script>

<style lang="scss" scoped>
.word-pronun {
    padding: 5px;
    background-color: #F5F5F5;
    border: solid 2px #666;
    display: flex;

    justify-content: space-between;

    .word-part {
        display: flex;
        align-items: center;
    }

    .button {
        cursor: pointer;
        display: flex;
        padding: 5px;
    }

    .property-part {
        display: flex;

        .symbol,
        .property {

            color: #666;
            border: solid 1px #666;
            padding: 5px;
            font-weight: bold;
        }

        .property {
            margin-left: 45px;
        }
    }
}
</style>