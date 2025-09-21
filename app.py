from fastapi import FastAPI
from nba_api.stats.endpoints import playercareerstats, shotchartdetail, teamdetails, leaguedashteamstats, leaguedashplayerstats, leaguedashlineups
import pandas as pd

app = FastAPI()

@app.get("/player/{player_id}/career")
def get_player_career(player_id: int):
    """Fetch career stats for a player (e.g., 2544 = LeBron James)"""
    career = playercareerstats.PlayerCareerStats(player_id=player_id)
    df = career.get_data_frames()[0]
    return df.to_dict(orient="records")

@app.get("/player/{player_id}/shots")
def get_shot_chart(player_id: int, season: str = "2023-24"):
    """Fetch shot chart data for a player in a given season"""
    shots = shotchartdetail.ShotChartDetail(
        team_id=0,
        player_id=player_id,
        season_type_all_star="Regular Season",
        season_nullable=season,
        context_measure_simple="FGA"  # all field goal attempts
    )
    df = shots.get_data_frames()[0]
    return df.to_dict(orient="records")