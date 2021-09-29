import SassTodo from "components/sass-comp";
import StyledTodo from "components/styled-comp";
import styles from "App.module.css";

export default function App() {
  return (
    <div className={styles.App}>
      <StyledTodo />
      <SassTodo />
    </div>
  );
}
