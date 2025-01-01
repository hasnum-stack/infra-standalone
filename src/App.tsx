import TodoList from './galaxies/TodoList';
import BaseList from './galaxies/BaseList';
const App = () => {
  return (
    <div className='content'>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <TodoList />
      <BaseList />
    </div>
  );
};

export default App;
