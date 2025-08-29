import React, { useEffect, useState } from "react";
import { teamLogos } from "../teamLogos";

function PointsTable() {
  
  let pointsTableData = {
    pointsTable: [
      {
        groupName: "Teams",
        pointsTableInfo: [
          {
            teamId: 1978,
            teamName: "ABF",
            matchesPlayed: 7,
            matchesWon: 3,
            matchesLost: 3,
            noRes: 1,
            points: 7,
            nrr: "-1.059",
            teamFullName: "Antigua and Barbuda Falcons",
            teamMatches: [
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1755212400000",
                result: "Loss by 6 wkts",
                opponentSName: "SNP",
                matchId: 116615,
                matchName: "1st Match",
                winner: 302,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1755385200000",
                result: "Won by 6 wkts",
                opponentSName: "BR",
                matchId: 116630,
                matchName: "3rd Match",
                winner: 1978,
                opponentId: 262,
                opponentImageId: 210485,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1755471600000",
                result: "Match abandoned due to wet outfield (with toss)",
                opponentSName: "SLK",
                matchId: 116648,
                matchName: "5th Match",
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1755730800000",
                result: "Won by 8 runs",
                opponentSName: "TKR",
                matchId: 116660,
                matchName: "7th Match",
                winner: 1978,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1755903600000",
                result: "Loss by 83 runs",
                opponentSName: "GAW",
                matchId: 116669,
                matchName: "9th Match",
                winner: 159,
                opponentId: 159,
                opponentImageId: 172227,
              },
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1756047600000",
                result: "Won by 7 wkts",
                opponentSName: "SNP",
                matchId: 116684,
                matchName: "11th Match",
                winner: 1978,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1756335600000",
                result: "Loss by 8 wkts",
                opponentSName: "TKR",
                matchId: 116696,
                matchName: "14th Match",
                winner: 271,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1756652400000",
                opponentSName: "SLK",
                matchId: 116720,
                matchName: "18th Match",
                winner: 1,
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1757113200000",
                opponentSName: "BR",
                matchId: 116750,
                matchName: "22nd Match",
                winner: 1,
                opponentId: 262,
                opponentImageId: 210485,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1757545200000",
                opponentSName: "GAW",
                matchId: 116783,
                matchName: "26th Match",
                winner: 1,
                opponentId: 159,
                opponentImageId: 172227,
              },
            ],
            form: ["A", "W", "L", "W", "L"],
            teamImageId: 507236,
          },
          {
            teamId: 271,
            teamName: "TKR",
            matchesPlayed: 4,
            matchesWon: 3,
            matchesLost: 1,
            points: 6,
            nrr: "+0.504",
            teamFullName: "Trinbago Knight Riders",
            teamMatches: [
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1755442800000",
                result: "Won by 12 runs",
                opponentSName: "SNP",
                matchId: 116639,
                matchName: "4th Match",
                winner: 271,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1755730800000",
                result: "Loss by 8 runs",
                opponentSName: "ABF",
                matchId: 116660,
                matchName: "7th Match",
                winner: 1978,
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1755990000000",
                result: "Won by 18 runs",
                opponentSName: "SLK",
                matchId: 116678,
                matchName: "10th Match",
                winner: 271,
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1756335600000",
                result: "Won by 8 wkts",
                opponentSName: "ABF",
                matchId: 116696,
                matchName: "14th Match",
                winner: 271,
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1756512000000",
                opponentSName: "BR",
                matchId: 116705,
                matchName: "16th Match",
                winner: 1,
                opponentId: 262,
                opponentImageId: 210485,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1756594800000",
                opponentSName: "GAW",
                matchId: 116711,
                matchName: "17th Match",
                winner: 1,
                opponentId: 159,
                opponentImageId: 172227,
              },
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1756738800000",
                opponentSName: "SNP",
                matchId: 116729,
                matchName: "19th Match",
                winner: 1,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1756940400000",
                opponentSName: "SLK",
                matchId: 116738,
                matchName: "20th Match",
                winner: 1,
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1757199600000",
                opponentSName: "GAW",
                matchId: 116759,
                matchName: "23rd Match",
                winner: 1,
                opponentId: 159,
                opponentImageId: 172227,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1757718000000",
                opponentSName: "BR",
                matchId: 116795,
                matchName: "28th Match",
                winner: 1,
                opponentId: 262,
                opponentImageId: 210485,
              },
            ],
            form: ["W", "L", "W", "W"],
            teamImageId: 172325,
          },
          {
            teamId: 263,
            teamName: "SLK",
            matchesPlayed: 5,
            matchesWon: 2,
            matchesLost: 1,
            noRes: 2,
            points: 6,
            nrr: "+0.065",
            teamFullName: "Saint Lucia Kings",
            teamMatches: [
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1755471600000",
                result: "Match abandoned due to wet outfield (with toss)",
                opponentSName: "ABF",
                matchId: 116648,
                matchName: "5th Match",
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1755644400000",
                result: "Won by 3 runs",
                opponentSName: "SNP",
                matchId: 116657,
                matchName: "6th Match",
                winner: 263,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1755990000000",
                result: "Loss by 18 runs",
                opponentSName: "TKR",
                matchId: 116678,
                matchName: "10th Match",
                winner: 271,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1756076400000",
                result: "Match abandoned without a ball bowled",
                opponentSName: "BR",
                matchId: 116687,
                matchName: "12th Match",
                opponentId: 262,
                opponentImageId: 210485,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1756249200000",
                result: "Won by 4 wkts",
                opponentSName: "GAW",
                matchId: 116693,
                matchName: "13th Match",
                winner: 263,
                opponentId: 159,
                opponentImageId: 172227,
              },
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1756422000000",
                opponentSName: "SNP",
                matchId: 116702,
                matchName: "15th Match",
                winner: 1,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1756652400000",
                opponentSName: "ABF",
                matchId: 116720,
                matchName: "18th Match",
                winner: 1,
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1756940400000",
                opponentSName: "TKR",
                matchId: 116738,
                matchName: "20th Match",
                winner: 1,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1757257200000",
                opponentSName: "BR",
                matchId: 116765,
                matchName: "24th Match",
                winner: 1,
                opponentId: 262,
                opponentImageId: 210485,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1757775600000",
                opponentSName: "GAW",
                matchId: 116801,
                matchName: "29th Match",
                winner: 1,
                opponentId: 159,
                opponentImageId: 172227,
              },
            ],
            form: ["A", "W", "L", "A", "W"],
            teamImageId: 172316,
          },
          {
            teamId: 159,
            teamName: "GAW",
            matchesPlayed: 3,
            matchesWon: 2,
            matchesLost: 1,
            points: 4,
            nrr: "+1.569",
            teamFullName: "Guyana Amazon Warriors",
            teamMatches: [
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1755298800000",
                result: "Won by 5 wkts",
                opponentSName: "SNP",
                matchId: 116624,
                matchName: "2nd Match",
                winner: 159,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1755903600000",
                result: "Won by 83 runs",
                opponentSName: "ABF",
                matchId: 116669,
                matchName: "9th Match",
                winner: 159,
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1756249200000",
                result: "Loss by 4 wkts",
                opponentSName: "SLK",
                matchId: 116693,
                matchName: "13th Match",
                winner: 263,
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1756594800000",
                opponentSName: "TKR",
                matchId: 116711,
                matchName: "17th Match",
                winner: 1,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1757026800000",
                opponentSName: "BR",
                matchId: 116741,
                matchName: "21st Match",
                winner: 1,
                opponentId: 262,
                opponentImageId: 210485,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1757199600000",
                opponentSName: "TKR",
                matchId: 116759,
                matchName: "23rd Match",
                winner: 1,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1757289600000",
                opponentSName: "SNP",
                matchId: 116774,
                matchName: "25th Match",
                winner: 1,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1757545200000",
                opponentSName: "ABF",
                matchId: 116783,
                matchName: "26th Match",
                winner: 1,
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1757775600000",
                opponentSName: "SLK",
                matchId: 116801,
                matchName: "29th Match",
                winner: 1,
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1757890800000",
                opponentSName: "BR",
                matchId: 116810,
                matchName: "30th Match",
                winner: 1,
                opponentId: 262,
                opponentImageId: 210485,
              },
            ],
            form: ["W", "W", "L"],
            teamImageId: 172227,
          },
          {
            teamId: 302,
            teamName: "SNP",
            matchesPlayed: 6,
            matchesWon: 2,
            matchesLost: 4,
            points: 4,
            nrr: "+0.115",
            teamFullName: "St Kitts and Nevis Patriots",
            teamMatches: [
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1755212400000",
                result: "Won by 6 wkts",
                opponentSName: "ABF",
                matchId: 116615,
                matchName: "1st Match",
                winner: 302,
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1755298800000",
                result: "Loss by 5 wkts",
                opponentSName: "GAW",
                matchId: 116624,
                matchName: "2nd Match",
                winner: 159,
                opponentId: 159,
                opponentImageId: 172227,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1755442800000",
                result: "Loss by 12 runs",
                opponentSName: "TKR",
                matchId: 116639,
                matchName: "4th Match",
                winner: 271,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1755644400000",
                result: "Loss by 3 runs",
                opponentSName: "SLK",
                matchId: 116657,
                matchName: "6th Match",
                winner: 263,
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1755817200000",
                result: "Won by 12 runs",
                opponentSName: "BR",
                matchId: 116666,
                matchName: "8th Match",
                winner: 302,
                opponentId: 262,
                opponentImageId: 210485,
              },
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1756047600000",
                result: "Loss by 7 wkts",
                opponentSName: "ABF",
                matchId: 116684,
                matchName: "11th Match",
                winner: 1978,
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1756422000000",
                opponentSName: "SLK",
                matchId: 116702,
                matchName: "15th Match",
                winner: 1,
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1756738800000",
                opponentSName: "TKR",
                matchId: 116729,
                matchName: "19th Match",
                winner: 1,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1757289600000",
                opponentSName: "GAW",
                matchId: 116774,
                matchName: "25th Match",
                winner: 1,
                opponentId: 159,
                opponentImageId: 172227,
              },
              {
                opponent: "Barbados Royals",
                startdt: "1757631600000",
                opponentSName: "BR",
                matchId: 116786,
                matchName: "27th Match",
                winner: 1,
                opponentId: 262,
                opponentImageId: 210485,
              },
            ],
            form: ["L", "L", "L", "W", "L"],
            teamImageId: 172351,
          },
          {
            teamId: 262,
            teamName: "BR",
            matchesPlayed: 3,
            matchesLost: 2,
            noRes: 1,
            points: 1,
            nrr: "-0.393",
            teamFullName: "Barbados Royals",
            teamMatches: [
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1755385200000",
                result: "Loss by 6 wkts",
                opponentSName: "ABF",
                matchId: 116630,
                matchName: "3rd Match",
                winner: 1978,
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1755817200000",
                result: "Loss by 12 runs",
                opponentSName: "SNP",
                matchId: 116666,
                matchName: "8th Match",
                winner: 302,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1756076400000",
                result: "Match abandoned without a ball bowled",
                opponentSName: "SLK",
                matchId: 116687,
                matchName: "12th Match",
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1756512000000",
                opponentSName: "TKR",
                matchId: 116705,
                matchName: "16th Match",
                winner: 1,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1757026800000",
                opponentSName: "GAW",
                matchId: 116741,
                matchName: "21st Match",
                winner: 1,
                opponentId: 159,
                opponentImageId: 172227,
              },
              {
                opponent: "Antigua and Barbuda Falcons",
                startdt: "1757113200000",
                opponentSName: "ABF",
                matchId: 116750,
                matchName: "22nd Match",
                winner: 1,
                opponentId: 1978,
                opponentImageId: 507236,
              },
              {
                opponent: "Saint Lucia Kings",
                startdt: "1757257200000",
                opponentSName: "SLK",
                matchId: 116765,
                matchName: "24th Match",
                winner: 1,
                opponentId: 263,
                opponentImageId: 172316,
              },
              {
                opponent: "St Kitts and Nevis Patriots",
                startdt: "1757631600000",
                opponentSName: "SNP",
                matchId: 116786,
                matchName: "27th Match",
                winner: 1,
                opponentId: 302,
                opponentImageId: 172351,
              },
              {
                opponent: "Trinbago Knight Riders",
                startdt: "1757718000000",
                opponentSName: "TKR",
                matchId: 116795,
                matchName: "28th Match",
                winner: 1,
                opponentId: 271,
                opponentImageId: 172325,
              },
              {
                opponent: "Guyana Amazon Warriors",
                startdt: "1757890800000",
                opponentSName: "GAW",
                matchId: 116810,
                matchName: "30th Match",
                winner: 1,
                opponentId: 159,
                opponentImageId: 172227,
              },
            ],
            form: ["L", "L", "A"],
            teamImageId: 210485,
          },
        ],
      },
    ],
    appIndex: {
      seoTitle: "Caribbean Premier League 2025 Points Table | Cricbuzz.com",
      webURL:
        "www.cricbuzz.com/cricket-series/9575/caribbean-premier-league-2025/points-table",
    },
  };

  const [tableData, setTableData] = useState([]);

  async function fetchPointsTable() {
    const url =
      "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/9575/points-table";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      console.log("API Response ===>", result); 

    
      if (result?.pointsTable?.[0]?.pointsTableInfo) {
        setTableData(result.pointsTable[0].pointsTableInfo);
      } else {
        
        setTableData(pointsTableData.pointsTable[0].pointsTableInfo);
      }
    } catch (error) {
      console.error("API fetch error:", error);
      
      setTableData(pointsTableData.pointsTable[0].pointsTableInfo);
    }
  }

  useEffect(() => {
    fetchPointsTable();
  }, []);

  return (
    <div className="w-full p-3">
      <table className="w-full border-collapse">
       
        <thead className="bg-gray-900/60 text-gray-200 text-sm sm:text-base">
          <tr className="h-[50px]">
            <th className="text-left pl-2 sm:pl-6 w-[30%]">Team</th>
            <th>M</th>
            <th>W</th>
            <th>L</th>
            <th>NRR</th>
            <th>Pts</th>
            <th className="text-center">Last 5</th>
          </tr>
        </thead>

       
        <tbody>
          {tableData && tableData.length > 0 ? (
            tableData.map(
              (
                {
                  teamId,
                  teamName,
                  matchesPlayed,
                  matchesWon,
                  matchesLost,
                  nrr,
                  points,
                  form,
                },
                i
              ) => (
                <tr
                  key={teamId}
                  className="h-[55px] border-t border-gray-700 hover:bg-gray-800/40 transition"
                >
                  
                  <td className="flex items-center gap-3 pl-2 sm:pl-6 py-2">
                    <span className="text-gray-400 w-4">{i + 1}</span>
                    <img
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      src={teamLogos[teamId] || ""}
                      alt={teamName}
                    />
                    <span className="font-semibold text-gray-100">{teamName}</span>
                  </td>

                  <td className="text-center">{matchesPlayed}</td>
                  <td className="text-center text-green-400">
                    {matchesWon > 0 ? matchesWon : 0}
                  </td>
                  <td className="text-center text-red-400">{matchesLost}</td>
                  <td className="text-center">{nrr}</td>
                  <td className="text-center font-bold text-yellow-400">{points}</td>

                  
                  <td className="flex justify-center gap-1">
                    {form &&
                      form
                        .slice()
                        .reverse()
                        .map((data, index) =>
                          data === "W" ? (
                            <i
                              key={index}
                              className="fi fi-ss-check-circle text-green-500 text-sm"
                            ></i>
                          ) : data === "L" ? (
                            <i
                              key={index}
                              className="fi fi-sr-cross-circle text-red-500 text-sm"
                            ></i>
                          ) : (
                            <i
                              key={index}
                              className="fi fi-sr-minus-circle text-gray-500 text-sm"
                            ></i>
                          )
                        )}
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-6 text-gray-400">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PointsTable;
