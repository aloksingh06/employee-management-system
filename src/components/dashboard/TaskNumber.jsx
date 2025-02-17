import React from "react";

function TaskNumber() {
  return (
    <div className="flex justify-between gap-10">
      <div className="w-[40%] bg-red-400 px-9 py-7 mt-10 rounded-xl">
        <h1 className="text-4xl font-semibold">0</h1>
        <h1 className="text-3xl font-semibold">Task</h1>
      </div>
      <div className="w-[40%] bg-blue-400 px-9 py-7 mt-10 rounded-xl">
        <h1 className="text-4xl font-semibold">0</h1>
        <h1 className="text-3xl font-semibold">Task</h1>
      </div>
      <div className="w-[40%] bg-green-400 px-9 py-7 mt-10 rounded-xl">
        <h1 className="text-4xl font-semibold">0</h1>
        <h1 className="text-3xl font-semibold">Task</h1>
      </div>
      <div className="w-[40%] bg-orange-400 px-9 py-7 mt-10 rounded-xl">
        <h1 className="text-4xl font-semibold">0</h1>
        <h1 className="text-3xl font-semibold">Task</h1>
      </div>
    </div>
  );
}

export default TaskNumber;
