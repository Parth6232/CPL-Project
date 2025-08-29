import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { teamLogos } from "../teamLogos";

// 👇 Utility function to convert API startDate into IST
function formatMatchTime(timestamp) {
  if (!timestamp) return "";
  let date = new Date(Number(timestamp));
  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata", // 👈 Force IST
    timeZoneName: "short",
  });
}

function Home() {
  const [matchData, setMatchData] = useState([]);

  // 🟢 Tumhara purana static data same naam ke sath
  let data = {
    matchDetails: [
      {
        matchDetailsMap: {
          key: "Fri, 15 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116615,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "1st Match",
                matchFormat: "T20",
                startDate: "1755212400000",
                endDate: "1755225000000",
                state: "Complete",
                status: "St Kitts and Nevis Patriots won by 6 wkts",
                team1: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                team2: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                venueInfo: {
                  id: 96,
                  ground: "Warner Park",
                  city: "Basseterre, St Kitts",
                  timezone: "-04:00",
                },
                currBatTeamId: 302,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 121,
                    wickets: 10,
                    overs: 17.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 125,
                    wickets: 4,
                    overs: 15,
                  },
                },
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        adDetail: {
          name: "native_news_index_random_1",
          layout: "native_large",
          position: 1,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 16 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116624,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "2nd Match",
                matchFormat: "T20",
                startDate: "1755298800000",
                endDate: "1755311400000",
                state: "Complete",
                status: "Guyana Amazon Warriors won by 5 wkts",
                team1: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                team2: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                venueInfo: {
                  id: 96,
                  ground: "Warner Park",
                  city: "Basseterre, St Kitts",
                  timezone: "-04:00",
                },
                currBatTeamId: 159,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 153,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 154,
                    wickets: 5,
                    overs: 17.2,
                  },
                },
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 17 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116630,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "3rd Match",
                matchFormat: "T20",
                startDate: "1755385200000",
                endDate: "1755397800000",
                state: "Complete",
                status: "Antigua and Barbuda Falcons won by 6 wkts",
                team1: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                team2: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                venueInfo: {
                  id: 109,
                  ground: "Sir Vivian Richards Stadium",
                  city: "North Sound, Antigua",
                  timezone: "-04:00",
                },
                currBatTeamId: 1978,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 151,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 152,
                    wickets: 4,
                    overs: 19.4,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 116639,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "4th Match",
                matchFormat: "T20",
                startDate: "1755442800000",
                endDate: "1755455400000",
                state: "Complete",
                status: "Trinbago Knight Riders won by 12 runs",
                team1: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                team2: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                venueInfo: {
                  id: 96,
                  ground: "Warner Park",
                  city: "Basseterre, St Kitts",
                  timezone: "-04:00",
                },
                currBatTeamId: 271,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 231,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 219,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 18 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116648,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "5th Match",
                matchFormat: "T20",
                startDate: "1755471600000",
                endDate: "1755484200000",
                state: "Abandon",
                status: "Match abandoned due to wet outfield (with toss)",
                team1: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                team2: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                venueInfo: {
                  id: 109,
                  ground: "Sir Vivian Richards Stadium",
                  city: "North Sound, Antigua",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        adDetail: {
          name: "native_news_index_random_2",
          layout: "native_large",
          position: 4,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 20 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116657,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "6th Match",
                matchFormat: "T20",
                startDate: "1755644400000",
                endDate: "1755657000000",
                state: "Complete",
                status: "Saint Lucia Kings won by 3 runs",
                team1: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                team2: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                venueInfo: {
                  id: 96,
                  ground: "Warner Park",
                  city: "Basseterre, St Kitts",
                  timezone: "-04:00",
                },
                currBatTeamId: 263,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 200,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 197,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 21 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116660,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "7th Match",
                matchFormat: "T20",
                startDate: "1755730800000",
                endDate: "1755743400000",
                state: "Complete",
                status: "Antigua and Barbuda Falcons won by 8 runs",
                team1: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                team2: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                venueInfo: {
                  id: 109,
                  ground: "Sir Vivian Richards Stadium",
                  city: "North Sound, Antigua",
                  timezone: "-04:00",
                },
                currBatTeamId: 1978,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 167,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 159,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 22 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116666,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "8th Match",
                matchFormat: "T20",
                startDate: "1755817200000",
                endDate: "1755829800000",
                state: "Complete",
                status: "St Kitts and Nevis Patriots won by 12 runs",
                team1: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                team2: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                venueInfo: {
                  id: 96,
                  ground: "Warner Park",
                  city: "Basseterre, St Kitts",
                  timezone: "-04:00",
                },
                currBatTeamId: 302,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 174,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 162,
                    wickets: 10,
                    overs: 18.2,
                  },
                },
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 23 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116669,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "9th Match",
                matchFormat: "T20",
                startDate: "1755903600000",
                endDate: "1755916200000",
                state: "Complete",
                status: "Guyana Amazon Warriors won by 83 runs",
                team1: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                team2: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                venueInfo: {
                  id: 109,
                  ground: "Sir Vivian Richards Stadium",
                  city: "North Sound, Antigua",
                  timezone: "-04:00",
                },
                currBatTeamId: 159,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 211,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 128,
                    wickets: 10,
                    overs: 15.2,
                  },
                },
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 24 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116678,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "10th Match",
                matchFormat: "T20",
                startDate: "1755990000000",
                endDate: "1756002600000",
                state: "Complete",
                status: "Trinbago Knight Riders won by 18 runs",
                team1: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                team2: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                venueInfo: {
                  id: 59,
                  ground: "Daren Sammy National Cricket Stadium",
                  city: "Gros Islet, St Lucia",
                  timezone: "-04:00",
                },
                currBatTeamId: 271,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 183,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 165,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 116684,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "11th Match",
                matchFormat: "T20",
                startDate: "1756047600000",
                endDate: "1756060200000",
                state: "Complete",
                status: "Antigua and Barbuda Falcons won by 7 wkts",
                team1: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                team2: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                venueInfo: {
                  id: 109,
                  ground: "Sir Vivian Richards Stadium",
                  city: "North Sound, Antigua",
                  timezone: "-04:00",
                },
                currBatTeamId: 1978,
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 133,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 137,
                    wickets: 3,
                    overs: 19.4,
                  },
                },
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 25 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116687,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "12th Match",
                matchFormat: "T20",
                startDate: "1756076400000",
                endDate: "1756089000000",
                state: "Abandon",
                status:
                  "Match abandoned without a ball being bowled (with toss)",
                team1: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                team2: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                venueInfo: {
                  id: 59,
                  ground: "Daren Sammy National Cricket Stadium",
                  city: "Gros Islet, St Lucia",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 27 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116693,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "13th Match",
                matchFormat: "T20",
                startDate: "1756249200000",
                endDate: "1756261800000",
                state: "Preview",
                status: "Match starts at Aug 27, 23:00 GMT",
                team1: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                team2: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                venueInfo: {
                  id: 59,
                  ground: "Daren Sammy National Cricket Stadium",
                  city: "Gros Islet, St Lucia",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 28 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116696,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "14th Match",
                matchFormat: "T20",
                startDate: "1756335600000",
                endDate: "1756348200000",
                state: "Upcoming",
                status: "Match starts at Aug 28, 23:00 GMT",
                team1: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                team2: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                venueInfo: {
                  id: 500,
                  ground: "Brian Lara Stadium",
                  city: "Tarouba, Trinidad",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 29 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116702,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "15th Match",
                matchFormat: "T20",
                startDate: "1756422000000",
                endDate: "1756434600000",
                state: "Upcoming",
                status: "Match starts at Aug 29, 23:00 GMT",
                team1: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                team2: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                venueInfo: {
                  id: 59,
                  ground: "Daren Sammy National Cricket Stadium",
                  city: "Gros Islet, St Lucia",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 30 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116705,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "16th Match",
                matchFormat: "T20",
                startDate: "1756512000000",
                endDate: "1756524600000",
                state: "Upcoming",
                status: "Match starts at Aug 30, 00:00 GMT",
                team1: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                team2: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                venueInfo: {
                  id: 500,
                  ground: "Brian Lara Stadium",
                  city: "Tarouba, Trinidad",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 31 Aug 2025",
          match: [
            {
              matchInfo: {
                matchId: 116711,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "17th Match",
                matchFormat: "T20",
                startDate: "1756594800000",
                endDate: "1756607400000",
                state: "Upcoming",
                status: "Match starts at Aug 31, 23:00 GMT",
                team1: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                team2: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                venueInfo: {
                  id: 500,
                  ground: "Brian Lara Stadium",
                  city: "Tarouba, Trinidad",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
            {
              matchInfo: {
                matchId: 116720,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "18th Match",
                matchFormat: "T20",
                startDate: "1756652400000",
                endDate: "1756665000000",
                state: "Upcoming",
                status: "Match starts at Aug 31, 15:00 GMT",
                team1: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                team2: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                venueInfo: {
                  id: 59,
                  ground: "Daren Sammy National Cricket Stadium",
                  city: "Gros Islet, St Lucia",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 01 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116729,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "19th Match",
                matchFormat: "T20",
                startDate: "1756738800000",
                endDate: "1756751400000",
                state: "Upcoming",
                status: "Match starts at Sep 01, 15:00 GMT",
                team1: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                team2: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                venueInfo: {
                  id: 500,
                  ground: "Brian Lara Stadium",
                  city: "Tarouba, Trinidad",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 04 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116738,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "20th Match",
                matchFormat: "T20",
                startDate: "1756940400000",
                endDate: "1756953000000",
                state: "Upcoming",
                status: "Match starts at Sep 04, 23:00 GMT",
                team1: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                team2: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                venueInfo: {
                  id: 500,
                  ground: "Brian Lara Stadium",
                  city: "Tarouba, Trinidad",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 05 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116741,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "21st Match",
                matchFormat: "T20",
                startDate: "1757026800000",
                endDate: "1757039400000",
                state: "Upcoming",
                status: "Match starts at Sep 05, 23:00 GMT",
                team1: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                team2: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                venueInfo: {
                  id: 55,
                  ground: "Kensington Oval",
                  city: "Bridgetown, Barbados",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 06 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116750,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "22nd Match",
                matchFormat: "T20",
                startDate: "1757113200000",
                endDate: "1757125800000",
                state: "Upcoming",
                status: "Match starts at Sep 06, 23:00 GMT",
                team1: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                team2: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                venueInfo: {
                  id: 55,
                  ground: "Kensington Oval",
                  city: "Bridgetown, Barbados",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 07 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116759,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "23rd Match",
                matchFormat: "T20",
                startDate: "1757199600000",
                endDate: "1757212200000",
                state: "Upcoming",
                status: "Match starts at Sep 07, 23:00 GMT",
                team1: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                team2: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                venueInfo: {
                  id: 110,
                  ground: "Providence Stadium",
                  city: "Guyana",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
            {
              matchInfo: {
                matchId: 116765,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "24th Match",
                matchFormat: "T20",
                startDate: "1757257200000",
                endDate: "1757269800000",
                state: "Upcoming",
                status: "Match starts at Sep 07, 15:00 GMT",
                team1: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                team2: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                venueInfo: {
                  id: 55,
                  ground: "Kensington Oval",
                  city: "Bridgetown, Barbados",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 08 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116774,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "25th Match",
                matchFormat: "T20",
                startDate: "1757289600000",
                endDate: "1757302200000",
                state: "Upcoming",
                status: "Match starts at Sep 08, 00:00 GMT",
                team1: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                team2: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                venueInfo: {
                  id: 110,
                  ground: "Providence Stadium",
                  city: "Guyana",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 11 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116783,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "26th Match",
                matchFormat: "T20",
                startDate: "1757545200000",
                endDate: "1757557800000",
                state: "Upcoming",
                status: "Match starts at Sep 11, 23:00 GMT",
                team1: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                team2: {
                  teamId: 1978,
                  teamName: "Antigua and Barbuda Falcons",
                  teamSName: "ABF",
                  imageId: 507236,
                },
                venueInfo: {
                  id: 110,
                  ground: "Providence Stadium",
                  city: "Guyana",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 12 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116786,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "27th Match",
                matchFormat: "T20",
                startDate: "1757631600000",
                endDate: "1757644200000",
                state: "Upcoming",
                status: "Match starts at Sep 12, 23:00 GMT",
                team1: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                team2: {
                  teamId: 302,
                  teamName: "St Kitts and Nevis Patriots",
                  teamSName: "SNP",
                  imageId: 172351,
                },
                venueInfo: {
                  id: 55,
                  ground: "Kensington Oval",
                  city: "Bridgetown, Barbados",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 13 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116795,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "28th Match",
                matchFormat: "T20",
                startDate: "1757718000000",
                endDate: "1757730600000",
                state: "Upcoming",
                status: "Match starts at Sep 13, 23:00 GMT",
                team1: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                team2: {
                  teamId: 271,
                  teamName: "Trinbago Knight Riders",
                  teamSName: "TKR",
                  imageId: 172325,
                },
                venueInfo: {
                  id: 55,
                  ground: "Kensington Oval",
                  city: "Bridgetown, Barbados",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
            {
              matchInfo: {
                matchId: 116801,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "29th Match",
                matchFormat: "T20",
                startDate: "1757775600000",
                endDate: "1757788200000",
                state: "Upcoming",
                status: "Match starts at Sep 13, 15:00 GMT",
                team1: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                team2: {
                  teamId: 263,
                  teamName: "Saint Lucia Kings",
                  teamSName: "SLK",
                  imageId: 172316,
                },
                venueInfo: {
                  id: 110,
                  ground: "Providence Stadium",
                  city: "Guyana",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 15 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116810,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "30th Match",
                matchFormat: "T20",
                startDate: "1757890800000",
                endDate: "1757903400000",
                state: "Upcoming",
                status: "Match starts at Sep 15, 23:00 GMT",
                team1: {
                  teamId: 159,
                  teamName: "Guyana Amazon Warriors",
                  teamSName: "GAW",
                  imageId: 172227,
                },
                team2: {
                  teamId: 262,
                  teamName: "Barbados Royals",
                  teamSName: "BR",
                  imageId: 210485,
                },
                venueInfo: {
                  id: 110,
                  ground: "Providence Stadium",
                  city: "Guyana",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 17 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116813,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "Eliminator",
                matchFormat: "T20",
                startDate: "1758067200000",
                endDate: "1758079800000",
                state: "Upcoming",
                status: "Match starts at Sep 16, 00:00 GMT",
                team1: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                team2: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                venueInfo: {
                  id: 110,
                  ground: "Providence Stadium",
                  city: "Guyana",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 18 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116819,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "Qualifier 1",
                matchFormat: "T20",
                startDate: "1758153600000",
                endDate: "1758166200000",
                state: "Upcoming",
                status: "Match starts at Sep 17, 00:00 GMT",
                team1: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                team2: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                venueInfo: {
                  id: 110,
                  ground: "Providence Stadium",
                  city: "Guyana",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 20 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116822,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "Qualifier 2",
                matchFormat: "T20",
                startDate: "1758326400000",
                endDate: "1758339000000",
                state: "Upcoming",
                status: "Match starts at Sep 19, 00:00 GMT",
                team1: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                team2: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                venueInfo: {
                  id: 110,
                  ground: "Providence Stadium",
                  city: "Guyana",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 22 Sep 2025",
          match: [
            {
              matchInfo: {
                matchId: 116828,
                seriesId: 9575,
                seriesName: "Caribbean Premier League 2025",
                matchDesc: "Final",
                matchFormat: "T20",
                startDate: "1758499200000",
                endDate: "1758511800000",
                state: "Upcoming",
                status: "Match starts at Sep 21, 00:00 GMT",
                team1: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                team2: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                venueInfo: {
                  id: 110,
                  ground: "Providence Stadium",
                  city: "Guyana",
                  timezone: "-04:00",
                },
                seriesStartDt: "1755129600000",
                seriesEndDt: "1758585600000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9575,
        },
      },
    ],
    landingPosition: 22,
    appIndex: {
      seoTitle:
        "Caribbean Premier League 2025 live scores, schedule and results - Cricbuzz | Cricbuzz.com",
      webURL: "www.cricbuzz.com/cricket-series/",
    },
  };

  async function FetchMatchdata() {
    const url = "https://cricbuzz-cricket.p.rapidapi.com/series/v1/9575";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        console.warn("⚠️ API Request Failed:", response.status, response.statusText);

        if (response.status === 429) {
          console.error("🚨 API Quota Exceeded! Please change your API key.");
        }

        // 👇 fallback to tumhara static data
        let filterData = data.matchDetails.filter(
          (singleMatch) => singleMatch.matchDetailsMap
        );
        setMatchData(filterData);
        return;
      }

      const result = await response.json();
      console.log("✅ API Response:", result);

      let filterData = result.matchDetails?.filter(
        (singleMatch) => singleMatch.matchDetailsMap
      );

      setMatchData(filterData || []);
    } catch (error) {
      console.error("❌ API Fetch Error:", error);

      // 👇 fallback to tumhara static data
      let filterData = data.matchDetails.filter(
        (singleMatch) => singleMatch.matchDetailsMap
      );
      setMatchData(filterData);
    }
  }

  useEffect(() => {
    FetchMatchdata();
  }, []);

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold mb-6">Upcoming & Recent Matches</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {matchData?.map(({ matchDetailsMap: { match, key: date } }) =>
          match.map(
            ({
              matchInfo: {
                team1,
                team2,
                status,
                state,
                matchId,
                matchDesc,
                matchFormat,
                startDate,
              },
              matchScore,
            }) => (
              <Link
                key={matchId}
                to={`/matchDetail/${matchId}`}
                className="bg-gray-900 rounded-xl shadow-lg p-4 hover:scale-105 transition transform duration-300 block"
              >
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <p>
                    {matchFormat} {matchDesc}
                  </p>
                  <p>{date.split(" 2025")[0]}</p>
                </div>

                {/* Team 1 */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-8 h-8 object-contain"
                      src={teamLogos[team1.teamId]}
                      alt={team1.teamSName}
                    />
                    <p className="font-semibold">{team1.teamSName}</p>
                  </div>
                  {matchScore?.team1Score ? (
                    <p className="text-sm font-mono">
                      {matchScore?.team1Score?.inngs1?.runs}/
                      {matchScore?.team1Score?.inngs1?.wickets} (
                      {matchScore?.team1Score?.inngs1?.overs})
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                {/* Team 2 */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-8 h-8 object-contain"
                      src={teamLogos[team2.teamId]}
                      alt={team2.teamSName}
                    />
                    <p className="font-semibold">{team2.teamSName}</p>
                  </div>
                  {matchScore?.team2Score ? (
                    <p className="text-sm font-mono">
                      {matchScore?.team2Score?.inngs1?.runs}/
                      {matchScore?.team2Score?.inngs1?.wickets} (
                      {matchScore?.team2Score?.inngs1?.overs})
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                {/* Match Status */}
                <p className="text-gray-400 text-xs mt-2">
                  {state === "Complete"
                    ? status.split(" won")[0] === team1.teamName
                      ? team1.teamSName + " won " + status.split("won ")[1]
                      : team2.teamSName + " won " + status.split("won ")[1]
                    : `Match starts at ${formatMatchTime(startDate)}`}
                </p>
              </Link>
            )
          )
        )}
      </div>
    </div>
  );
}

export default Home;
