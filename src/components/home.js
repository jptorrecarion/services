import React from 'react';
import burial from './kalapati.jpg'

const home = () =>{
    let a = {
        width : '900px',
        height : '400px',
        boxShadow : '5px 5px 5px black'
    };
    let b = {
        background : 'linear-gradient(to bottom , white , #f1f1f1)',
        padding :'25px' ,
        
    };
    let shadow = {
        boxShadow : '3px 3px 3px black'
    };
    
    let img = {
        height:  '200px',
        width : '200px',
        borderRadius : '100px',
        boxShadow : '0px 0px 30px black'
        
    }
    
    let sample = {
        color : 'white',
        backgroundImage: `url(${burial})` ,
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        backgroundAttachment : 'fixed',
        textShadow : '1px 1px 10px black',
        height : '80vh'
       
    }
    
    
    
    return(
        <div >
        
            <div  className='container '>
        <section className='jumbotron ' style = { sample }>
            <h1 className ='mb-5' id='add'>Hi im John paul Torrecarion,</h1>
            
        <p className = 'mt-4'>Hi welcome to my site im John Paul, I am graduate of Bachelor of Science in Information Technology, I am passionate about backend development and computer troubleshooting.   </p>
        
<a className='btn btn-dark text-light' href={ require('./jp.docx') }>Download resume</a> <a className='btn btn-dark text-light' href='#see'>See more</a>
        </section>      
        
    <br />
    <br />
    <br />
        <div className='row ' style = {b}>
        <section className ='col-md-6 '>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner" role="listbox" style = { shadow } >
    <div className="carousel-item active" >
      <img className="d-block w-100" src={ require('./tech.jpg') } data-src="holder.js/900x400?theme=social" alt="900x400" data-holder-rendered="true" style={a} />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={ require('./techTwo.jpg') } data-src="holder.js/900x400?theme=industrial" alt="900x400" data-holder-rendered="true" style={a} />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </section>
        
        <section className='col-md-6' id='see'>
            
            <h1 id='compSmall'>Computer Troubleshooting</h1>
        
        <p className='text-justify'>Troubleshooting is the process or identifying and fixing problems. Computer troubleshooting may involve hardware or software and can sometimes involve both at the same time. The basic process of troubleshooting is to check the most general possible problems first, and then gradually check for more specific problems.</p>
        </section>
        </div>



        <div className='row mt-5' style = {b}>
        

        
        <section className='col-md-6' id='appSmall'>
            
            <h1 >Aplication Development</h1>
        
        <p className='text-justify'>Application development is the process of creating a computer program or a set of programs to perform the different tasks that a business requires. From calculating monthly expenses to scheduling sales reports, applications help businesses automate processes and increase efficiency.</p>
        </section>

<section className ='col-md-6 ' >
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  
  <div className="carousel-inner" role="listbox" style = { shadow }>
    <div className="carousel-item active" >
      <img className="d-block w-100" src={ require('./backend.jpg') } data-src="holder.js/900x400?theme=social" alt="900x400" data-holder-rendered="true" style={a} />
    </div>
    
  </div>
  
</div>
        </section>
        </div>

   
            </div>
 <footer className='app-footer mpr'>
    
   <a href='https://christianjerr.github.io'  className='text-center float-right text-light btn btn-success'> &copy; Christian Jerr | Design 2019 </a>   
    </footer>
        </div>
        
    )
}
export default home