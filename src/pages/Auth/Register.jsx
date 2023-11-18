import styles from './auth.module.css';
import Button from 'components/Button';

import { ReactComponent as VKLogo } from 'assets/icons/auth/vk.svg';
import { ReactComponent as FacebookLogo } from 'assets/icons/auth/facebook.svg';
import { ReactComponent as GoogleLogo } from 'assets/icons/auth/google.svg';

const Register = () => {
  return (
    <div className='container'>
      <div className={styles.content}>
        <form className={styles.form}>
          <h2 className={styles.title}>Регистрация</h2>
          <div className={styles.wrapper}>
            <input className={styles.input} type='text' placeholder='Логин' />
            <input className={styles.input} type='text' placeholder='ФИО' />
            <input className={styles.input} type='mail' placeholder='E-mail' />
            <input className={styles.input} type='tel' placeholder='Телефон' />
            <input
              className={styles.input}
              type='password'
              placeholder='пароль'
            />
            <input
              className={styles.input}
              type='password'
              placeholder='Повторите пароль'
            />
          </div>
          <Button className={styles.button}>Зарегестрировать</Button>
          <div className={styles.methods}>
            <p className={styles.methodsTitle}>Или войдите через</p>
            <div className={styles.methodsWrapper}>
              <VKLogo />
              <FacebookLogo />
              <GoogleLogo />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
