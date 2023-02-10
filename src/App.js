import { createContext, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";

import TaskList from "./components/TaskList";

export const deleteHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    try {
      const res = await fetch("https://olive-trail-skate.glitch.me/task");

      if (!res.ok) throw new Error("something went wrong");
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteHandler = async (id) => {
    deleteData(id);
  };

  const deleteData = async (id) => {
    await fetch(`https://olive-trail-skate.glitch.me/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-800 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <deleteHandlerContext.Provider value={deleteHandler}>
        <Header />
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} />
        <Footer />
      </deleteHandlerContext.Provider>
    </div>
  );
};

export default App;
