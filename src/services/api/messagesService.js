import api from './api';

export const sendMessage = (msg) => {
    api.post('/send-message', {
        message: msg,
    })
}
