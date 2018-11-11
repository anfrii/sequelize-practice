module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    isPlaying: DataTypes.BOOLEAN,
    name: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'games'
  });
  Game.associate = function({ User }) {
    Game.belongsTo(User)
  };
  return Game;
};