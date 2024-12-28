import { Button } from 'antd';
import { createStyles } from 'antd-style';
const useStyles = createStyles({
  container: {
    background: 'red',
  },
});

function TodoList() {
  const { styles } = useStyles();
  return (
    <>
      <div className={styles.container}>123</div>
      <Button>23</Button>
    </>
  );
}

export default TodoList;
