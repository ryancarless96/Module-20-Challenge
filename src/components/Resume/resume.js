import React from 'react';

function Resume() {
    return (
        <section className="my-5">
            <div className="my-2">
                <p>
                    Links to my <a href="https://www.linkedin.com/in/ryan-carless-0a5a98165/">Resume!</a>
                </p>
                <h3> Front-End </h3>
                <ul className="skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3> Back-End </h3>
                <ul className="skills">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;