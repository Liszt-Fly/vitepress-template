<template>
    <div class="word-pronun">
        <audio ref="audio"
            :src="'https://media.merriam-webster.com/audio/prons/en/us/mp3/'+sub_dict+'/'+word_pronun_ref+'.mp3'">
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

            <div class="symbol">{{ word_symobl }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { dict } from 'interfaces/dict';
import { onMounted, Ref, ref, computed, ComputedRef } from 'vue';
//* declaration
let state: Ref<"icon-bofang" | "icon-zanting"> = ref("icon-bofang")
let word = ref<HTMLDivElement | null>()
const audio = ref<HTMLAudioElement | null>();
let word_value: ComputedRef<String>
let word_symobl: Ref<String> = ref("")
let word_pronun_ref:Ref<String>=ref("")
let word_property: Ref<String> = ref("")
let sub_dict:ComputedRef<String>
//* methods


const requestWord = (word: String) => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}\?key\=acab3f0a-f181-49df-82b1-8dce68443227`).then((val) => {
        val.json().then((v) => {
            let data: dict = v[0]
            console.log(data.hwi.prs)
            word_pronun_ref.value=data.hwi.prs[0].sound.audio
            word_symobl.value = data.hwi.prs[0].mw
            word_property.value = data.fl
        })
    })
}


const dealWithAudio = () => {
    audio.value!.onplay = () => {
        state.value = "icon-zanting"
    }
    audio.value!.onended = () => {
        state.value = "icon-bofang"
    }
}
const playAudio = () => {
    audio.value!.play()
    state.value = "icon-zanting"
}
sub_dict=computed(()=>{

  let rule=/^[_][0-9]/
  if(rule.test(word_pronun_ref.value as string)){
      return "number"
  }
  else{
      return word_pronun_ref.value[0]
  }
})
word_value = computed(() => {
        if (word.value == null) return "error"
        return word.value!.innerText.toLowerCase()
    })
onMounted(() => {
    dealWithAudio()
    requestWord(word_value.value)
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

        .button {
            cursor: pointer;
            display: flex;
            padding: 5px;
        }
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
            margin-right: 20px;
        }
    }
}
</style>