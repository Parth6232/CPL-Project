import React, { useState } from "react";

function News() {
  const newsData = [
    {
      id: 1,
      title: "India wins thrilling match against Pakistan",
      description: "In a nail-biting finish, India clinched victory over Pakistan by 5 runs.",
      date: "Aug 30, 2025",
      source: "ESPN"
    },
    {
      id: 2,
      title: "AI startup raises $50M in Series B funding",
      description: "A Silicon Valley AI startup has raised significant funding to expand its global operations.",
      date: "Aug 29, 2025",
      source: "TechCrunch"
    },
    {
      id: 3,
      title: "New electric car model launched in India",
      description: "The EV market in India sees a boost as a new electric car hits the roads.",
      date: "Aug 28, 2025",
      source: "Times of India"
    },
    {
      id: 4,
      title: "NASA announces new mission to Mars",
      description: "NASA revealed its plan for the next Mars mission set for 2027.",
      date: "Aug 27, 2025",
      source: "NASA"
    },
    {
      id: 5,
      title: "Stock market hits record high",
      description: "Global markets surged today, hitting an all-time record.",
      date: "Aug 26, 2025",
      source: "Bloomberg"
    },
    {
      id: 6,
      title: "Cricket World Cup 2027 schedule released",
      description: "The ICC has announced the schedule for the 2027 Cricket World Cup.",
      date: "Aug 25, 2025",
      source: "ICC"
    },
    {
      id: 7,
      title: "New smartphone breaks sales record",
      description: "The latest flagship smartphone sold 1M units within 48 hours.",
      date: "Aug 24, 2025",
      source: "GSM Arena"
    },
    {
      id: 8,
      title: "Olympics 2028 to feature new sports",
      description: "Several new sports will be introduced in the 2028 Olympics.",
      date: "Aug 23, 2025",
      source: "BBC Sport"
    },
    {
      id: 9,
      title: "Global temperatures hit record high",
      description: "Climate scientists report that this summer has been the hottest on record.",
      date: "Aug 22, 2025",
      source: "National Geographic"
    },
    {
      id: 10,
      title: "India launches 6G trials",
      description: "Telecom companies in India have begun testing 6G technology.",
      date: "Aug 21, 2025",
      source: "Economic Times"
    },
    {
      id: 11,
      title: "Major cybersecurity attack foiled",
      description: "Authorities prevented a massive cyber attack on global banks.",
      date: "Aug 20, 2025",
      source: "Reuters"
    },
    {
      id: 12,
      title: "World’s tallest building opens",
      description: "A new skyscraper has claimed the title of the tallest building in the world.",
      date: "Aug 19, 2025",
      source: "CNN"
    },
    {
      id: 13,
      title: "Breakthrough in cancer treatment",
      description: "Scientists announce a major breakthrough in cancer immunotherapy.",
      date: "Aug 18, 2025",
      source: "Medical News Today"
    },
    {
      id: 14,
      title: "Bitcoin crosses $100,000",
      description: "The cryptocurrency market surged as Bitcoin crossed $100K for the first time.",
      date: "Aug 17, 2025",
      source: "CoinDesk"
    },
    {
      id: 15,
      title: "FIFA World Cup 2030 host announced",
      description: "Spain, Portugal, and Morocco to jointly host FIFA World Cup 2030.",
      date: "Aug 16, 2025",
      source: "FIFA"
    },
    {
      id: 16,
      title: "New record set in athletics",
      description: "An athlete broke the world record in the 100m sprint.",
      date: "Aug 15, 2025",
      source: "Olympics"
    },
    {
      id: 17,
      title: "Electric planes take first test flight",
      description: "The aviation industry is moving towards green energy with electric planes.",
      date: "Aug 14, 2025",
      source: "BBC News"
    },
    {
      id: 18,
      title: "Hollywood movie breaks box office records",
      description: "A new sci-fi movie grossed $1B in just 10 days.",
      date: "Aug 13, 2025",
      source: "Hollywood Reporter"
    },
    {
      id: 19,
      title: "Massive rainfall hits Mumbai",
      description: "Mumbai witnessed record-breaking rainfall, causing severe flooding.",
      date: "Aug 12, 2025",
      source: "NDTV"
    },
    {
      id: 20,
      title: "Tech giant announces VR headset",
      description: "A major tech company unveiled its next-generation VR headset.",
      date: "Aug 11, 2025",
      source: "The Verge"
    }
  ];

  const [likedNews, setLikedNews] = useState({});

  const toggleLike = (id) => {
    setLikedNews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-white">Latest News</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{news.title}</h3>
            <p className="text-gray-400 mb-3">{news.description}</p>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{news.date}</span>
              <span>{news.source}</span>
            </div>

            {/* Like Button with Flaticon CDN */}
            <button
              onClick={() => toggleLike(news.id)}
              className="mt-3 flex items-center gap-2 text-sm font-medium transition"
            >
              <img
                src={
                  likedNews[news.id]
                    ? "https://cdn-icons-png.flaticon.com/512/833/833472.png" // filled heart
                    : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png" // outline heart
                }
                alt="like"
                className="w-6 h-6"
              />
              {likedNews[news.id] ? "Liked" : "Like"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
