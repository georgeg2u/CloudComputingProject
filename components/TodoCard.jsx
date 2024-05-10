import { deleteTodo, updateTodo } from "@/utils/todosFunctions";
import React, { useState } from "react";

const TodoCard = ({ id, title: initialTitle, description: initialDescription, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedTodo = { id, title, description };
      console.log("updated todo", updatedTodo)
      await updateTodo(updatedTodo);

      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(id);
      
      onDelete(id);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 relative">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-2 border-b border-gray-400 w-full"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4 border-b border-gray-400 w-full"
          ></textarea>
          <div className="flex justify-end">
            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoCard;
