import { Link } from "react-router-dom";
import "../styles.css";


const tasks = [
    { id: 1, name: "Learn React Router" },
    { id: 2, name: "Build a Task App" },
    { id: 3, name: "Pick up G from School" },
];

const taskInfo = tasks.id || "Task Not Found";

function TaskList () {
  return (
    <div className="task-list">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default TaskList;