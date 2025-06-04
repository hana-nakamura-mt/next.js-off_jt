"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント：{count}</p>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
      >
        -1
      </button>
    </div>
  );
}
