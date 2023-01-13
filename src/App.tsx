import { Toaster } from 'react-hot-toast';
import { countActions, getCount } from 'store';
import { useTypedDispatch, useTypedSelector } from 'hooks';

export default function App() {
  const dispatch = useTypedDispatch();
  const count = useTypedSelector(getCount);

  const handleIncrement = () => {
    dispatch(countActions.increment(5));
  };
  const handleDecrement = () => {
    dispatch(countActions.decrement(5));
  };

  return (
    <div>
      <h1>hello</h1>
      <button onClick={handleDecrement}>-5</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+5</button>
      <Toaster position="bottom-center" />
    </div>
  );
}
