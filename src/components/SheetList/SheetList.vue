<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted, reactive } from 'vue'
import api from '../../services/api'

const columns = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'pv', header: 'pv' },
    { field: 'pm', header: 'pm' },
]
let sheetList : any = reactive([]);

onMounted(() =>{
    populeAttr();
})

function populeAttr(){
    api.getSheets().then((res : any) => {
        sheetList = res.data;
    })
}

function click(str : any ){
    const router = useRouter();
    router.push({
        name: 'New',
        params: { id : str.id}
    });
}

</script>

<template>
    <Toolbar class="mt-2 mb-2 p-3">
        <template #start>
            <span class="text-2xl">Lista de Fichas</span>
        </template>
        <template #end>
            <Button severity="info" rounded v-on:click="$router.push('/new/0')" icon="pi pi-plus"></Button>
        </template>
    </Toolbar>
    <DataTable :value="sheetList" tableStyle="min-width: 50rem" @row-click="click($event.data)">
        <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" />
    </DataTable>
</template>

<style>

</style>