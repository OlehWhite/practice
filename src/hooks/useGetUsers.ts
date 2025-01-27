import { useEffect, useState } from "react";
import { IUser } from "../types/info.type.ts";
import { fetchUsers } from "../services/api.ts";

const useGetUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchUsers()
      .then((users) => setUsers(users))
      .catch((error) => setError(`Fetch error: ${error}`))
      .finally(() => setIsLoading(false));
  }, []);

  return { users, isLoading, error };
};

export default useGetUsers;
