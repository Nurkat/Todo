import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import Modal from "./Modal";

function TodoList() {
    const [isOpenModal,setIsOpenModal] =useState(false)
    const {todos,deleteTodo,updateTodo} = useContext(Context)

    const [updateInpValue,setUpdateInpValue] = useState("") 
    const [updateid,setUpdateId] =useState(0)
 function updateTodoBtnClick(id){
    setUpdateId(id)
    setIsOpenModal(true)
    const updateobj = todos.find(item => item.id === id)
    setUpdateInpValue(updateobj.title)
 }
function updateFormSubmit(e){
    e.preventDefault()
    updateTodo(updateid,updateInpValue)
    setIsOpenModal(false)
}

    return(
        <>
        <ul className="flex flex-col gap-5 mx-auto mt-5 w-[650px]"> 
        {todos.map((item,index)=>(
            <li key={index} className="bg-gray-700 p-2 rounded-lg text-white flex justify-between">
               <div>
               <span>{index + 1}</span>.
               <strong>{item.title}</strong>
               </div>
       <div className="flex gap-3">
          <input type="checkbox"/>
          <button onClick={() => deleteTodo(item.id)} className="bg-red-600 p-[10px] text-white rounded-[10px]">Delete</button>
          <button onClick={() => updateTodoBtnClick(item.id)} className="bg-green-600 p-2 text-white rounded-[10px]">Update</button>
       </div>
           </li>
        ))}
           </ul>
           <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
            <form onSubmit={updateFormSubmit} className="flex flex-col space-y-4">
                <input className="p-3 rounded-lg" value={updateInpValue} onChange={(e) =>setUpdateInpValue(e.target.value)}  type="text" />
                <button type="submit" className="p-2 rounded-md bg-green-500 text-white font-bold">Update</button>
            </form>
           </Modal>
        </>
    )
}

export default TodoList