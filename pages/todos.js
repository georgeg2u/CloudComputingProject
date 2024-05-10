import React, {useEffect, useState} from "react";
import NavBar from "@/components/NavBar";
import TodoCard from "@/components/TodoCard";
import {getTodos} from "@/utils/todosFunctions";
import Pagination from "@/components/Pagination";

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 3;
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo._id !== id));
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, [currentPage]);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto mt-8 flex flex-wrap justify-center ">
        <div className="m-4">
          {currentTodos.map(todo => (
            <TodoCard
              key={todo._id}
              id={todo._id}
              title={todo.title}
              description={todo.description}
             onDelete={handleDeleteTodo}
            />
          ))}
          <div className="mt-4 flex justify-center">
            <Pagination
              itemsPerPage={todosPerPage}
              totalItems={todos.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodosPage;
