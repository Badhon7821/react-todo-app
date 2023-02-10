import TaskItem from "./TaskItem";

const TaskList = ({ tasks, loading, error }) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-900 container mx-auto p-10">
      {loading ? (
        <p className="text-center">{error ? error : "loading..."}</p>
      ) : (
        tasks.length === 0 && <p className="text-center">No task to show...</p>
      )}
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
