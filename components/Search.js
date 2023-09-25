import React from 'react'
import '../styles/search.css'

const Search = () => {
  return (
    <section id='search'>
      <strong>Explore Your Dream Place</strong>
      <h2>Find Your Dream Destination</h2>
      <p>Find Your Destination - The Ultimate Guide to Your Dream Destination</p>

      <form>

        <div className="box">
          <div className="icon">
            <i className='fa-solid fa-location-arrow'></i>
          </div>

          <div className="input">
            <label htmlFor="location">Location</label>
            <input type="text" id='location' placeholder='Where are you going?' required />
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <i className='fas fa-calendar-alt'></i>
          </div>

          <div className="input">
            <label htmlFor="checkin">Check in</label>
            <input type="date" id='checkin' required />
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <i className='fas fa-calendar-alt'></i>
          </div>

          <div className="input">
            <label htmlFor="checkout">Check out</label>
            <input type="date" id='checkout' required />
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <i className='fas fa-users'></i>
          </div>

          <div className="input">
            <label htmlFor="travels">Travels</label>
            <input type="text" id='travels' placeholder='8 Tourists' required />
          </div>
        </div>

        <button aria-label='search' title='search'>
          <i className='fas fa-search'></i>
        </button>

      </form>
    </section>
  )
}

export default Search
