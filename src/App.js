import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";

import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    try {
      const res = await fetch("https://olive-trail-skate.glitch.me/task");

      if (!res.ok) throw new Error("something went wrong");
      const data = await res.json();
      setTask(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-800 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <Header />
      <AddTask />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
