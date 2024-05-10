import CreateTodoForm from "@/components/CreateTodoForm";
import NavBar from "@/components/NavBar";
import { createTodo } from "@/utils/todosFunctions";

const Todo = () => {
    return (
      <>
       <NavBar />
       <CreateTodoForm onCreate={createTodo}/>
      </>
    );
  };
  
  export default Todo;