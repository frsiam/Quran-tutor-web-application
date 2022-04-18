import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5 position-relative min-vh-100'>
            <article>
                <h2 className='h3'><span className='text-danger'>Question :</span> The difference between authentication and authirization</h2>
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
                    <li>Authorization isn't visible to or changeable by the user.</li>
                    <li>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</li>
                </ul>
            </article>
            <article className='my-5'>
                <h2 className='h3'><span className='text-danger'>Question :</span>  Why are you using firebase? What other options do you have to implement authentication?</h2>

                <p><span className='text-primary h3'> Answare: </span></p>

                <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.</p>
                <p>Firebase helps you build and run successful apps.Use Firebase products together to solve complex challenges and optimize your app experience. Personalize your onboarding flow, grow user engagement, or add new functionality with Firebase.</p>

                <p>Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.</p>
                <h5 className='text-primary'>Some benifites of use firebase</h5>
                <ul>
                    <li>Create Application without backend server</li>
                    <li>No need extra money spent for backend server</li>
                    <li>Sync real time data in the application</li>
                    <li>Quick display data in the application</li>
                    <li>Faster then any backend web services</li>
                    <li>No SQL database so it is more faster</li>
                    <li>You can provide any social networking login with very few lines code</li>
                </ul>
                <div>
                    <h5 className='text-primary my-2'>Alternative options of firebase</h5>
                    <p><span className='h6 fw-bold text-primary'>AWS Amplify : </span> AWS is a cloud platform by Amazon that provides a set of tools and services, which can be used on their own or together. Mobile and front-end developers can use AWS Amplify to build scalable full-stack apps powered by the platform.</p>
                    <p>You can configure app backends and within minutes connect your app, deploy static web apps in a matter of clicks, and manage app content outside of the console.</p>
                    <p>The platform supports React, JavaScript, Vue, Angular, Next.js, and other popular web frameworks. It also supports mobile platforms like Flutter, iOS, Android, Ionic, and React Native so you can get to market faster.</p>
                    <br />
                    <p><span className='h6 fw-bold text-primary'>Parse : </span> Parse is a complete open-source application stack and backend framework that offers a collection of tools and features to help you develop your apps.</p>
                    <p>The features include a spreadsheet-like database, dashboard, push notifications, APIs, object and file storage, user authentication, and more out of the box.</p>
                    <p>The software can be deployed to any infrastructure running Node.js, and uses MongoDB or PostgreSQL as a database, compared to Firebase, which only offers the NoSQL databases. You can also develop and test your app locally using Node.</p>
                    <p>Parse also offers cloud functions, email notifications, social login, GraphQL APIs, REST, and real-time notifications.</p>
                </div>
            </article>
            <article>
                <h2 className='h3'><span className='text-danger'>Question :</span> What other services does firebase provide other than authentication ?</h2>
                <p><span className='text-primary h3'> Answare: </span>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let's look at some of the services and use of it.</p>
                <h5>There are many services which Firebase provides, Most useful of them are:</h5>
                <ul>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Predictions</li>
                    <li>Google Analytics</li>
                    <li>Remote Config</li>
                </ul>
            </article>
        </div>
    );
};

export default Blogs;