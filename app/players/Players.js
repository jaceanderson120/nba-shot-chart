"use client";

import styles from "@/styles/Header.module.css";

import { PLAYERS } from "@/lib/Players";
import Player from "@/components/Player";

export default function Players() {
  return (
    <div className={styles.container}>
      <h1>Players</h1>
      <div className={styles.playersContainer}>
        {Object.keys(PLAYERS).map((player) => {
          return (
            <Player
              key={player}
              playerName={player}
              path={PLAYERS[player].source}
            ></Player>
          );
        })}
      </div>
    </div>
  );
}
