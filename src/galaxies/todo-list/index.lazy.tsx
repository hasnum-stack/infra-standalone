import { createLazyFileRoute } from '@tanstack/react-router';
import { Button, Input, List } from 'antd';
import { createStyles } from 'antd-style';
import useStore from './store';

const useStyles = createStyles({
  container: {
    background: 'red',
  },
});

function TodoList() {
  const { styles } = useStyles();
  const store = useStore();
  const { todos, addTodo, removeTodo, clearTodos } = store;

  return (
    <>
      <div className={styles.container}>123</div>
      <List
        header={<div>Todo List</div>}
        footer={<Button onClick={clearTodos}>Clear</Button>}
        bordered
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button key='del' onClick={() => removeTodo(todo)}>
                Delete
              </Button>,
            ]}
          >
            {todo}
          </List.Item>
        )}
      />
      <Input
        placeholder='Enter a todo ~'
        onPressEnter={(e) => {
          addTodo?.(e.currentTarget.value);
          e.currentTarget.value = '';
        }}
      />
      <Button>23</Button>
    </>
  );
}

export const Route = createLazyFileRoute('/todo-list/')({
  component: TodoList,
});
