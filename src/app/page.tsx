import Clock from "./components/Clock";
import Counter from "./components/Counter";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">こんにちは！</h1>
        <Clock />
        <Counter />
      </div>
    </main>
  );
}
