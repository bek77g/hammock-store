import styles from './auth.module.css';
import Button from 'components/Button';

const Register = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Регистрация</h2>
      <div className={styles.wrapper}>
        <input className={styles.input} type='text' placeholder='Логин' />
        <input className={styles.input} type='text' placeholder='ФИО' />
        <input className={styles.input} type='mail' placeholder='E-mail' />
        <input className={styles.input} type='tel' placeholder='Телефон' />
        <input className={styles.input} type='password' placeholder='пароль' />
        <input
          className={styles.input}
          type='password'
          placeholder='Повторите пароль'
        />
      </div>
      <Button className={styles.button}>Зарегестрировать</Button>
    </form>
  );
};

export default Register;
