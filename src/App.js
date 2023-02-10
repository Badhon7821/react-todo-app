import { createContext, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";

import TaskList from "./components/TaskList";

export const deleteHandlerContext = createContext();
export const updateHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editedText, setEditedText] = useState("");
  const [toggleMode, setToggleMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    try {
      const res = await fetch("https://olive-trail-skate.glitch.me/task");

      if (!res.ok) throw new Error("something went wrong");
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteHandler = async (id) => {
    deleteData(id);

    setTasks(tasks.filter((task) => id !== task.id));
  };

  const deleteData = async (id) => {
    await fetch(`https://olive-trail-skate.glitch.me/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const updateHandler = (id) => {
    const [editableText] = tasks.filter((task) => id === task.id);
    editableText.isEditable = true;
    setEditedText(editableText.text);

    setTasks([...tasks]);
    setToggleMode(false);

    tasks
      .filter((task) => id !== task.id)
      .map((editableText) => (editableText.isEditable = false));
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    setToggleMode(!toggleMode);

    const editablePersistanceData = {
      text: editedText,
      id: id,
    };

    puttingData(id, editablePersistanceData);
  };

  const puttingData = async (id, persistanceData) => {
    await fetch(`https://olive-trail-skate.glitch.me/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(persistanceData),
    });
  };

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-800 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <deleteHandlerContext.Provider value={deleteHandler}>
        <updateHandlerContext.Provider value={updateHandler}>
          <Header />
          <AddTask tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            loading={loading}
            error={error}
            handleEditSubmit={handleEditSubmit}
            editedText={editedText}
            setEditedText={setEditedText}
          />
          <Footer />
        </updateHandlerContext.Provider>
      </deleteHandlerContext.Provider>
    </div>
  );
};

export default App;
