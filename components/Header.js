"use client";

import { useState } from "react";
import Link from "next/link";

import StatsByTeam from "@/app/teams/StatsByTeam";
import Players from "@/app/players/Players";

import styles from "@/styles/Header.module.css";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            NBA Stats
          </Link>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li
              className={styles.navItem}
              onMouseEnter={() => setActiveDropdown("teams")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={styles.dropdownButton}>
                By Team
                <svg
                  className={styles.dropdownIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "teams" && (
                <div className={styles.dropdownPanel}>
                  <div className={styles.dropdownContent}>
                    <StatsByTeam />
                  </div>
                </div>
              )}
            </li>

            <li className={styles.navItem}>
              <Link href="/stats" className={styles.navLink}>
                Stats
              </Link>
            </li>

            <li
              className={styles.navItem}
              onMouseEnter={() => setActiveDropdown("players")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={styles.dropdownButton}>
                By Player
                <svg
                  className={styles.dropdownIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "players" && (
                <div className={styles.dropdownPanel}>
                  <div className={styles.dropdownContent}>
                    <Players />
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
