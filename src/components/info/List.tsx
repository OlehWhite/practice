import { IListProps } from "../../types/info.type.ts";

export default function List<T>({ items, renderItems }: IListProps<T>) {
  return <div className="list-wrapper">{items.map(renderItems)}</div>;
}
