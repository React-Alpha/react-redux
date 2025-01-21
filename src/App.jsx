import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-2xl font-bold text-center">
        Hello, Tailwind CSS! We going to build a React-Redux app with Tailwind.
      </h1>
      <div className="max-w-md mx-auto mt-10 spcae-y-5">
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
