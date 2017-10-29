import Axios from 'axios';

export default {
    postContactForm: (name, email, subject, message) => {
        return Axios.post("/api-contact", {
            name: name,
            email: email,
            subject: subject,
            message: message
        }).then(function(response) {
            console.log(response.data);
            // return response.data;
        });
    }
};