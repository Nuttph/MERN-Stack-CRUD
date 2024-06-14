import React, { useEffect, useState } from 'react'
import axios from 'axios'


//name,detail,price
const ShowData = () => {
  const [data, setData] = useState([])
  const [re,set] = useState(0)
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
  }, [re])

  const fakeData = {
    name:"Nuttaphon",
    detail:"Love Thailand",
    price:2500,
  }
  const handleCreate =async()=>{
    try{
      const res = await axios.post('http://localhost:5000/api/product',fakeData)
      console.log("it"+res);
    }catch(err){
      console.log(err);
    }
  }
  const handleDelete = async(id) =>{
    await axios.delete('http://localhost:5000/api/product/'+id).then().catch((err)=>console.log(err))
    set(1)
    console.log('test');
  }
  return (
    <>
    <form>
    <button onClick={()=>{
      handleCreate()
      set(0)
    }}>Add data</button>
    </form>
      <form onSubmit={(e)=>{
      
      }}>
        {data.map((item,index)=>(
          <div key={index}>
            <div>{item.name} && {item._id}</div>
            <button onClick={()=>{
              handleDelete(item._id)
            }}>{"Delete"}</button>
          </div>
        ))}
      </form>
    </>
  )
}

export default ShowData
