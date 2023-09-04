"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AdminPage = () => {
  const router = useRouter();
  const [state, setState] = useState({
    password: "",
    email: "",
  });

  const handleChange = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { email, password } = state;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(state);
    if (email.length !== 0 && password.length !== 0)
      router.push("/admin/dashboard");
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-2 items-center "
        >
          <input
            className="p-2 rounded-md text-slate-700 outline-none"
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="admin@email.com"
          />
          <input
            className="p-2 rounded-md text-slate-700 outline-none"
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="**********"
          />
          <button
            type="submit"
            className="bg-bgButton rounded-md py-2 px-3 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
