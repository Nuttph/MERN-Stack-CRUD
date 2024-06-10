import React, { useEffect, useState } from 'react'
import axios from 'axios'


//name,detail,price
const ShowData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product')
        setData(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const fakeData = {
    name:"Nuttaphon",
    detail:"Love Thailand",
    price:2500,
  }
  const handleCreate =async(fakeData)=>{
    try{
      const res = await axios.post('http://localhost:5000/api/product',fakeData)
      console.log("it"+res);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.name}</div> // Assuming the items have a "name" property
      ))}
      <form action="">

      <button onClick={() => console.log(data)}>Click</button>
      <button onClick={() => {
        handleCreate(fakeData)
        }}>Click ADD</button>
      </form>
    </div>
  )
}

export default ShowData
