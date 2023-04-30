<script lang="ts" setup>
import { ref } from 'vue';

const items = ref([
  {
    label : 'fichas',
    to : "/list"
  }
]);

</script>

<template>
    <div class="card relative z-2">
        <Menubar class="p-shadow-2" :model="items"> 
        </Menubar>    
    </div>
    <router-view></router-view>
</template>

<style>

</style>