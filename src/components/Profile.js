import React, {useState} from 'react';

function ProfileForm(props) {
    const [input, setInput] = useState('');
    let[eagerness, setEagerness] = useState('');

    const eagernessLevel = ['high', 'medium', 'low']

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!eagerness) {
            eagerness = 'low;'
        }
    }
}