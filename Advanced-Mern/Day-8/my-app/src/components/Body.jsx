const Body= (props)=>{

    const name = "Malar";
  
    return(
      <div>
        <h1>Body Component</h1>
        <p>Name: {name}</p>
        <p>Age: {props.age}</p>
        <p>Dept: {props.dept}</p>
        <p>Email: {props.mail}</p>
        <p>Ph.No: {props.ph}</p>
      </div>
    )
  }

export default Body;