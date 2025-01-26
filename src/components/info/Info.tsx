import { FC, useEffect, useState } from "react";
import { ITodo, IUser } from "../../types/info.type.ts";
import List from "./List.tsx";
import Todo from "./Todo.tsx";
import User from "./User.tsx";
import "../../styles/info.css";

const Info: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  const fetchUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then((response) => response.json())
      .then((users: IUser[]) => setUsers(users));
  };

  const fetchTodos = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((todos: ITodo[]) => setTodos(todos));
  };

  return (
    <div className="info-container">
      <List
        items={todos}
        renderItems={(todo: ITodo) => <Todo todo={todo} key={todo.id} />}
      />

      <List
        items={users}
        renderItems={(user: IUser) => <User user={user} key={user.id} />}
      />
    </div>
  );
};

export default Info;
