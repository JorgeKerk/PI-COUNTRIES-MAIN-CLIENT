import './App.css'
import { Route, useLocation } from 'react-router-dom'
import { Landing, Home, Detail, Form, Error, DeleteActivity } from './views'
import { Background, NavBar } from './components'

function App() {
  const pathLocation = useLocation().pathname
  const location = pathLocation === '/home' 
                || pathLocation.startsWith( '/detail/') 
                || pathLocation === '/createActivity'
                || pathLocation === '/updateActivity'
                // || pathLocation === '/deleteActivity'

  return (
    <>
      <Background>
       {location &&  <NavBar />}
        <Route exact path='/' render= { ()=> <Landing /> } />
        <Route exact path='/home' render= { ()=> <Home /> } />
        <Route exact path='/detail/:idCountry' render= { ()=> <Detail /> } />
        <Route exact path='/createActivity' render= { ()=> <Form action= { 'Create' }/> } />
        <Route exact path='/updateActivity' render= { ()=> <Form action= { 'Update' }/> } />
        <Route exact path='/deleteActivity' render= { ()=> <DeleteActivity /> } />
        {/* If the path is not any of the above, it displays a 404 error */}
        { !location && pathLocation !== '/' && pathLocation !== '/deleteActivity' && 
          <Route path= '*' render= { ()=> <Error />} /> 
        }
      </Background>
    </>
  )
}

export default App
