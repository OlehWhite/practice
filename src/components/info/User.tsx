import { FC, memo } from "react";
import { IUserProps } from "../../types/info.type.ts";

const User: FC<IUserProps> = memo(({ user }) => {
  return (
    <div className="user-wrapper">
      <h3>{user.id}</h3>
      <p>{user.name}</p>
      <p>{user.phone}</p>
      <p>{user.email}</p>
    </div>
  );
});

export default User;
