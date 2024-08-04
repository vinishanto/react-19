"use client";

import "./app.css";
import { useActionState } from "react";
import { createUser } from "../actions/user";

const initialState = {
  error: undefined,
};

export default function AddUser() {
  const submitHandler = async (_previousState: object, formData: FormData) => {
    try {
      const response = await createUser({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        age: parseInt(formData.get("age") as string),
      });
      return { response };
    } catch (error) {
      return { error };
    }
  };
  const [state, submitAction, isPending] = useActionState(
    submitHandler,
    initialState
  );

  return (
    <div className="mt-10">
      <h4 className="text-center">Add new User</h4>{" "}
      <form action={submitAction} className="text-base">
        <div className="mt-6 text-right">
          Name:{" "}
          <input
            className="ml-2"
            required
            name="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mt-6 text-right">
          Email:{" "}
          <input
            className="ml-2"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mt-6 text-right">
          Age:{" "}
          <input className="ml-2" name="age" type="text" placeholder="Age" />
        </div>
        <div className="mt-6 text-right">
          <button
            disabled={isPending}
            className="bg-green-600 text-white px-5 py-1 text-base disabled:opacity-30"
          >
            {isPending ? "Adding" : "Add User"}
          </button>
        </div>

        {(state?.error as string) && <p>{state.error as string}</p>}
      </form>
    </div>
  );
}
