import React from 'react'

const Comp2 = (props) => {
    console.log("Comp2 data",props.data)
  return (
    <div>
    <h2>Comp2</h2>
      
      {
       props.data && props.data.map((item)=>{
            return <p key={item.id}>{item.data}</p>
        })
      }
      <hr/>
    </div>
  )
}

export default Comp2
