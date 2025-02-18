import React from "react";

function TaskNumber({data}) {
  return (
    <div className="flex justify-between gap-10">
      
      <div className="w-[40%] bg-blue-400 px-9 py-7 mt-10 rounded-xl">
        <h1 className="text-4xl font-semibold">{data.task_count.new}</h1>
        <h1 className="text-3xl font-semibold">New Task</h1>
      </div>
      <div className="w-[40%] bg-green-400 px-9 py-7 mt-10 rounded-xl">
        <h1 className="text-4xl font-semibold">{data.task_count.completed}</h1>
        <h1 className="text-3xl font-semibold">Completed Task</h1>
      </div>
      <div className="w-[40%] bg-orange-400 px-9 py-7 mt-10 rounded-xl">
        <h1 className="text-4xl font-semibold">{data.task_count.active}</h1>
        <h1 className="text-3xl font-semibold">Active Task</h1>
      </div>
      <div className="w-[40%] bg-red-400 px-9 py-7 mt-10 rounded-xl">
        <h1 className="text-4xl font-semibold">{data.task_count.failed}</h1>
        <h1 className="text-3xl font-semibold">Failed Task</h1>
      </div>
    </div>
  );
}

export default TaskNumber;
