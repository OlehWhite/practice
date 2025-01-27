import { ITodo, IUser } from "../types/info.type.ts";

export const fetchUsers = async (): Promise<IUser[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10",
  );

  return response.json();
};

export const fetchTodos = async (): Promise<ITodo[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
  );

  return response.json();
};
