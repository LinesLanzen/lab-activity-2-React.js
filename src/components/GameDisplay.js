import React from 'react';

const GameDisplay = () => {
  const games = [
    {
      title: "The Witcher 3: Wild Hunt",
      description: "A story-driven open world RPG...",
      status: "released",
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46303.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.abbf704e-3676-4fb7-9f68-f4425de5df24?q=90&w=480&h=270"
    },
    {
      title: "Cyberpunk 2077",
      description: "An open-world, action-adventure story",
      status: "released",
      imageUrl: "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg"
    },
    {
      title: "GWENT: The Witcher Card Game",
      description: "A card game of choices and consequences",
      status: "unavailable",
      imageUrl: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2016/07/25/1331808026491_2/promotional-poster-for-gwent-the-card-game-based-on-the-witcher-video-game-series"
    }
  ];

  const renderStatus = (status) => {
    switch (status) {
      case 'unavailable':
        return <div className="game-status unavailable">Currently Unavailable</div>;
      case 'released':
        return <div className="game-status released">Available Now</div>;
      case 'upcoming':
        return <div className="game-status upcoming">Coming Soon</div>;
      // Add more cases as needed
      default:
        return null;
    }
  };

  return (
    <div className="games-display">
      {games.map((game, index) => (
        <div key={index} className={`game-card ${game.status}`}>
          <img src={game.imageUrl} alt={game.title} className="game-image" />
          <div className="game-info">
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            {renderStatus(game.status)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameDisplay;
