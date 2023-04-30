import axios from "axios"

const http = axios.create({
    baseURL: 'http://localhost:8081/api/'
})

export default{
    getSheets(){
        return http.get('allSheets')
    },
    getSheetsById(id){
        return http.get('getById/' + id)
    },
    update(sheet){
        return http.post('update',sheet)
    },
    create(sheet){
        return http.post('create',sheet)
    }
}