import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { decrement, increment } from "./features/counters/counterSlice";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCounter = counters.reduce(
    (acc, counter) => acc + counter.value,
    0
  );

  const handleIncrement = (counterId) => {
    dispatch(increment({ id: counterId }));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement({ id: counterId }));
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-2xl font-bold text-center">
        Hello, Tailwind CSS! We going to build a React-Redux app with Tailwind.
      </h1>
      <div className="max-w-md mx-auto mt-10 spcae-y-5">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            handleIncrement={() => handleIncrement(counter.id)}
            handleDecrement={() => handleDecrement(counter.id)}
          />
        ))}
        ;
        <Stats totalCount={totalCounter} />
      </div>
    </div>
  );
}

export default App;
