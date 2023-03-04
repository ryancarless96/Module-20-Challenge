import React, {useState} from 'react';

import{validateEmail} from "../../utils/main";


function Contact(){
    const[formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const[errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            if(!isValid) {
                setErrorMessage("Your email doesn't work");
            } else {
                setErrorMessage
            }
        }
    }
}



export default Contact;