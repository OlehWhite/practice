import { FC, useMemo, useState } from "react";
import List from "./List.tsx";
import Todo from "./Todo.tsx";
import User from "./User.tsx";
import useGetUsers from "../../hooks/useGetUsers.ts";
import useGetTodos from "../../hooks/useGetTodos.ts";
import { ITodo, IUser } from "../../types/info.type.ts";
import "../../styles/info.css";

const Info: FC = () => {
  const { users, isLoading: isLoadingUsers, error: errorUsers } = useGetUsers();
  const { todos, isLoading: isLoadingTodos, error: errorTodos } = useGetTodos();

  const [sorted, setSorted] = useState<boolean>(false);

  const filteredTodos = useMemo(
    () => (sorted ? todos.filter((todo) => todo.completed) : todos),
    [sorted, todos],
  );

  // const renderTodo = useCallback(
  //   (todo: ITodo) => <Todo todo={todo} key={todo.id} />,
  //   [],
  // );

  if (isLoadingUsers || isLoadingTodos) return <p>...Loading</p>;
  if (errorUsers || errorTodos) return <p>{errorUsers || errorTodos}</p>;

  console.log("render info");

  return (
    <div className="info-container">
      <div>
        <button onClick={() => setSorted(!sorted)}>Show completed todos</button>
        <List
          items={filteredTodos}
          renderItems={(todo: ITodo) => <Todo todo={todo} key={todo.id} />}
        />
      </div>

      <List
        items={users}
        renderItems={(user: IUser) => <User user={user} key={user.id} />}
      />
    </div>
  );
};

export default Info;
