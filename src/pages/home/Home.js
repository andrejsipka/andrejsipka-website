// Styles
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={`${styles.Home__wrapper} spacing flex direction-column justify-center items-center`}>
        <div className={styles.content}>
          <span className="paragraph text__highlight">Hello. I am Andrej</span>
          <header className={styles.header}>
            <h1 className={`heading-primary ${styles['header__name']}`}>
              Young, creative front-end developer based in Denmark
            </h1>
          </header>

          <section className={styles.about}>
            <div className={`${styles.about__portrait} u-margin-bottom--high`}></div>
            <h2 className="heading-secondary u-margin-bottom--small">About</h2>
            <p className="paragraph u-margin-bottom--medium">
              I’m twenty-one-year-old climber, runner and tech lover. With <span className="text__highlight">passion</span>, I’m building interactive, accessible websites and single-page apps. More than ever right now, companies and brands are using websites as a platform to build their online presence and I am here with the set of tools to build them.
            </p>

            <div className={`${styles['about__toolbox']} u-margin-bottom--medium`}>
              <h3 className="heading-tertiary u-margin-bottom--small">My set of tools</h3>
              <p className="paragraph"><span className="text__highlight">ReactJS, ES6, semantic HTML, CSS, SCSS, Angular 2+, Firebase</span></p>
            </div>

            <p className="paragraph">
              And still growing.
              PS: Good experience and neat design matter to me. We might have a talk.
            </p>
          </section>

          <section className={styles.present}>
            <h2 className="heading-secondary u-margin-bottom--small">Present</h2>
            <ul className={styles['present__list']}>
              <li>Working at AutoPi.io as front-end developer, Aalborg, Denmark</li>
              <li>Currently hyped for <span className="text__highlight">ReactJS</span></li>
            </ul>
          </section>

          <section className={styles.work}>
            <h2 className="heading-secondary u-margin-bottom--small">Work</h2>
            <p className="paragraph u-margin-bottom--high">
              It’s a combination of good music and translation of the mock-ups by using code.
            </p>

            <div className="flex justify-center">
              <button className="button">Portfolio</button>
            </div>
          </section>
        </div>
      </div>

      <footer className={`${styles.footer} flex justify-center items-center`}>
        <div className={`${styles.footer__wrapper} spacing`}>
          <h1 className="heading-primary u-margin-bottom--high">Get in touch</h1>

          <ul className={`${styles['footer__list']} flex justify-between items-center`}>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" /></svg>
              <span>Email</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              <span>GitHub</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              <span>Linkedin</span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;

