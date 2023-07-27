import React, { useEffect, useState } from 'react'

const Comp1 = (props) => {
  const [data,setData] = useState("")
  const [allData,setAlldata] = useState([])
  const newData = {data : data}
  function myfxn(){
    setAlldata([...allData,newData])
    setData("")
    return allData
  }
  useEffect(()=>{
    if (allData.length){
    props.addMyCompData(allData)
    }
  },[allData])
  return (
    <div>
      <h2>Comp1</h2>
      <input type="text" placeholder='Enter Data' onChange={(event)=>{setData(event.target.value)}} value={data} />
      <button onClick={()=>{myfxn()}}>Submit</button>
      <hr/>
    </div>
  )
}

export default Comp1
