import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'


const countriesPromies = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>

      <h1>React World On The Go</h1>
      <Suspense fallback={<p>Countries are Loading.....</p>}>
        <Countries countriesPromies={countriesPromies}></Countries>
      </Suspense>
    </>
  )
}

export default App
