<template>
    <div id="jsmind_container"></div>
</template>

<script lang="ts" setup>
//@ts-ignore
import jsMind from "jsmind"

import { onMounted } from "vue";

function load_jsmind() {
    var mind = {
        "meta": {
            "name": "demo",
            "author": "mikeedu",
            "version": "0.2",

        },
        "format": "node_array",
        "data": [
            { "id": "root", "isroot": true, "topic": "jsMind" },

            { "id": "sub1", "parentid": "root", "topic": "sub1", },
            { "id": "sub11", "parentid": "sub1", "topic": "sub11" },
            { "id": "sub12", "parentid": "sub1", "topic": "sub12" },
            { "id": "sub13", "parentid": "sub1", "topic": "sub13" },

            { "id": "sub2", "parentid": "root", "topic": "sub2" },
            { "id": "sub21", "parentid": "sub2", "topic": "sub21" },
            { "id": "sub22", "parentid": "sub2", "topic": "sub22", },

            { "id": "sub3", "parentid": "root", "topic": "sub3" },
        ]
    };
    var options = {
        container: 'jsmind_container',
        editable: true,
        "theme": "asphalt"
    }
    var jm = jsMind.show(options, mind);

}


onMounted(() => {
    load_jsmind();


})
</script>

<style lang="scss" scoped>
#jsmind_container {
    max-width: 800px;
    height: 500px;
    border: solid 1px #ccc;
    background: #f4f4f4;
}
</style>