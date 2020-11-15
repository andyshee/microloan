import api from './api'


 export const postJob = (form) => {

    api.post('/post-job', form)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))

}
