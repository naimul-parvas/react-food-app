

import './App.css'
import Pages from './components/Pages'
import { Route , Routes } from 'react-router-dom'
import Recipe from './components/Recipe'

function App() {
 

  return (
    
    <Routes>
      <Route path='/' element={ <Pages/>}/>
      <Route path='/:Mealid' element={<Recipe/>}/>

    </Routes>
   
  )
};

export default App
