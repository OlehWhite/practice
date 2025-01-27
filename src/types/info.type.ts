import { ReactNode } from "react";

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IListProps<T> {
  items: T[];
  renderItems: (item: T) => ReactNode;
}

export interface ITodosProps {
  todo: ITodo;
}

export interface IUserProps {
  user: IUser;
}
