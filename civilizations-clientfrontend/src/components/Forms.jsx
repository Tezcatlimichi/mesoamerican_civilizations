import { useState, useEffect } from 'react'
import axios from 'axios'




const Forms = (props) =>{



  
  return(
    <div>
      <div className='civilization-form'>
      <h1>Add a new civilization</h1>
      <form onSubmit={props.handleSubmit} >
      <label htmlFor="name">Name</label>
      <input id="name" value={props.formState.name} onChange={props.handleChange} />
      <label htmlFor="image">Image</label>
      <input id="image" value={props.formState.image} onChange={props.handleChange}/>
      <label htmlFor="description">Description</label>
      <input id="description"  value={props.formState.description} onChange={props.handleChange} />
      <select id="country-select">
        <option > Country</option>
        <option></option>
      </select>
      <button type="submit">Submit</button>
    </form>
    </div>
    <div className='country-form'>
    <h1>Add a new country</h1>
      <form onSubmit={props.createCountry} >
      <label htmlFor="name">Name</label>
      <input id="name" value={props.countryForm.name} onChange={props.countryChange} />
      <label htmlFor="image">Image</label>
      <input id="image" value={props.countryForm.image} onChange={props.countryChange}/>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Forms