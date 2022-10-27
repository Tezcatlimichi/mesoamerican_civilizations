

const CivilizationForm = (props) =>{



  
  return(
    <div>
      <h1>Add a new civilization</h1>
      <form onSubmit={props.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" value={props.formState.name} onChange={props.handleChange} />
      <label htmlFor="image">Image</label>
      <input id="image" value={props.formState.image} onChange={props.handleChange}/>
      <label htmlFor="description">Description</label>
      <input id="description"  value={props.formState.description} onChange={props.handleChange} />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default CivilizationForm