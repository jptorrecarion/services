import React from 'react';

const about = ({ demo }) =>{
     let img = {
        height:  '200px',
        width : '200px',
        borderRadius : '100px',
    
       
        
    }
    return(
        <div className='container mt-5 text-center'>
        <img src={ require('./jp.png') } alt = 'profile' style = { img }/>
            
            <h3 className='mt-4'>John Paul Torrecarion</h3>
            
           
        <hr/>
        <p>I am a graduate of Bachelor of Information Technology at Access Computer College, I am passionate about computer hardware troubleshooting and application development. </p>
        <a className='btn btn-primary text-light' href={ require('./jp.docx') } >Download resume</a>
        </div>
    )
}
export default about