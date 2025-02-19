import styles from "../statics/ArticleGrid.module.css";
import fondoelsitio from "../assets/fondo-elsitio.png";
import fondowine from "../assets/fondowine.png";
import fondosophie from "../assets/fondosophie.png";
import fondosunne from "../assets/fondosunne.png";



interface Article {
  category: string
  title: string
  imageUrl: string
  href: string
}

const articles: Article[] = [
  {
    category: "PIZZA",
    title: "5 aplicaciones gastronómicas que ofrecen lo mejor de tu ciudad",
    imageUrl: fondoelsitio,
    href: "#",
  },
  {
    category: "CÓMO HACERLO",
    title: "Organiza tus dispositivos Apple para Instagram",
    imageUrl: fondowine,
    href: "#",
  },
  {
    category: "POTENCIA DEL PEDAL",
    title: "Aplicaciones de mapas para el mejor modo de transporte",
    imageUrl: fondosophie,
    href: "#",
  },
  {
    category: "VACACIONES",
    title: "Nuestra selección de aplicaciones para ayudarte a escapar de las aplicaciones",
    imageUrl: fondosunne,
    href: "#",
  },
]

export default function ArticleGrid() {
  return (
    <div className="bodygrid" id="jobs">
      <div className={styles.gridContainer}>
        {articles.map((article, index) => (
          <a key={index} href={article.href} className={`${styles.articleCard} ${styles[`article${index + 1}`]}`}>
            <div className={styles.imageContainer}>
              <img src={article.imageUrl || "/placeholder.svg"} alt={article.title} className={styles.image} />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <span className={styles.category}>{article.category}</span>
              <h2 className={styles.title}>{article.title}</h2>
            </div>
          </div>
        </a>
      ))}
    </div>
    </div>
    
  )
}

