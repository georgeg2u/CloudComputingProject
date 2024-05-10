import React, { useState } from "react";

const CreateTodoForm = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const newTodo = { title, description };
      const createdTodo = await onCreate(newTodo);
      if (createdTodo) {
        setTitle("");
        setDescription("");
      } else {
        alert("Failed to create todo.");
      }
    } catch (error) {
      console.error("Error creating todo:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-32">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-100 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded"
          >
            Create Todo
          </button>
        </div>
    </form>
  );
};

export default CreateTodoForm;
