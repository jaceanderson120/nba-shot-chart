export default function NbaTeamLogo({ path, teamName }) {
  return (
    <div className="nba-logo">
      <img src={path} alt={teamName}></img>
    </div>
  );
}
