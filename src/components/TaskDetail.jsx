import { useParams } from "react-router-dom";
import "../styles.css";

  const tasks = {
  1: { name: "Learn React Router", description: "Understand navigation in React apps." },
  2: { name: "Build a Task App", description: "Practice React concepts with a project." },
  3: { name: "Pick up G from School", description: "Make sure to arrive on time." }
};

function TaskDetail() {
  const { id } = useParams();
  const task = tasks[id];



  return (
    <div className="task-detail">
      {tasks ? (
        <>
          <h1>{task.name}</h1>
          <p><strong>Details:|</strong> {task.description}</p>
        </>
      ) : (
        <p>Task not found.</p>
      )}
    </div>
  );
}

export default TaskDetail;