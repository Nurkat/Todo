import { useContext, useRef } from "react";
import { Context } from "../Context/Context";

function TodoForm() {
    const {todos,setTodos,saveTodo} = useContext(Context)
    const inputRef = useRef()
    function handleFormSubmit(e){
        e.preventDefault()
        const todo = {
            id:todos.length ? todos[todos.length -1].id +1 :1,
            title:inputRef.current.value,
            isComplated:false
        }
       saveTodo(todo)
        e.target.reset()

    }
    return(
        <>
  
       <form onSubmit={handleFormSubmit} autoComplete="off" className="w-[650px] flex items-center justify-center gap-3 m-10 mx-auto ">
         <input ref={inputRef} className="w-[79%] py-3 pl-2 rounded-md  border-[2px] border-slate-500" placeholder="Add your Todo" name="todoValue"required></input>
         <button className="w-[20%] bg-gray-700  text-white font-bold rounded-lg p-3  hover:bg-white hover:border-[2px] hover:text-green-500  ">Add</button>
       </form>
        </>
    )
}
export default TodoForm