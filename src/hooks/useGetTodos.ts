import { useEffect, useState } from "react";
import { ITodo } from "../types/info.type.ts";
import { fetchTodos } from "../services/api.ts";

const useGetTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchTodos()
      .then((todos) => setTodos(todos))
      .catch((error) => setError(`Fetch error: ${error}`))
      .finally(() => setIsLoading(false));
  }, []);

  return { todos, isLoading, error };
};

export default useGetTodos;
