"use client";
import { useEffect } from "react";
import { useState } from "react";

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>現在の日時：{now ? now.toLocaleString() : "読み込み中…"}</p>;
}
