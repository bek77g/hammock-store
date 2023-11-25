import Button from 'components/Button';
import styles from './footer.module.css';
import Reviews from 'components/Reviews';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.content}>
          <form className={styles.form}>
            <h2 className={styles.title}>Заказать звонок</h2>
            <p className={styles.desc}>
              Если у Вас остались вопросы, оставьте контактные данные, и наш
              менеждер свяжется с Вами в удобное время
            </p>
            <div className={styles.inner}>
              <label className={styles.input}>
                <input type='text' placeholder='Имя' />
              </label>
              <label className={styles.input}>
                <input type='text' placeholder='Телефон' />
              </label>
              <label className={styles.input}>
                <input type='text' placeholder='Когда перезвонить' />
              </label>
              <label className={styles.input}>
                <textarea rows='3' placeholder='Комментарии'></textarea>
              </label>
              <Button className={styles.submit}>Отправить</Button>
            </div>
          </form>
          <Reviews />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
