import { IListProps } from "../../types/info.type.ts";

export default function List<T>({ items, renderItems }: IListProps<T>) {
  if (!items.length) return <p>This list is empty!</p>;

  return <div className="list-wrapper">{items.map(renderItems)}</div>;
}
