import { useState } from 'react'
import './App.css'
import ProductPage from './ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='p-10 flex gap-8 justify-center items-center bg-blue-600 '>

        <button
        className='border-2 border-black bg-gray-300 w-5 h-5 rounded-md flex justify-center  items-center font-bold'
        onClick={() =>
        {if(count > 0){
          setCount((count) => count - 1)}
        }}
        >
          -
        </button>

        <h1 className='text-amber-600 text-4xl'>{count}</h1>

        <button
          className="border-2  border-black bg-gray-300 w-5 h-5 rounded-md flex justify-center items-center font-bold"
          onClick={() => 
            {if(count < 10){
            setCount((count) => count + 1)}
          }}
          >
          +
        </button>
    </main>
    <div className='h-100%'>
      <ProductPage/>
    </div>
    </>    
  )
}

export default App
