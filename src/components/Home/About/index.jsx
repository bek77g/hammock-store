import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>О нас</h2>
            <p className={styles.text}>
              Пять лет назад мы впервые открыли для себя эту прекрасную вещь для
              использования в своих походах по Краснодарскому краю и теперь мы с
              радостью предлагаем Вам насладиться отдыхом на этом надежном
              гамаке и оценить его по достоинству. Мы производим его из лент
              ПВХ, с использованием капроновой нити. Это делает гамак
              долговечными и надежными. Для устройства каркаса гамака мы
              предлагаем выбор между древесиной, которой обрабатываем
              специальной пропиткой для защиты от влаги и алюминиевым каркасом.
              Ширину гамака шьем на выбор от 1м до 1,4м, но количество
              ограниченно, т.к. много отшивать не получается. Цветовая гамма
              постоянно меняется, т.к. мы приобретаем ленты ПВХ только те, что
              есть в наличие у наших поставщиков. Поэтому если Вы не нашли
              расцветки, которая бы вас устроила, можете заходить к нам на сайт
              спустя определенное время, возможно скоро она появится именно на
              Ваш вкус.
            </p>
            <p className={styles.text}>
              Все гамаки шьются и крепятся на каркас вручную. Мы следим за
              качеством каждого произведенного нами товара и стараемся чтобы вы
              получали только положительные эмоции от хороших вещей. Ведь
              удовольствие от хорошего качества длится дольше, чем радость от
              низкой цены.
            </p>
          </div>
          <img
            className={styles.cover}
            src='https://s3-alpha-sig.figma.com/img/a5f9/2536/f6db5ef144d05ee8b36b38c6f98890c6?Expires=1702252800&Signature=gv-ROiKWG7GIfVfgdib0YVAqm1F-e64v8K3vSxLGAmAjxLjonXonW-wyWY-imKAT8wctbNG73PmIrIVMGSjSbH60Ps0CNu1i5jJhf~DS1NljBkEtc2nkZvTCi3USVprAqlsKrOi~yYEKLjZcRLsfXb-~GiIswPzcjZKo9vzZxMlVkv4OknBOyimAiEdUd0lutoRVpa3MScGGKXTuqZDlnqtyY2U4PGAWRuvTg-bMNGLSc2DWoKotJQJYdkws-6LCV-tB1YNIkCvFKcat6dyDaC6VYT~TNBugcPLEk1KE0urKP0-CUE64J55DMXpIyBoR~e9bvDnQLnF6S3jTF6aYnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            alt='About cover image'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
