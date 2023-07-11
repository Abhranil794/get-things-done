// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const Todo = ({ task, toggleComplete, onDelete }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        {/* <EditIcon /> */}
        <DeleteIcon onClick={() => onDelete(task.id)} />
      </div>
    </div>
  );
};
export default Todo;
