<script lang="ts" setup>
import SheetAttributes from './SheetAttributes.vue'
import SheetHeader from './SheetHeader.vue'
import api from '../../services/api'
import { reactive,onMounted } from 'vue';
import { useRoute } from 'vue-router';


let sheet = reactive({
    attributes : {
        force : 0,
        dexterity : 0,
        constitution : 0,
        intelligence : 0,
        wisdom : 0,
        charisma : 0
    },
}) 

let update = false;

onMounted(() => {
    const route = useRoute();
    if(route.params.id === '0'){
        console.log("Cria")
    }else{
        update = true;
        populeSheet(route.params.id);
    }
})

function populeSheet(id : any){
    api.getSheetsById(id).then((res : any) => {
        sheet = res.data
    })
}      
</script>

<template>
    <SheetHeader :sheet="sheet" :update="update"/>
    <SheetAttributes :attributes="sheet.attributes"/>
</template>

<style>

</style>