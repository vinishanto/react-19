import { getUsers } from "@/actions/user";
import { UserDetail } from "./UserDetail";

export default async function UserList() {
  const users = await getUsers();

  return (
    <div className="grid grid-cols-3 gap-5">
      {users.length ? (
        users.map((user) => <UserDetail user={user} />)
      ) : (
        <div className="col-span3 opacity-60 text-sm text-center">
          No User found
        </div>
      )}
    </div>
  );
}
