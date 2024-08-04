"use client";
import { useTransition } from "react";
import { deleteUser, getUsers, User } from "../actions/user";

interface Props {
  user: User;
}
function UserDetail({ user }: Props) {
  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => {
      deleteUser(user.id);
    });
  };
  return (
    <div className="flex items-center gap-4 border border-gray-600 py-1 px-4">
      {pending ? (
        <p>Deleting...</p>
      ) : (
        <>
          <img
            className="w-10 h-10 rounded-full"
            src="/profile-picture-5.jpg"
            alt=""
          />
          <div className="font-medium text-base dark:text-white">
            <div>{user.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </div>
          </div>
          <button className="ml-auto" onClick={handleDelete}>
            <img className="w-4 h-4" src="/delete.png" alt="" />
          </button>
        </>
      )}
    </div>
  );
}

export default async function UserList() {
  const users = await getUsers();

  return (
    <div className="grid grid-cols-3 gap-5">
      {users.map((user: User) => (
        <UserDetail user={user} />
      ))}
    </div>
  );
}
