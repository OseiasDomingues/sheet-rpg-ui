<script lang="ts" setup>
import { reactive, ref } from 'vue';
import api from '../../services/api'
import * as yup from "yup";
import { ValidationError } from 'yup';


const SchemaValidation = yup.object().shape({
  name: yup.string().required().max(3,"Muito Grande"),
  level: yup.string().required(),
});


let errors = reactive({ 
    name : '', 
    level : '' 
})
const props = defineProps<{
    sheet: any,
    update : any
}>();

function save(){
    if(props.update){
        api.update(props.sheet)
    }else{
        SchemaValidation.validate(props.sheet, { abortEarly: false })
            .then(() => {
                Object.assign(errors, { name : '',  level : ''});
            })
            .catch(err => {
                Object.assign(errors, { name : '',  level : ''});
                err.inner.forEach((error: ValidationError) => {
                    // @ts-ignore: Unreachable code error                   
                    errors[error.path as string] = error.message
                });    
            });
        //api.create(this.sheet)
    }
}

</script>

<template>
    <div class="flex justify-content-center mt-2">
        <Card class="w-10">
            <template #title> 
                <div class="flex justify-content-between align-content-center">
                    <span>Ficha Tormenta</span>
                    <Button @click="save()" rounded type="submit" class="mr-3" icon="pi pi-save" size="small" severity="info"></Button>
                </div>
            </template>
            <template #content>
                <form  class="flex flex-column gap-2" >
                    <div class="card flex flex-column md:flex-row gap-3">
                        <div class="p-inputgroup flex-1 flex-column">
                                <span class="p-float-label">
                                    <InputText 
                                        id="name" 
                                        v-model="sheet.name" 
                                        :class="{ 'p-invalid': errors.name }"/>
                                    <label for="name">Nome</label>
                                </span>
                                <small class="p-error" v-if="!!errors.name" id="text-error">{{ errors.name }}</small>
                        </div>
                        <div class="p-inputgroup flex-1 flex-column">
                                <span class="p-float-label">
                                    <InputText 
                                        id="level" 
                                        v-model="sheet.level" 
                                        :class="{ 'p-invalid': errors.level }"/>
                                    <label for="name">Nível</label>
                                </span>
                                <small class="p-error" v-if="!!errors.level" id="text-error">{{ errors.level }}</small>
                        </div>
                    </div>
                </form>
            </template>
        </Card>
    </div>
</template>



<style scoped>

</style>