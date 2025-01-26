import { ITodosProps } from "../../types/info.type.ts";

const Todo = ({ todo }: ITodosProps) => {
  return (
    <div className="todo-wrapper">
      <h2>{todo.id}</h2>
      <p>{todo.title}</p>
      <input type="checkbox" checked={todo.completed} />
    </div>
  );
};

export default Todo;
