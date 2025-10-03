"use client";
import styles from "@/styles/Header.module.css";

export default function Division({ name, children }) {
  return (
    <div className={styles.division}>
      <h3 className={styles.divisionName}>{name}</h3>
      <div className={styles.teamsContainer}>{children}</div>
    </div>
  );
}
