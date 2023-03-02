import React, {useState} from 'react';

function Profile(props) {
    const [input, setInput] = useState('');
    let[eagerness, setEagerness] = useState('');

    const eagernessLevel = ['high', 'medium', 'low']

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!eagerness) {
            eagerness = 'low;'
        }

        props.onSubmit({
            id: Math.random(Math.floor() * 1000),
            text: input,
            eagerness: eagerness,
        });

        setInput('');
        setEagerness('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return !props.edit ? (
        <div>
            <form className='profile' onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Write down your profile"
                value={input}
                name="text"
                className="profile-input"
                onChange={handleChange}
                ></input>
                <div className="dropdown">
                    <button className={`dropbtn ${eagerness}`}>
                        {eagerness || 'Priority'}
                    </button>
                    <div className='dropdown-content'>
                        <p onClick={()=> setEagerness(eagernessLevel[0])}>1</p>
                        <p onClick={()=> setEagerness(eagernessLevel[1])}>2</p>
                        <p onClick={()=> setEagerness(eagernessLevel[2])}>3</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile;