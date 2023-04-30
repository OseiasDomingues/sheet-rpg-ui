import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './routes/router'

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
import Menubar from 'primevue/menubar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toolbar from 'primevue/toolbar';

import "primevue/resources/themes/soho-dark/theme.css"
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


const app = createApp(App);

app.use(PrimeVue);
app.use(router)

app.component('Button',Button);
app.component('InputText',InputText);
app.component('InputNumber',InputNumber);
app.component('Card',Card);
app.component('Fieldset',Fieldset);
app.component('Menubar',Menubar);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('Toolbar',Toolbar);

app.mount('#app')
