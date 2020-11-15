import api from './api'


export const updateProfile = (form) => {

    api.post('/update-profile-form', form)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))

}