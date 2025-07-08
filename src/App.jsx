import { useState } from 'react'
import './App.css'
import Button from './components/Ui/atoms/Button/Button'
import Layout from './components/Parsial/Layout'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Routesc from './components/Pages/Routesc'
import HomePage from './components/Pages/Home-page/Home-Page'
function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>

    </>
  )
}

export default App
