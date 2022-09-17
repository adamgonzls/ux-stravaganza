import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import Projects from './routes/Projects'
import SignUpPage from './routes/001-sign-up-page'
import './App.css'
import { documentHeight } from './utils'

function App() {
  const [count, setCount] = useState(0)

  window.addEventListener('resize', documentHeight)
  documentHeight()

  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />}>
            {/* <Route path='signuppage' element={SignUpPage} /> */}
          </Route>
          <Route path='/001-sign-up-page' element={<SignUpPage />} />
          <Route
            path='*'
            element={
              <div>
                <p>There's nothing here!</p>
              </div>
            }
          ></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
