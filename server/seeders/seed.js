const db = require('../config/connections');
const { User, Book, Marker, BookRating, Category, Comment} = require('../models');
const userSeeds = require('./userSeeds.json');
const bookSeeds = require('./bookSeeds.json');
const commentSeeds = require('./commentSeeds.json');

db.once('open', async () => {
  try {
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
