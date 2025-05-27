"use client";

import { useState } from "react";

export function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setCount(count + 1)}
      className="px-4 py-3 text-2xl border rounded-lg hover:bg-gray-100 transition"
    >
      👍 {count}
    </button>
  );
}
