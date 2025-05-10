"use client";

import React, { useState } from "react"



interface ChoresCardProps {
  title: string;
  date: string;
  taskList: string[];
}

const ChoresCard: React.FC<ChoresCardProps> = ({ title, date, taskList }) => {
  const [tasks, setTasks] = useState(taskList);
  const [completed, setCompleted] = useState(false);

  const handleRemoveTask = (indexToRemove: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const handleAddTask = (e: any) => {
    if (e.key === "Enter" && e.currentTarget.value.trim()) {
      setTasks([...tasks, e.currentTarget.value.trim()]);
      e.currentTarget.value = "";
    }
  };

  const handleToggleTask = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task: string, i) =>
        i === index ? `${task} (completed)` : task
      )
    );
  };

  return (
    <div className="bg-orange-100 p-6 w-80 rounded-2xl">
      <div className="text-center flex justify-between items-center">
        <div className={`uppercase font-bold `}>{title}</div>
        <div
          className={`bg-orange-500 text-center px-3 py-1 rounded-3xl text-xs font-bold text-white w-max capitalize`}
        >
          {date}
          {/* Today */}
        </div>
      </div>
      {/* list */}
      <div className="mt-4">
        {!tasks.length && (
          <div className="">
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="+ Add a task"
              onKeyDown={handleAddTask}
            />
          </div>
        )}
        {tasks.map((task, index) => (
          <div className="flex justify-between items-center" key={index}>
            <div
              key={index}
              className={`bg-white text-left px-3 py-1 rounded-3xl text-xs font-bold text-black mb-2 cursor-pointer ${
                completed ? "line-through text-gray-400" : ""
              }`}
            >
              {/* click on task, set to true if completed and strikethough (LINETHROUGH) */}
              {task}
            </div>
            <button
              className="font-bold cursor-pointer"
              onClick={() => handleRemoveTask(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      {tasks.length > 0 && (
        <div className="flex justify-center items-center mt-4 text-gray-500 hover:text-gray-700 hover:font-bold focus:text-black focus:outline-violet-500">
          <input
            className="bg-transparent cursor-pointer w-full outline-none placeholder:text-center"
            type="text"
            placeholder="+ Add task"
            onKeyDown={handleAddTask}
          />
        </div>
      )}
    </div>
  );
};

export default ChoresCard;
