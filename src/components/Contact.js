import React, {useState, useSyncExternalStore} from 'react';
import Profile from './Profile';

function Contact(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        eagerness: '',
    });

    console.log(props.contact);

    const submitUpdate = (value)=> {
        props.editContactItem(edit.id, value);
        setEdit({ id: null, value: '', eagerness: ''});
    };

    if(edit.id) {
        return <Profile edit={edit} onSubmit = {submitUpdate}/>
    }

    return props.contact.map((item,i)=> (
        <div>
            className={
                item.isComplete
                ? `contact-row complete ${item.eagerness}`
                : `contact-row ${item.eagerness}`
            }
            key ={i}
            
        </div>
    ))
}

export default Contact;