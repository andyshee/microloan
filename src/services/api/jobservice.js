import api from './api'


export const postJob = (form) => {

    api.post('/post-job', form)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

    // for (var property in form) {
    //     formData.append(property, form[property]);
    // }
    // formData.append

    // api.post('/post-job', formData, { 'Content-Type': 'multipart/form-data' })
    //     .then(() => {
    //         console.log("Success");
    //     }).catch(err => {
    //         console.log(err);
    //     })

}



