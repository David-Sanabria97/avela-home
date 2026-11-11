import styles from "./ExperienceBar.module.scss";

const ITEMS = [
  { title: "Cera de soya", desc: "Combustión limpia y lenta" },
  { title: "Hasta +45 horas", desc: "Según el empaque que elijas" },
  { title: "Envíos a toda Colombia", desc: "Pedido directo por WhatsApp" },
];

export default function ExperienceBar() {
  return (
    <div className={styles.wrap}>
      <ul className={styles.bar}>
        {ITEMS.map((item) => (
          <li key={item.title} className={styles.item}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.desc}>{item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
