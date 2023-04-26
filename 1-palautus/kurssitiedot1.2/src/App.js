const Header = (props) => {  
  return (
      <div> 
            <h1>Half Stack application development</h1>    
      </div>  
  )
}

const Part  = (props) => {  
  return (
      <div> 
            <p>
              {props.text} {props.exercises} 
            </p>   
      </div>  
  )
}

const Content  = (props) => {  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
      <div> 
            <p>
              <Part text={part1} exercises={exercises1}/>
              <Part text={part2} exercises={exercises2}/>
              <Part text={part3} exercises={exercises3}/>
            </p>   
      </div>  
  )
}

const Total  = (props) => {  
  return (
      <div> 
            <p>
              {props.text} {props.count} 
            </p>   
      </div>  
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header/>
      <Content/>
      <Total text={"Number of exercises"} count={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App

