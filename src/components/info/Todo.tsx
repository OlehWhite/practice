import { ITodosProps } from "../../types/info.type.ts";
import { FC, memo } from "react";

const Todo: FC<ITodosProps> = memo(({ todo }) => {
  return (
    <div className="todo-wrapper">
      <h2>{todo.id}</h2>
      <p>{todo.title}</p>
      <input type="checkbox" checked={todo.completed} disabled />
    </div>
  );
});

export default Todo;
