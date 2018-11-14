const express = require('express');
// we'll use morgan to log the HTTP layer
const morgan = require('morgan');
// we'll use body-parser's json() method to
// parse JSON data sent in requests to this app

const recipesRouter = require('./routes/recipesRouter');
const shoppingListRouter = require('./routes/shoppinglistRouter');

const app = express();


app.use(morgan('common'));
app.use(express.json());
app.use('/shopping-list', shoppingListRouter);
app.use('/recipes', recipesRouter);

// we're going to add some items to ShoppingList
// so there's some data to look at. Note that
// normally you wouldn't do this. Usually your
// server will simply expose the state of the
// underlying database.

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
