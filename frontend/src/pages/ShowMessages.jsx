import React,{useEffect,useState} from "react";

function ShowMessages(){

const [messages,setMessages] = useState([])

useEffect(()=>{
fetchMessages()
},[])

const fetchMessages=async()=>{

const res = await fetch("https://client-backend-yoi5.onrender.com/api/messages")

const data = await res.json()

setMessages(data)

}


const deleteMessage=async(id)=>{

await fetch(`https://client-backend-yoi5.onrender.com/api/messages/${id}`,{
method:"DELETE"
})

fetchMessages()

}

return(

<div className="max-w-6xl mx-auto p-6">

<h1 className="text-3xl font-bold mb-6">
User Messages
</h1>

<div className="grid gap-4">

{messages.map((msg)=>(

<div key={msg._id} className="border p-4 rounded shadow">

<p><b>Name:</b> {msg.name}</p>

<p><b>Message:</b> {msg.message}</p>

<button
onClick={()=>deleteMessage(msg._id)}
className="mt-3 bg-red-500 text-white px-4 py-1 rounded"
>
Delete
</button>

</div>

))}

</div>

</div>

)

}

export default ShowMessages