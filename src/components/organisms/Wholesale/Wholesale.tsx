import { WHOLESALE_WHATSAPP_URL } from "@/hooks/useWhatsApp";
import styles from "./Wholesale.module.scss";

export default function Wholesale() {
  return (
    <section id="mayoristas" className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.text}>
          <span className={styles.kicker}>
            Para tiendas, eventos y empresas
          </span>
          <h2 className={styles.title}>Velas para tu tienda, evento o empresa.</h2>
          <p className={styles.desc}>
            Recordatorios para bodas, baby showers y eventos, regalos
            corporativos y velas al por mayor para tu tienda, con empaque y
            aroma a elección. Te enviamos la
            lista de precios por WhatsApp.
          </p>
        </div>
        <a
          href={WHOLESALE_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Solicitar precios por mayor
        </a>
      </div>
    </section>
  );
}
