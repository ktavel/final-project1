import React, {useState} from 'react'
import axios from 'axios'

function App() {

// const url =`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=63e110448163a215469e51062fdb3b64`

  return (
    <div className='app'>
      <div className='contianter'>
        <div className='top'>
        <div className='location'>
          <p>Birmingham</p>
          </div>
          <div className='temp'>
            <h1>65 degrees Farenheit</h1>
            </div>
              <div className='description'>
                <p>Cloudy</p>
                </div>
                  </div>
                  <div className='bottom'>
                    <div className='feels'>
                      <p>60 degrees Farenheit</p>
                      </div>
                      <div className='humidity'>
                        <p>10%</p>
                        </div>
                        <div className='wind'>
                          8 MPH
                        </div>
                  </div>
               </div>
             </div>
    
  );
}

export default App;
