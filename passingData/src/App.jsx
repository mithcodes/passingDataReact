import { useState } from 'react'

import Data from './component/Data'

function App() {
  const [count, setCount] = useState(0)
  let obj=[{
    item:"food",
    price:3500
  },

{
  item:"shooping",
  price:4500
},

{
  item:"transport",
  price:1200,
}



]

  return (
    <>
    <div>
      <h1>Expenses</h1>
      {
        obj.map(list=>(
        <Data
          item={list.item}
          price={list.price}
          
          
          ></Data>
            ))}
            
      </div>
      </>
    
  )
}

export default App
