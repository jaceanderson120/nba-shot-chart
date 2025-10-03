"use client";
import styles from "@/styles/Header.module.css";

export default function Player({ path, playerName }) {
  return (
    <div className={styles.playerContainer}>
      <img src={path} alt={playerName} className={styles.playerImage} />
    </div>
  );
}
