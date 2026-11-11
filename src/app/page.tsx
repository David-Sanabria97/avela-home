import Hero from "@/components/organisms/Hero/Hero";
import ExperienceBar from "@/components/organisms/ExperienceBar/ExperienceBar";
import Collections from "@/components/organisms/Collections/Collections";
import Wholesale from "@/components/organisms/Wholesale/Wholesale";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceBar />
      <section id="colecciones" className={styles.collections}>
        <div className={styles.head}>
          <h2 className={styles.title}>Colecciones</h2>
          <span className={styles.hint}>Abre una y arma tu vela</span>
        </div>
        <Collections />
      </section>
      <Wholesale />
    </main>
  );
}
