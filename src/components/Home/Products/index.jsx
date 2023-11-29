import { useCallback, useRef } from 'react';
import styles from './products.module.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Products = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className={styles.products}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Товары</h2>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                <li className={styles.listItem}>Все товары</li>
                <li className={styles.listItem}>Гамаки</li>
                <li className={styles.listItem}>Чехлы</li>
                <li className={styles.listItem}>Крепеж</li>
              </ul>
            </nav>
          </div>
          <div className={styles.slider}>
            <div className={styles.sliderInner}>
              <div className={styles.sliderNavigation}>
                <FaChevronLeft
                  color='#000'
                  size={30}
                  className={styles.prevBtn}
                  onClick={handlePrev}
                />
                <FaChevronRight
                  color='#000'
                  size={30}
                  className={styles.nextBtn}
                  onClick={handleNext}
                />
              </div>
              <Swiper
                pagination={{
                  el: `.${styles.sliderPagination}`,
                  type: 'bullets',
                  bulletClass: styles.sliderBullet,
                  bulletActiveClass: styles.sliderBulletActive,
                  clickable: true,
                }}
                loop={true}
                slidesPerView={4}
                spaceBetween={30}
                modules={[Pagination]}
                ref={sliderRef}
                className={styles.sliderWrapper}>
                <SwiperSlide>
                  <article className={styles.card}>
                    <img
                      className={styles.cardCover}
                      src='https://img5.lalafo.com/i/posters/original/f6/34/1d/1015a48e3b4fb4a52b4c2881e2.jpeg'
                      alt='Гамак'
                    />
                    <h3 className={styles.cardTitle}>Гамак “Лисичка”</h3>
                    <p className={styles.cardDescription}>
                      Описание гамака, основные параметры, материал
                    </p>
                    <h4 className={styles.cardPrice}>3 000 руб</h4>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className={styles.card}>
                    <img
                      className={styles.cardCover}
                      src='https://img5.lalafo.com/i/posters/original/f6/34/1d/1015a48e3b4fb4a52b4c2881e2.jpeg'
                      alt='Гамак'
                    />
                    <h3 className={styles.cardTitle}>Гамак “Лисичка”</h3>
                    <p className={styles.cardDescription}>
                      Описание гамака, основные параметры, материал
                    </p>
                    <h4 className={styles.cardPrice}>3 000 руб</h4>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className={styles.card}>
                    <img
                      className={styles.cardCover}
                      src='https://img5.lalafo.com/i/posters/original/f6/34/1d/1015a48e3b4fb4a52b4c2881e2.jpeg'
                      alt='Гамак'
                    />
                    <h3 className={styles.cardTitle}>Гамак “Лисичка”</h3>
                    <p className={styles.cardDescription}>
                      Описание гамака, основные параметры, материал
                    </p>
                    <h4 className={styles.cardPrice}>3 000 руб</h4>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className={styles.card}>
                    <img
                      className={styles.cardCover}
                      src='https://img5.lalafo.com/i/posters/original/f6/34/1d/1015a48e3b4fb4a52b4c2881e2.jpeg'
                      alt='Гамак'
                    />
                    <h3 className={styles.cardTitle}>Гамак “Лисичка”</h3>
                    <p className={styles.cardDescription}>
                      Описание гамака, основные параметры, материал
                    </p>
                    <h4 className={styles.cardPrice}>3 000 руб</h4>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className={styles.card}>
                    <img
                      className={styles.cardCover}
                      src='https://img5.lalafo.com/i/posters/original/f6/34/1d/1015a48e3b4fb4a52b4c2881e2.jpeg'
                      alt='Гамак'
                    />
                    <h3 className={styles.cardTitle}>Гамак “Лисичка”</h3>
                    <p className={styles.cardDescription}>
                      Описание гамака, основные параметры, материал
                    </p>
                    <h4 className={styles.cardPrice}>3 000 руб</h4>
                  </article>
                </SwiperSlide>
                <SwiperSlide>
                  <article className={styles.card}>
                    <img
                      className={styles.cardCover}
                      src='https://img5.lalafo.com/i/posters/original/f6/34/1d/1015a48e3b4fb4a52b4c2881e2.jpeg'
                      alt='Гамак'
                    />
                    <h3 className={styles.cardTitle}>Гамак “Лисичка”</h3>
                    <p className={styles.cardDescription}>
                      Описание гамака, основные параметры, материал
                    </p>
                    <h4 className={styles.cardPrice}>3 000 руб</h4>
                  </article>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.sliderPagination}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
