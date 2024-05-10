import React from "react";
import {useRouter} from "next/router";

const NavBar = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleCreateTodoClick = () => {
    router.push("/create-todo");
  };

  const handleTodosClick = () => {
    router.push("/todos");
  };
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Todo App
        </span>

        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <button
                onClick={handleHomeClick}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={handleCreateTodoClick}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"              >
                Create Todo
              </button>
            </li>
            <li>
              <button
                onClick={handleTodosClick}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                List Todos
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
