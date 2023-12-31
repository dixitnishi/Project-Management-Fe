import React, { useContext, useState } from "react";
import { ProductContext } from "../store/ProductContext";

function NewTask() {
  const { onAddTask } = useContext(ProductContext);

  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
