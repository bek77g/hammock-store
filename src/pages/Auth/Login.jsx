import styles from './auth.module.css';
import Button from 'components/Button';

const Login = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Вход</h2>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type='text'
          placeholder='Логин или E-mail'
        />
        <input className={styles.input} type='password' placeholder='пароль' />
      </div>
      <Button className={styles.button}>Войти</Button>
    </form>
  );
};

export default Login;
