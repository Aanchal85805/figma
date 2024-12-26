import React from 'react'

function login() {
  return (
      <div className='login-page'>
          <div className='container'>
            <div className='login-left'>
                  <p>Thanks for Making us the <br></br>no 1 e- commerce  focused<br></br> Technology Solution</p>
                  <div className='list'>
                      <ul>
                          <li>3500+ clients</li>
                          <li>260+ Integrations</li>
                          <li>931 Mn + Annual Transaction Run-Rate</li>
                          <li>8,800+ Warehouses Managed</li>
                          <li>3150+ Stores Managed</li>
                          <li>Present in 7 countries </li>
                          
                      </ul>

                  </div>
                  <h3>Trusted by Leading Brands & Marketplaces</h3>
            
                       
                  
         </div>
              <div className='login-right'>
                  <div className='logo'>
                      <div className='logo-img'>
                         
                      </div>
                      <div className='follow-us'>
                          <p>follow us</p>
                      </div>
                  </div>
                  <div className='form'>
                      <div className='form-heading'>
                         <h3>Login  to Zaroori retail</h3>
                          <p>Enter your details below</p>   
                       </div>
                      <div className='form-fields'>
                          <label className='label-email'>Email or Mobile</label> <br></br>
                          <input type='text' className='input-email' placeholder='Registered email or mobile' ></input><br></br>
                          <label className='label-pass'>Passwsord</label> <br></br>
                          <input type='text' className='input-pass' placeholder='Enter your password'></input><br></br>
                          <button className='login-btn'>login
                          </button>                         
                      
                      </div>
                 </div>
                  <div></div>
                 
            </div>        
        </div>
          
      </div>
  )
}

export default login
