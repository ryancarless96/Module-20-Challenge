import React, {useState, useSyncExternalStore} from 'react';
import Profile from './Profile';

function Contact(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        eagerness: '',
    });

    console.log(props.contact);
}