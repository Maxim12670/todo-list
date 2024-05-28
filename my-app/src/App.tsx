import { NavMenu, TaskList } from "./components";
import React, { useEffect } from "react";
import { useTaskStore } from "./store/taskStore";

const App: React.FC = () => {

  const { 
    getTasks,
    getFilteredTasks,
    setFilter } = useTaskStore();

  const tasks = getFilteredTasks();
  useEffect(() => {
    getTasks()
  }, [getTasks]);


  return (
    <>
      <NavMenu onChangeFilter={setFilter}/>
      <TaskList tasks={tasks} />
      {console.log(tasks)}
    </>
  )
}

export default App
