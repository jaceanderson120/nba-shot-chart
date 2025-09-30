import Division from "@/components/Division";
import NbaTeamLogo from "@/components/NbaTeamLogo";

export default function StatsByTeam() {
  return (
    <>
      <h1>View Team Stats</h1>

      <div>
        <h2>Eastern Conference</h2>
        <Division name={"Atlantic"}>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
        </Division>
        <Division name={"Central"}>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
        </Division>
        <Division name={"South East"}>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
        </Division>
      </div>
      <div>
        <h2>Western Conference</h2>
        <Division name={"North West"}>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
        </Division>
        <Division name={"Pacific"}>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
        </Division>
        <Division name={"South West"}>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
          <NbaTeamLogo></NbaTeamLogo>
        </Division>
      </div>
    </>
  );
}
