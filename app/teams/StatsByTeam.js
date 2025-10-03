"use client";

import Division from "@/components/Division";
import NbaTeamLogo from "@/components/NbaTeamLogo";
import { DIVISIONS } from "@/lib/Division";
import styles from "@/styles/Header.module.css";

export default function StatsByTeam() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>View Team Stats</h1>

      {Object.keys(DIVISIONS).map((conference) => (
        <div className={styles.conference} key={conference}>
          <h2 className={styles.conferenceTitle}>{conference}</h2>
          <div className={styles.divisionsContainer}>
            {Object.keys(DIVISIONS[conference]).map((divisionName) => (
              <Division key={divisionName} name={divisionName}>
                {DIVISIONS[conference][divisionName].map((team) => (
                  <NbaTeamLogo
                    key={team.name}
                    path={team.source}
                    teamName={team.name}
                  />
                ))}
              </Division>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
