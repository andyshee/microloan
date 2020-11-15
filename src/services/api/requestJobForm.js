import api from './api'


 export const requestJobForm = (form) => {

    
    api.post('/request-job-form', form)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
    

}
