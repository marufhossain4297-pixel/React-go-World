import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesPromies = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<p>Countries are Loading.....</p>}>
        <Countries countriesPromies={countriesPromies}></Countries>
      </Suspense>
    </>
  )
}

export default App
