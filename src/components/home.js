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
       
    }
    
    
    
    return(
        <div >
        
            <div  className='container '>
        <section className='jumbotron text-center' style = { sample }>
            <h1 className ='mb-5'>Hi im John paul Torrecarion,</h1>
            <img src={ require('./jp.png') } alt = 'profile' style = { img }/>
        <p className = 'mt-4'>I love access commodo amet, aut magna qui amet.

        Ingeniis imitarentur in consequat, dolor comprehenderit litteris quid excepteur.

        Eiusmod ubi legam deserunt si minim cohaerescant officia magna fabulas.

        De ea duis tamen quis, te fugiat cillum nam mentitum.

        E id dolore malis quorum ubi laborum id quamquam.</p>
        </section>
        <div className='row' style = {b}>
        <section className ='col-md-6'>
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
        
        <section className='col-md-6'>
            
            <h1 id='compSmall'>Computer Troubleshooting</h1>
        
        <p>Nam a malis aute aute si doctrina amet irure mandaremus lorem.

        Singulis quid cernantur laborum de aut varias graviterque.

        Singulis quis varias fabulas elit, te summis laboris cernantur.

        Iis ita minim cillum ipsum, quo esse possumus.

        Anim exquisitaque pariatur lorem laborum non in possumus exercitation.</p>
        </section>
        </div>



        <div className='row mt-5' style = {b}>
        

        
        <section className='col-md-6' id='appSmall'>
            
            <h1 >Aplication Development</h1>
        
        <p>Nam a malis aute aute si doctrina amet irure mandaremus lorem.

        Singulis quid cernantur laborum de aut varias graviterque.

        Singulis quis varias fabulas elit, te summis laboris cernantur.

        Iis ita minim cillum ipsum, quo esse possumus.

        Anim exquisitaque pariatur lorem laborum non in possumus exercitation.</p>
        </section>

<section className ='col-md-6 ' >
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    
  </ol>
  <div className="carousel-inner" role="listbox" style = { shadow }>
    <div className="carousel-item active" >
      <img className="d-block w-100" src={ require('./backend.jpg') } data-src="holder.js/900x400?theme=social" alt="900x400" data-holder-rendered="true" style={a} />
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
        </div>

   
            </div>
 <footer className='app-footer mpr'>
    
    <p className='text-center'> &copy; Christian Jerr | Design 2019 </p>     
    </footer>
        </div>
        
    )
}
export default home