import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'



const Home = () =>{
  return(


    <div>
    <header className="container-fulid "id='header'>
    <h1 className="logo me-auto">Cyzplamovir</h1>
  </header>
  <section className="container banner">
  </section>
  <section className="container faq ">
  <h1 className="h">Get Back to Living</h1>
  <p className='p faq-list'>Cyzplamovir should be available to everyone who needs it. Can't afford it? Enroll here to see if we can help.</p>
  </section>
  <section className="container com" >
    <div className="row pg content">
    <div className="col-lg-7 from">
      <div className="row cor ">
        <div className="col-lg-6 ">
          <input type="text" name="" placeholder="First name" className="cov"/>
        </div>
        <div className="col-lg-6 ">
          <input type="text" name="" placeholder="Last name" className="cov"/>
        </div>
      </div>
      <div className="row cor">
        <div className="col-lg-12 ">
          <input type="text" name="" placeholder="Address1" className="cov"  style={{paddingLeft: "25px"}}/>
        </div>
      </div>
      <div className="row cor">
        <div className="col-lg-12 ">
          <input type="text" name="" placeholder="Address1" className="cov"  style={{paddingLeft: "25px"}}/>
        </div>
      </div>
      <div className="row cor">
        <div className="col-lg-5 ">
          <input type="text" name="" placeholder="City" className="cov"/>
        </div>
        <div className="col-lg-2 ">
        <select class="cov select" >
        <option className='se'>State </option>
        <option value="odisha">Odisha</option>
        <option value="mp">Maharastra</option>
        <option value="pj">Punjab</option>
        <option value="bi">Bihar</option>
        
      </select>
        </div>
        <div className="col-lg-5 ">
          <input type="text" name="" placeholder="Zipcode" className="cov"/>
        </div>
      </div>
      <div className="row cor">
        <div className="col-lg-12">
          <input type="text" name="" placeholder="Email" className="cov" style={{paddingleft: "25px"}}/>
        </div>
        
      </div>
    </div>
    <div className="col-lg-5 enroll">
      <div className="row com " style={{marginLeft :"100px" }}>
        <div className="col-lg-2">
          <i className="fa fa-lock in" style={{fontSize:"46px", width: "20px"}}></i>
        </div>
        <div className="col-lg-10 pt">
           <Link to="/enrollment" style={{textDecoration:"none"}}><div className="en"><center style={{paddingTop: "10px"}}>Enroll</center></div></Link>
           <p  className="con">Questions ? <a href="#"  style={{textDecoration:"none"}}>Talk with us</a></p>
           <hr className="one"></hr>
        </div>
      </div>
     </div>
  </div>
  </section>
  </div>



  )
}
export default Home