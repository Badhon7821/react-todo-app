import { FiEdit, FiTrash } from "react-icons/fi";

const TaskItem = ({ task }) => {
  return (
    <div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800 group ">
      <div className="task-item-left flex gap-3">
        <span>
          <input type="checkbox" className="accent-teal-400" />
        </span>

        <p className="group-hover:text-teal-400">{task.text}</p>
      </div>
      <div className="task-item-right flex items-center gap-4 ">
        <button>
          <FiEdit className="hover:text-teal-500 duration-300" />
        </button>
        <button>
          <FiTrash className="hover:text-red-500 duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
