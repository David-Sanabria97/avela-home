import Image from "next/image";
import Link from "next/link";
import styles from "./Collections.module.scss";
import { COLLECTIONS } from "@/constants/collections";

interface CollectionsProps {
  /** Colección a excluir (en la página de una colección: "Otras colecciones"). */
  exclude?: string;
  compact?: boolean;
}

export default function Collections({ exclude, compact = false }: CollectionsProps) {
  const list = COLLECTIONS.filter((c) => c.id !== exclude);

  return (
    <ul className={compact ? styles.gridCompact : styles.grid}>
      {list.map((col) => (
        <li key={col.id} className={styles.item}>
          <Link href={`/colecciones/${col.id}`} className={styles.card}>
            <Image
              src={col.image}
              alt=""
              className={styles.image}
              sizes={
                compact
                  ? "(max-width: 640px) 50vw, 220px"
                  : "(max-width: 640px) 100vw, 360px"
              }
            />
            {compact ? (
              <span className={styles.nameCompact}>{col.name}</span>
            ) : (
              <>
                <span className={styles.row}>
                  <span className={styles.name}>{col.name}</span>
                  <span className={styles.count}>
                    {col.aromas.length} aromas
                  </span>
                </span>
                <span className={styles.tagline}>{col.tagline}</span>
                <span className={styles.cta}>Arma tu vela →</span>
              </>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
