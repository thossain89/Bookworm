const db = require('../config/connections');
const { User, Book, Marker, BookRating, Category, Comment} = require('../models');
const userSeeds = require('./userSeeds.json');
const bookSeeds = require('./bookSeeds.json');


db.once('open', async () => {
  try {
    await Book.deleteMany({});
    await User.deleteMany({});

    const users = await User.insertMany(userSeeds);
    const books = await Book.insertMany(bookSeeds);
    
    for (newBook of books) {
      // randomly add each book to a user
      const tempUser = users[Math.floor(Math.random() * users.length)];
      newBook.addedBy = tempUser._id;
      await newBook.save(); 
      
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
