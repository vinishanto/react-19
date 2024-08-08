"use client";
import { deleteUser } from "@/actions/user";
import { useTransition } from "react";

export function UserDetail({ user }) {
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
            src="https://api.dicebear.com/9.x/personas/svg?seed=Shadow"
            alt="avatar"
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
