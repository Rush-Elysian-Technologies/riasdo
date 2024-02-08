import React from 'react'
import './Portfolio.css';
import Header from '../Header';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div>
      <div className='portfolioHome backgroundImg'>
      <Header/>
      </div>
      <div className='portfoliobody'>
        <p>Our  Portfolio</p>
      </div>
      <div className='portfoliobody1'>
      <div>
        <div className='portfoliochild1'>
          <div>
          <div className='portfoliochild21'>
             <h3>Asha & Ragha</h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>17.05.2009</p>
            <p>Daspalla,Vizag</p>
          </div>
          </div>
        </div>
        <div className='portfoliochild2'>
          <div>
        <div className='portfoliochild21'>
             <h3>Priya & Srinu </h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>07.08.2016</p>
            <p>NTR gardens,Vizag</p>
          </div>
          </div>
        </div>
        </div>
        <div>
        <div className='portfoliochild2'>
          <div>
        <div className='portfoliochild21'>
             <h3>Priya & Srinu </h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>07.08.2016</p>
            <p>NTR gardens,Vizag</p>
          </div>
          </div>
        </div>
        <div className='portfoliochild1'>
          <div>
          <div className='portfoliochild21'>
             <h3>Asha & Ragha</h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>17.05.2009</p>
            <p>Daspalla,Vizag</p>
          </div>
          </div>
        </div>
        </div>
        <div>
        <div className='portfoliochild1'>
          <div>
          <div className='portfoliochild21'>
             <h3>Asha & Ragha</h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>17.05.2009</p>
            <p>Daspalla,Vizag</p>
          </div>
          </div>
        </div>
        <div className='portfoliochild2'>
          <div>
        <div className='portfoliochild21'>
             <h3>Priya & Srinu </h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>07.08.2016</p>
            <p>NTR gardens,Vizag</p>
          </div>
          </div>
        </div>
        </div>
      </div>
      <div className='portfoliobody1'>
      <div>
        <div className='portfoliochild1'>
          <div>
          <div className='portfoliochild21'>
             <h3>Asha & Ragha</h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>17.05.2009</p>
            <p>Daspalla,Vizag</p>
          </div>
          </div>
        </div>
        <div className='portfoliochild2'>
          <div>
        <div className='portfoliochild21'>
             <h3>Priya & Srinu </h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>07.08.2016</p>
            <p>NTR gardens,Vizag</p>
          </div>
          </div>
        </div>
        </div>
        <div>
        <div className='portfoliochild2'>
          <div>
        <div className='portfoliochild21'>
             <h3>Priya & Srinu </h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>07.08.2016</p>
            <p>NTR gardens,Vizag</p>
          </div>
          </div>
        </div>
        <div className='portfoliochild1'>
          <div>
          <div className='portfoliochild21'>
             <h3>Asha & Ragha</h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>17.05.2009</p>
            <p>Daspalla,Vizag</p>
          </div>
          </div>
        </div>
        </div>
        <div>
        <div className='portfoliochild1'>
          <div>
          <div className='portfoliochild21'>
             <h3>Asha & Ragha</h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>17.05.2009</p>
            <p>Daspalla,Vizag</p>
          </div>
          </div>
        </div>
        <div className='portfoliochild2'>
          <div>
        <div className='portfoliochild21'>
             <h3>Priya & Srinu </h3>
             <hr></hr>
          </div>
          <div className='portfoliochild22'>
            <p>07.08.2016</p>
            <p>NTR gardens,Vizag</p>
          </div>
          </div>
        </div>
        </div>
      </div>
      <div class="button">
       <Link className="button1" to="#">View more</Link>
      </div>
    </div>
  )
}

export default Portfolio