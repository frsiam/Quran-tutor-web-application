import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5 position-relative min-vh-100'>
            <article>
                <h2 className='h3'><span className='text-danger'>Question number-1 :</span> The difference between authentication and authirization</h2>
                <p><span className='text-primary h3'> Answare: </span>Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to</p>
                <h3 className='text-primary'>Authentication:</h3>
                <ul>
                    <li>Authentication verifies who the user is.</li>
                    <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                    <li>Authentication is the first step of a good identity and access management process.</li>
                    <li>Authentication is visible to and partially changeable by the user.</li>
                    <li>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</li>
                </ul>
                <h3 className='text-primary'>Authorization:</h3>
                <ul>
                    <li>Authorization determines what resources a user can access.</li>
                    <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                    <li>Authorization always takes place after authentication.</li>
                    <li>Authorization isn’t visible to or changeable by the user.</li>
                    <li>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</li>
                </ul>
            </article>
        </div>
    );
};

export default Blogs;