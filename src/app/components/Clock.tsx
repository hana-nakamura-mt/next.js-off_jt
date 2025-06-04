"use client";
import { useEffect } from "react";
import { useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>現在の日時：{now.toLocaleString()}</p>;
}
