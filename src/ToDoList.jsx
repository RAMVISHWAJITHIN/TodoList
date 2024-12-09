import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleTaskCheck(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg border border-gray-200">
        <h1 className="text-2xl font-extrabold text-blue-600 mb-6 text-center flex items-center justify-center">
          <FcTodoList className="mr-3" />
          To-Do List
        </h1>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="What’s your next task?"
            value={newTask}
            onChange={handleInputChange}
            className="flex-1 px-4 py-3 bg-gray-100 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          <button
            className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-400 transition-all"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 justify-between shadow-sm"
            >
              <label className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  onChange={() => handleTaskCheck(index)}
                />
                <span className="text-gray-800 font-medium">{task}</span>
              </label>
              <div className="flex gap-3">
                <button
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-blue-200 hover:text-blue-600 transition"
                  onClick={() => moveTaskUp(index)}
                >
                  <FaAngleUp />
                </button>
                <button
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-blue-200 hover:text-blue-600 transition"
                  onClick={() => moveTaskDown(index)}
                >
                  <FaAngleDown />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
