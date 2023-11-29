import styles from './footer.module.css';
import { ReactComponent as Logo } from 'assets/icons/main/columnLogo.svg';
import Button from 'components/Button';
import Reviews from 'components/Reviews';
import useWindowWidth from 'hooks/useWindowWidth';

const Footer = () => {
  const width = useWindowWidth();

  return (
    <footer className={styles.footer}>
      {width < 960 && <Reviews isMobile />}
      <div className={styles.outside}>
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
            {width >= 960 && <Reviews />}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className='container'>
            <div className={styles.bottomContent}>
              <div className={styles.bottomInfo}>
                <Logo />
                <div className={styles.bottomText}>
                  <p>Качественные и надежные гамаки на любой вес</p>
                  <a href='tel:+ 7 (960) 495 18 18'>+ 7 (960) 495 18 18</a>
                  <a href='mailto:info@pohod23.ru'>info@pohod23.ru</a>
                  <p>935902, Россия, Новороссийск, ул. Сухумское шоссе 80</p>
                </div>
              </div>
              <nav className={styles.bottomNav}>
                <h4 className={styles.bottomNavTitle}>Навигация</h4>
                <ul className={styles.bottomNavList}>
                  <li className={styles.bottomNavLink}>
                    <a href=''>Главная </a>
                  </li>
                  <li className={styles.bottomNavLink}>
                    <a href=''>Каталог</a>
                  </li>
                  <li className={styles.bottomNavLink}>
                    <a href=''>Акции </a>
                  </li>
                  <li className={styles.bottomNavLink}>
                    <a href=''>Контакты</a>
                  </li>
                  <li className={styles.bottomNavLink}>
                    <a href=''>Отзывы</a>
                  </li>
                  <li className={styles.bottomNavLink}>
                    <a href=''>Блог</a>
                  </li>
                  <li className={styles.bottomNavLink}>
                    <a href=''>Доставка и оплата </a>
                  </li>
                  <li className={styles.bottomNavLink}>
                    <a href=''>Личный кабинет</a>
                  </li>
                  <li className={styles.bottomNavLink}>
                    <a href=''>Корзина</a>
                  </li>
                </ul>
              </nav>
              <input
                type='text'
                className={styles.bottomSearch}
                placeholder='Поиск'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
