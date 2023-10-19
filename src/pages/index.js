import styles from "@/styles/index/index.module.scss";
import Character from "@/components/character/Character";
export default function Home() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.middle}>
          Folio
        
        </div>
        <Character />
      </div>
    </>
  );
}
