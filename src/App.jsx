import React, { useEffect, useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   
<>
      <div id='navbar'>
        <div><img src="https://ld-wp73.template-help.com/buildwall/v5/default/wp-content/uploads/2019/09/logo.png" alt="" srcSet="" /></div>
        <div id='navbar2'>
          <div className="navs">
            <div><i className="fa-regular fa-clock fa-xl navicon "></i></div>
            <div>
            <b>WORKING TIME </b><br/>
           <span className='s1'> MON–SAT: 08:00–18:00</span>
            </div>
          </div>
          <div className="navs">
            <div>
            <i class="fa-solid fa-phone fa-xl"></i>
            </div>
            <div>
           <b> CUSTOM SUPPORT & SALE </b><br />
            <span className='s1'>+7-495-1234567</span>
            </div>
          </div>
          <div className="navs">
            <div>
            <Button variant="warning"><b><i class="fa-regular fa-envelope"></i>&nbsp;&nbsp;REQUEST A QUOTE</b></Button>{' '}          </div>
            <div></div>
          </div>
        </div>
        
      </div>
      <div className="App" style={{ overflowX: 'hidden' }}>
        <div className="parallax-bg" style={{ backgroundPositionY: `${-scrollY * 0.5}px` }}>
          <h1 id='homehead'>WE WILL BE <span style={{color:"red"}}>HAPPY</span> TO TAKE <span style={{color:"red"}}>CARE</span> OF YOUR WORK</h1>
          <div>
          <Button variant="warning">OUR SERVICES</Button>{' '}
          <Button variant="light">ABOUT US</Button>{' '}
          </div>
          
        </div>
      </div>
      <div id='whitepart'>

        <div  className='whitein'>
        <i class="fa-regular fa-building fa-2xl wicons"></i>
        <div >
          <span style={{fontSize:'40px'}}><b>345</b> </span><br />
          PROJECTS
        </div>
        </div>

        <div className='whitein'>
        <i class="fa-solid fa-person fa-2xl wicons"></i>
       <div>
       <span style={{fontSize:'40px'}}><b>745</b> </span> <br />
          HAPPY CLIENTS
       </div>
        </div>

        <div className='whitein'>
        <i class="fa-solid fa-award fa-2xl wicons"></i>       
        <div>
        <span style={{fontSize:'40px'}}><b>1278</b> </span> <br />
          QUALIFIED STAFF
        </div>
        </div>

        <div className='whitein'>
        <i class="fa-brands fa-cc-jcb fa-2xl wicons" ></i>
        <div>
        <span style={{fontSize:'40px'}}><b>3778</b> </span> <br />
          MACHINERIES
        </div>
        </div>

      </div>

      <div id='aboutour'>

      <Card style={{ width: '17rem',borderColor:"white",borderRadius:"0px",height:"450px"  }}>
      <Card.Img style={{borderRadius:"0px"}} variant="top" src="https://ld-wp73.template-help.com/buildwall/v5/default/wp-content/uploads/2019/07/home-box-image-1.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:"30px"}}>Construction</Card.Title>
        <Card.Text style={{fontSize:"small",marginTop:"20px"}}>
        We specialize in all kinds of construction works. Our certified team provides services in time and on the highest level.
        </Card.Text>
        <Button style={{borderRadius:"0px"}} variant="warning">Learn More</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '17rem',borderColor:"white",borderRadius:"0px" ,height:"450px" }}>
      <Card.Img style={{borderRadius:"0px"}} variant="top" src="https://ld-wp73.template-help.com/buildwall/v5/default/wp-content/uploads/2019/07/home-box-image-2.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:"30px"}}>About Us</Card.Title>
        <Card.Text style={{fontSize:"small",marginTop:"20px"}}>
        Buildwall is completely client-oriented company. We are able meet schedule deadlines with top quality.
        </Card.Text>
        <Button style={{borderRadius:"0px"}} variant="warning">Learn More</Button>
      </Card.Body>
    </Card>

    <Card  style={{ width: '17rem',borderColor:"white",borderRadius:"0px",height:"450px" }}>
      <Card.Img style={{borderRadius:"0px"}} variant="top" src="https://ld-wp73.template-help.com/buildwall/v5/default/wp-content/uploads/2019/07/home-box-image-3.jpg" />
      <Card.Body>
        <Card.Title  style={{fontSize:"30px"}}>Teamwork</Card.Title>
        <Card.Text style={{fontSize:"small",marginTop:"20px"}}>
        We have a very good team-based and teamwork attitude, working together to find the best solutions.
        </Card.Text>
        <Button style={{borderRadius:"0px"}} variant="warning">Learn More</Button>
      </Card.Body>
    </Card>

      </div>
      <div id='yellowpart'>
        <h1>We Are Buildwall</h1>
        <p>We have been transforming the ideas and visions into award-winning projects.</p>
        <Button style={{borderRadius:"0px"}} variant="light"><b><i class="fa-regular fa-envelope"></i>&nbsp;&nbsp;REQUEST A QUOTE</b></Button>{' '}          

      </div>
      <div id='slidepage' >
<h5 style={{textAlign:"center",marginTop:"30px"}}>  What We Do?</h5>
<h2 style={{textAlign:"center"}}>Exclusive Service</h2>
<p style={{textAlign:"center",color:"grey",marginBottom:"30px"}}>We provide all kinds of construction and building services and we are always glad to resolve nonstandard and unique tasks. We always take challenges and bring them to a conclusion.</p>
         
         <div id='sliders'>
  
          <div className='slide'>
            <img src="https://ld-wp73.template-help.com/buildwall/v5/default/wp-content/uploads/2019/07/home-box-image-1.jpg" alt="" srcSet="" />
            <div className='slidein'>
            <i class="fa-solid fa-person fa-xl slicons"></i>
            <h5>Construction</h5>
            <p>We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.</p>
  
            </div>
          </div>
  
          <div className='slide'>
            <img src="https://ld-wp73.template-help.com/buildwall/v5/default/wp-content/uploads/2017/12/image74-570x428.jpg" alt="" srcSet="" />
            <div className='slidein'>
            <i class="fa-solid fa-trowel fa-xl slicons"></i>          
            <h5>Home renovation</h5>
            <p>We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.</p>
  
            </div>
          </div>
  
          <div className='slide'>
            <img src="https://themewagon.github.io/builerz/img/blog-3.jpg" alt="" srcSet="" />
            <div className='slidein'>
            <i class="fa-solid fa-person-digging fa-xl slicons"></i>          <h5>Arthitechture and Building</h5>
            <p>We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.</p>
  
            </div>
          </div>
  
          <div className='slide'>
            <img src="https://ld-wp73.template-help.com/buildwall/v5/default/wp-content/uploads/2017/12/image90-570x428.jpg" alt="" srcSet="" />
            <div className='slidein'>
            <i class="fa-solid fa-pen-ruler fa-xl slicons"></i>          <h5>Interior Designing</h5>
            <p>We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.</p>
  
            </div>
          </div>
  
          <div className='slide'>
            <img src="https://themewagon.github.io/builerz/img/service-1.jpg" alt="" srcSet="" />
            <div className='slidein'>
            <i class="fa-solid fa-house-chimney fa-xl slicons"></i>          <h5>Buliding Engineering</h5>
            <p>We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.</p>
  
            </div>
          </div>
  
          <div className='slide'>
            <img src="https://themewagon.github.io/builerz/img/service-3.jpg" alt="" srcSet="" />
            <div className='slidein'>
            <i class="fa-solid fa-ruler-vertical fa-xl slicons"></i>          <h5>Preconstruction planning</h5>
            <p>We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.</p>
  
            </div>
          </div>
  
         </div>
      </div>
      <div id='carouselapge'>
        
      <Carousel style={{width:"100%",height:"100%",overflowX:'hidden',overflowY:"hidden"}} data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 cci"
          src="https://themewagon.github.io/builerz/img/carousel-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='cch5'>We Are Trusted</h5>
          <p className='ccp'>For Your Dream Home</p>
          <button className='quote'>Get A Quote</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cci"
          src="https://themewagon.github.io/builerz/img/carousel-3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='cch5'>We Are Professional</h5>
          <p className='ccp'>For Your Dream Project</p>
          <button className='quote'>Get A Quote</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cci"
          src="https://themewagon.github.io/builerz/img/carousel-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='cch5'>Professional Builder</h5>
          <p className='ccp'>
           We Build Your Home
          </p>
          <button className='quote'>Get A Quote</button>

        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

      </div>
      <div id='yellowpart'>
        <h1>We Are Buildwall</h1>
        <p>We have been transforming the ideas and visions into award-winning projects.</p>
        <Button style={{borderRadius:"0px"}} variant="light"><b><i class="fa-regular fa-envelope"></i>&nbsp;&nbsp;REQUEST A QUOTE</b></Button>{' '}          

      </div>
   <div id='fout'>
        <div id='footer'>
          <div className="footin4">
            <h5>About Company</h5>
            <p style={{textAlign:"justify"}}>Buildwall is a diversified construction company, made up of teams of people who are proven in their industries. All working to design, build, transport, operate, and maintain projects all over the USA.</p>
          </div>
          <div className="footin4">
            <h5 id='infohead'>Information</h5>
            <ul id='list'>
              <li>Carrer</li>
              <li>Certifications</li>
              <li>Company History</li>
              <li>FAQ</li>
              <li>Our Services</li>
            </ul>
          </div>
          <div className="footin4"><h5>Contact Info</h5>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-regular fa-envelope"></i>
          <i class="fa-solid fa-location-dot"></i>
          <br />
          <br />
          <label htmlFor=""> Search <input type="text" placeholder='Type Here' /></label>
          </div>
        </div>
   </div>
</>
  );
}

export default App;
