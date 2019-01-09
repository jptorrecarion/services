import React from 'react';

const about = () =>{
    return(
        <div className='container'>
        
            <h1>About</h1>
        <p>I am a graduate of Bachelor of Information Technology at Access Computer College, I am passionate about computer hardware troubleshooting and application development. </p>
        <a className='btn btn-success text-light' href={ require('./jp.docx') }>Download resume</a>
        </div>
    )
}
export default about