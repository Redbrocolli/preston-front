import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_URL = `${BASE_URL}api/`

console.log(API_URL)

const send_email = (name, email, subject, message) => {
    return axios.post(API_URL + `users/contact`, {
        name,
        email,
        subject,
        message
    });
};

const EmailService = {
    send_email,
}


export default EmailService;