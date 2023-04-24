const Hello = (props) => {  
  return (
      <div> 
            <p>Hello {props.name}, you are {props.age} years old</p>    
      </div>  
  )
}

const App = () => {
  const nimi = 'Rick'
  const ika = "72"
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Morty" age={14} />
      <Hello name={nimi} age={ika}/>      
    </div>
  )
}



export default App