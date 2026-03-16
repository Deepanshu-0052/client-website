import React, {useState} from "react";

function Contact(){

const [form,setForm] = useState({
name:"",
email:"",
message:""
})

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
e.preventDefault()

await fetch("http://localhost:5000/api/messages",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(form)

})

alert("Message Sent")

setForm({name:"",email:"",message:""})
}

return(

<div className="max-w-4xl mx-auto p-6">

<h2 className="text-3xl font-bold mb-6 text-center">
Contact Us
</h2>

<form onSubmit={handleSubmit} className="grid gap-4">

<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Your Name"
className="border p-3 rounded"
/>

<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Your Email"
className="border p-3 rounded"
/>

<textarea
name="message"
value={form.message}
onChange={handleChange}
placeholder="Your Message"
className="border p-3 rounded"
/>

<button className="bg-blue-600 text-white py-3 rounded">
Send Message
</button>

</form>

</div>
)

}

export default Contact