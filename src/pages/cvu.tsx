import styles from "../statics/cvu.module.css";
import cvSpanish from "../assets/cvespañol.pdf";
import cvEnglish from "../assets/cvingles.pdf";
import { Slide, Fade } from "react-awesome-reveal";
export default function CVU() {
  return (
    <div className={styles.CVU} id="section-cvu">
      <Fade><h1 className={styles.titulo2}>CURRICULUM VITAE</h1></Fade>

      <div className={styles.container1} id="certificados1">
        <Slide direction="left"><div className={styles.card}>
          <div className={styles.card__image1}></div>
          <div className={styles.card__content}>
            <a href={cvSpanish} download="LuciaMirandacvSpanish">
              <button className={styles.button1}>Download</button>
            </a>
            <p className={styles.card__describe}>This is my CV in Spanish version</p>
          </div>
        </div></Slide>

        <Slide direction="right"><div className={styles.card}>
          <div className={styles.card__image2}></div>
          <div className={styles.card__content}>
            <a href={cvEnglish} download="LuciaMirandacvEnglish">
              <button className={styles.button1}>Download</button>
            </a>
            <p className={styles.card__describe}>This is my CV in English version</p>
          </div>
        </div></Slide>
      </div>

     
    </div>
  );
}
