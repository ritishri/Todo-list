import { useState } from "react";  //import useState



function App() {
  // State variable to manage tasks and the editing
  const [tasks,setTasks] = useState([]);      
  const [task,setTask] = useState("");
  const [editIndex,setIndex] = useState(null);
  const [editValue,setValue] = useState("")

  // Function to add tasks
  const addTasks = () =>{
    if(task !== ""){
      setTasks([...tasks,task])
      setTask(" ")
      console.log(tasks)
    }
  }

  // Function to delete tasks

  const deleteTasks = (index) =>{
    const updatedList = [...tasks]
    updatedList.splice(index,1)
    setTasks(updatedList)
  }

  // Function to edit tasks
  const editTask = (index) => {
    setIndex(index)
    setValue(tasks[index])
  }

  // Function to update tasks after editing
  const updatetask = () =>{
    if(editValue.trim () !=""){
      const updatedList =[...tasks]
      updatedList[editIndex] = editValue.trim()
      setTasks(updatedList)
      setIndex(null)
      setValue("")
    }
  }


  return (
   <div className="flex flex-col items-center bg-gray-100 min-h-screen">
    <h1 className="text-4xl m-16 font-bold text-sky-900">Todo-List</h1>
    <div className="p-6 white rounded-md shadow-md">

      {/* Form to add tasks */}
      <input className="bg-gray-100 rounded-md m-4 p-4 W-72 border border-gray-300"type="text" value={task} onChange={(e)=>{
        setTask(e.target.value)
      }}
       placeholder="Add your work"/>
      <button onClick={addTasks} className="bg-gray-400 text-white p-3 m-3 rounded-md hover:bg-slate-500 ">Submit</button>
    </div>

   {/* Display tasks */}

    <div className="mt-8 w-full max-w-lg">
      {tasks ?. length > 0 ?(
        <ul>
          {
            tasks.map((task,index)=>(
              <div className="flex items-center justify-between bg-slate-100  pl-8 pr-4 rounded-lg shadow-md p-4 mb-4"key={index}>

              {/* Display task or input field for editing */}
                {editIndex === index ? (
                  <input className= " flex-grow bg-slate-100 rounded-md p-2 border border-gray-300" type="text" value={editValue} onChange={(e) => setValue(e.target.value)}/>
                ):(
                
                  <li className="self-center font-semibold pr-10 grow whitespace-normal overflow-hidden overflow-ellipsis">{task}</li>
                )}
                  
                   {/* Edit button */}

                <button onClick={editIndex === index ? updatetask : () => editTask (index)} className="bg-gray-400 hover:bg-gray-500 text-white p-3 m-3 rounded-md">
                  {editIndex === index ? "Update" : "Edit"}
                </button>

               {/* Delete button */}

                <button onClick={()=>{deleteTasks(index)}} className="bg-gray-400 hover:bg-gray-500 text-white p-3 m-3 rounded-md ">Delete</button>
              </div>
            ))
          }
        </ul>
      
      ):(
        <div>
          <p>No Task Found</p>
        </div>
        )}

    </div>
  </div>
  );
}

export default App;
