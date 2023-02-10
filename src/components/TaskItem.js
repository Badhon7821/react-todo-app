import { useContext } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { deleteHandlerContext, updateHandlerContext } from "../App";

const TaskItem = ({ task, handleEditSubmit, editedText, setEditedText }) => {
  const deleteHandler = useContext(deleteHandlerContext);

  const updateHandler = useContext(updateHandlerContext);

  return (
    <div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800 group ">
      <div className="task-item-left flex gap-3">
        <span>
          <input type="checkbox" className="accent-teal-400" />
        </span>

        {task.isEditable && (
          <form onSubmit={(e) => handleEditSubmit(e, task.id)}>
            <input
              required
              className="bg-transparent outline-none border-b-2 border-gray-600 pb-1 focus:border-teal-500"
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        )}
        {!task.isEditable && (
          <p className="group-hover:text-teal-400">{task.text}</p>
        )}
      </div>
      <div className="task-item-right flex items-center gap-4 ">
        <button onClick={() => updateHandler(task.id)}>
          <FiEdit className="hover:text-teal-500 duration-300" />
        </button>
        <button onClick={() => deleteHandler(task.id)}>
          <FiTrash className="hover:text-red-500 duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
