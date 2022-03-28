const User = require('./User');
const Post = require('./post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User };