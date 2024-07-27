import { useState } from "react";

const Todo  = () =>{
    const [todos, setTodos] = useState([])
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        const data ={
            id:todos.length + 1,
            title:e.target.todoValue.value,
            isComplated:false
        }
        setTodos([...todos, data])
        e.target.reset()
    }
       
    return(
        <>
       <form onSubmit={handleFormSubmit} autoComplete="off" className="w-[650px] flex items-center justify-center gap-3 m-10 mx-auto ">
         <input className="w-[79%] py-3 pl-2 rounded-md  border-[2px] border-slate-500" placeholder="Add your Todo" name="todoValue"required></input>
         <button className="w-[20%] bg-gray-700  text-white font-bold rounded-lg p-3  hover:bg-white hover:border-[2px] hover:text-green-500  ">Add</button>
       </form>
       <div className="flex justify-center gap-8 ">
        <button  className="border-[2px] bg-gray-700 text-white p-[10px] rounded-[20px] w-[200px]">All (0) </button>
        <button className="border-[2px] bg-gray-700 text-white p-[10px] rounded-[20px] w-[200px]"> Complated (0)</button>
        <button className="border-[2px] bg-gray-700 text-white p-[10px] rounded-[20px] w-[200px]">Uncomplated (0)</button> 
       </div>
     <ul className="flex flex-col gap-5 mx-auto mt-5 w-[650px]"> 
             {todos.map((item,index)=>(
                <li className="bg-gray-700 p-2 rounded-lg text-white flex justify-between">
                    <div>
                    <span>{index + 1}</span>.
                    <strong>{item.title}</strong>
                    </div>
            <div className="flex gap-3">
               <input type="checkbox"/>
               <button className="bg-red-600 p-[10px] text-white rounded-[10px]">Delete</button>
               <button className="bg-green-600 p-2 text-white rounded-[10px]">Update</button>
            </div>
                </li>
             ))}
     </ul>
        </>

  

    )
}
export default Todo