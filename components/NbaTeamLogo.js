"use client";
import styles from "@/styles/Header.module.css";

export default function NbaTeamLogo({ path, teamName }) {
  return (
    <div className={styles.logoContainer}>
      <img src={path} alt={teamName} className={styles.logoImage} />
    </div>
  );
}
