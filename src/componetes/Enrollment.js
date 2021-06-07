import React from 'react'
import './style.css'



const Enrollment = () =>{

  return(
   <div>
   <header className="container-fulid "id='header'>
   <h1 className="logo me-auto">Cyzplamovir</h1>
 </header>
 <section className="container ">
 <h1 className="h "  >We'll be in touch!</h1>
 <p className='p ppp'>An agent will contact you at the address provided to collect further information.</p>
 
 </section>
 <section className="container vo " >
   <div className="row pg content plp">
   <div className="col-lg-5 from">
        <div className="row cor ">
            <div className="col-lg-6 " >
                <p><a href="" style={{textDecoration:"none",marginLeft:"-50px"}}>Clinical trial information</a></p>
                <hr className="tr"></hr>
            </div>
        </div>
         <div className="row cor ">
            <div className="col-lg-6 "style={{marginTop: "-8px"}}>
                <a href="" style={{textDecoration:"none",marginTop:"10",marginLeft:"-50px"}}>Dotctor's info pamphlet</a>
                <hr className="do"></hr>
            </div>
        </div>
         <div className="row cor ">
            <div className="col-lg-6 "style={{marginTop: "-8px"}}>
                <a href="" style={{textDecoration:"none",marginLeft:"-50px"}}>Legal disclosure information</a>
                <hr className="le"></hr>
            </div>
        </div>
   </div>
    <div className="col-lg-7 eimg" style={{width:"300px",marginRight:"-15PX"}}>   
    </div>
   </div>
 </section>
   </div>
);
}
export default Enrollment