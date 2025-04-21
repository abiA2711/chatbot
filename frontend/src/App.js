import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

// const socket = io('http://localhost:4000'); // Backend URL

function App() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [all,setAll]=useState([]);
    const [bt,setbt]=useState(0);
    const [editab,seteditab]=useState('')
    // useEffect(() => {
    //     socket.on('bot-message', (response) => {
    //         setChat((prevChat) => [...prevChat, { sender: 'bot', text: response }]);
    //     });

    //     return () => socket.off('bot-message');
    // }, []);

    // const sendMessage = () => {
    //     if (message.trim()) {
    //         setChat((prevChat) => [...prevChat, { sender: 'user', text: message }]);
    //         socket.emit('message', message);
    //         setMessage('');
    //     }
    // };

    const handleSubmit=()=>{
        let newEntry = { name: name, age: age }; // Create a new entry object
    setAll((prevAll) => [...prevAll, newEntry]); // Update state properly
    }
    const handleEdit=(name)=>{
        seteditab(name);
        let edit=all.find((val)=>val.name==name);
        console.log(edit);
        setName(edit.name);
        setAge(edit.age);
        setbt(1);
    }

    const handleDelete=(name)=>{
        console.log(name)
        let finalArry=all.filter((val)=>val.name!=name);
        setAll(finalArry);
    }
    const handleupdate=()=>{
        for(let i=0;i<=all.length-1;i++){
            console.log(all[i])
           if(all[i].name==editab){
            console.log("dei",all[i].name=name)
            (all[i].name=name)
            (all[i].age=age);
           } 
            
        }
       

    }
    return (
        // <div className="container" style={{ marginTop: '50px' }}>
        //     <div className="row justify-content-center">
        //         <div className="col-12 col-md-8">
        //             <div className="card shadow-lg">
        //                 <div className="card-header text-center bg-primary text-white">
        //                     <h4>Chatbot</h4>
        //                 </div>
        //                 <div className="card-body" style={{ height: '400px', overflowY: 'scroll' }}>
        //                     {chat.map((msg, index) => (
        //                         <div key={index} className={`d-flex ${msg.sender === 'bot' ? 'justify-content-start' : 'justify-content-end'} mb-3`}>
        //                             <div className="d-flex align-items-center">
        //                                 {msg.sender === 'bot' ? (
        //                                     <img
        //                                         src="https://via.placeholder.com/40?text=Bot"
        //                                         alt="Bot Avatar"
        //                                         className="rounded-circle me-2"
        //                                         style={{ width: '40px', height: '40px' }}
        //                                     />
        //                                 ) : (
        //                                     <img
        //                                         src="https://via.placeholder.com/40?text=User"
        //                                         alt="User Avatar"
        //                                         className="rounded-circle me-2"
        //                                         style={{ width: '40px', height: '40px' }}
        //                                     />
        //                                 )}
        //                                 <div
        //                                     className={`rounded p-2 ${
        //                                         msg.sender === 'bot' ? 'bg-light' : 'bg-primary text-white'
        //                                     }`}
        //                                     style={{ maxWidth: '75%' }}
        //                                 >
        //                                     <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //                 <div className="card-footer d-flex align-items-center">
        //                     <input
        //                         type="text"
        //                         value={message}
        //                         onChange={(e) => setMessage(e.target.value)}
        //                         placeholder="Type a message"
        //                         className="form-control me-2"
        //                         style={{ borderRadius: '20px', flex: 1 }}
        //                     />
        //                     <button onClick={sendMessage} className="btn btn-primary" style={{ borderRadius: '20px' }}>
        //                         Send
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='form'>
        <input 
            type="text" 
            placeholder="Enter Your Name" 
            className="form-input" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
        /><br />
        
        <input 
            type="text" 
            placeholder="Enter age" 
            className="form-input" 
            value={age}
            onChange={(e)=>setAge(e.target.value)}
        /><br />
        {bt==0?<>
            <button className="btn btn-primary" onClick={()=>handleSubmit()}>
            Submit
        </button>
        </>:<>
        <button className="btn btn-primary" onClick={()=>handleupdate()}>
            Update
        </button>
        </>}
        
       {console.log("hey",all)}
       
            <table>
                <tr>
                <th>name</th>
                <th>age</th>
                <th>edit</th>
                <th>delete</th>
                </tr>
                {all?.map((res)=>(
                    
               <tr>
                <td>{res.name}</td>
                <td>{res.age}</td>
                <td><button onClick={()=>handleEdit(res.name)}>edit</button></td>
                <td><button onClick={()=>handleDelete(res.name)}>delete</button></td>
               </tr>
            ))}
            </table>
      
        

    </div>
    
    );
}

export default App;
