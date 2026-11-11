import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Avela Home · Velas artesanales · Bogotá y Flandes, Colombia</span>
      <span className={styles.links}>
        <a
          href="https://www.instagram.com/avela_home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        {" · "}
        <a
          href="https://wa.me/573176948380"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp +57 317 694 8380
        </a>
      </span>
    </footer>
  );
}
