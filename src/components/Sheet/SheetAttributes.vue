<script lang="ts" setup>
import { ref } from 'vue';


defineProps<{
    attributes: any,
}>();

function teste () {
  console.log("Teste")
}

let points = ref(20);


</script>

<template>
  <div class="flex justify-content-center mt-2">
    <Card class="w-10">
      <template #title> 
          <div class="flex justify-content-between align-content-center">
              <span>Atributos</span>
              <span>Pontos : {{ points }}</span>
          </div>
      </template>
      <template #content>
        <div class="flex flex-wrap justify-content-center" >
          <Fieldset legend="Força" class="w-12rem text-center h-8rem bg-red-700">
            <div class="text-xl">   
              <InputNumber 
                v-model="attributes.force" 
                showButtons 
                buttonLayout="horizontal"                
                inputClass="w-3rem h-3rem text-center border-none border-top-1 border-bottom-1 border-red-900 bg-red-700"
                decrementButtonClass="w-2rem bg-red-800 border-none border-top-1 border-bottom-1 border-left-1 border-red-900 text-white" 
                incrementButtonClass="w-2rem bg-red-800 border-none border-top-1 border-bottom-1 border-right-1 border-red-900 text-white" 
                incrementButtonIcon="pi pi-plus" 
                decrementButtonIcon="pi pi-minus"
                @input="teste()"
              />
            </div>
          </Fieldset>
          <Fieldset legend="Destreza" class="w-12rem text-center h-8rem bg-green-700">
            <div class="text-xl">    
              <InputNumber 
                v-model="attributes.dexterity" 
                showButtons 
                buttonLayout="horizontal"                
                inputClass="w-3rem h-3rem text-center border-none border-top-1 border-bottom-1 border-green-900 bg-green-700"
                decrementButtonClass="w-2rem bg-green-800 border-none border-top-1 border-bottom-1 border-left-1 border-green-900 text-white" 
                incrementButtonClass="w-2rem bg-green-800 border-none border-top-1 border-bottom-1 border-right-1 border-green-900 text-white" 
                incrementButtonIcon="pi pi-plus" 
                decrementButtonIcon="pi pi-minus"
                @input="teste()"
              />
            </div>
          </Fieldset>
          <Fieldset legend="Constituição" class="w-12rem text-center h-8rem bg-yellow-700">
            <div class="text-xl">    
              <InputNumber 
                v-model="attributes.constitution" 
                showButtons 
                buttonLayout="horizontal"                
                inputClass="w-3rem h-3rem text-center border-none border-top-1 border-bottom-1 border-yellow-900 bg-yellow-700"
                decrementButtonClass="w-2rem bg-yellow-800 border-none border-top-1 border-bottom-1 border-left-1 border-yellow-900 text-white" 
                incrementButtonClass="w-2rem bg-yellow-800 border-none border-top-1 border-bottom-1 border-right-1 border-yellow-900 text-white" 
                incrementButtonIcon="pi pi-plus" 
                decrementButtonIcon="pi pi-minus"
                @input="teste()"
              />
            </div>
          </Fieldset>
          <Fieldset legend="Inteligencia" class="w-12rem text-center h-8rem bg-blue-700">
            <div class="text-xl">    
              <InputNumber 
                v-model="attributes.intelligence" 
                showButtons 
                buttonLayout="horizontal"                
                inputClass="w-3rem h-3rem text-center border-none border-top-1 border-bottom-1 border-blue-900 bg-blue-700"
                decrementButtonClass="w-2rem bg-blue-800 border-none border-top-1 border-bottom-1 border-left-1 border-blue-900 text-white" 
                incrementButtonClass="w-2rem bg-blue-800 border-none border-top-1 border-bottom-1 border-right-1 border-blue-900 text-white" 
                incrementButtonIcon="pi pi-plus" 
                decrementButtonIcon="pi pi-minus"
                @input="teste()"
              />
            </div>
          </Fieldset>
          <Fieldset legend="Sabedoria" class="w-12rem text-center h-8rem bg-orange-700">
            <div class="text-xl">    
              <InputNumber 
                v-model="attributes.wisdom" 
                showButtons 
                buttonLayout="horizontal"                
                inputClass="w-3rem h-3rem text-center border-none border-top-1 border-bottom-1 border-orange-900 bg-orange-700"
                decrementButtonClass="w-2rem bg-orange-800 border-none border-top-1 border-bottom-1 border-left-1 border-orange-900 text-white" 
                incrementButtonClass="w-2rem bg-orange-800 border-none border-top-1 border-bottom-1 border-right-1 border-orange-900 text-white" 
                incrementButtonIcon="pi pi-plus" 
                decrementButtonIcon="pi pi-minus"
                @input="teste()"
              />
            </div>
          </Fieldset>
          <Fieldset legend="Carisma" class="w-12rem text-center h-8rem bg-purple-700">
            <div class="text-xl">    
              <InputNumber 
                v-model="attributes.wisdom" 
                showButtons 
                buttonLayout="horizontal"                
                inputClass="w-3rem h-3rem text-center border-none border-top-1 border-bottom-1 border-purple-900 bg-purple-700"
                decrementButtonClass="w-2rem bg-purple-800 border-none border-top-1 border-bottom-1 border-left-1 border-purple-900 text-white" 
                incrementButtonClass="w-2rem bg-purple-800 border-none border-top-1 border-bottom-1 border-right-1 border-purple-900 text-white" 
                incrementButtonIcon="pi pi-plus" 
                decrementButtonIcon="pi pi-minus"
                @input="teste()"
              />
            </div>
          </Fieldset>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>

:deep(.p-fieldset .p-fieldset-content) {
  padding: 0px !important;
}
:deep(.p-inputtext:enabled:focus) {
  box-shadow: 0 0 0 0px;
}
</style>
