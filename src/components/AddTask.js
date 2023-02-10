import { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const inputRef = useRef(null);

  const addTaskHandler = (e) => {
    e.preventDefault();

    postData(task);
    inputRef.current.blur();
    setTask("");
  };

  const postData = async (text) => {
    const res = await fetch("https://olive-trail-skate.glitch.me/task", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    //real time data upgrade
    setTasks([...tasks, data]);
  };

  return (
    <form
      onSubmit={addTaskHandler}
      className="flex justify-between container mx-auto bg-gray-900 p-10"
    >
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="What's your mind..."
        required
        ref={inputRef}
        className="bg-transparent outline-none border-b-2 border-gray-400 py-2 px-3 focus:border-teal-300"
      />
      <button
        type="submit"
        className="bg-teal-900/50 py-2 px-5 rounded border-2 border-teal-400 hover:bg-teal-400 duration-300 hover:text-gray-800 "
      >
        Add task
      </button>
    </form>
  );
};

export default AddTask;
