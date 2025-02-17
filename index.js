/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * 1. getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let allMovieTitles = []; // array

  for (let i = 0; i < movies.length; i++) {
    allMovieTitles.push(movies[i].title);
  }
  return allMovieTitles; // outside for loop
}
// console.log(getAllMovieTitles(exampleMovies)) // print to console to test

// where in array of objects:
// "Toy Story 4",
//  title: "Toy Story 4",

/**
 * 2. getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highestMetascore = 0; // number

  for (let i = 0; i < movies.length; i++) {
    if (Number(movies[i].metascore) > highestMetascore) {
      highestMetascore = Number(movies[i].metascore);
    }
  }
  return highestMetascore; // outside for loop
}
// console.log(getHighestMetascore(exampleMovies)); // print to console to test

// where in array of objects:
// metascore: "84",

/**
 * 3. getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let averageIMDBRating = 0; // number

  for (let i = 0; i < movies.length; i++) {
    averageIMDBRating += Number(movies[i].imdbRating);
  }
  let totalRatings = averageIMDBRating/ movies.length;
  return totalRatings;
}
// console.log(getAverageIMDBRating(exampleMovies)); // print to console to test

// where in array of objects:
// imdbRating: "7.7",

/**
 * 4. countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let ratingCount = {};

  for (let i = 0; i < movies.length; i++) {
    if (ratingCount[movies[i].rated]) {
      ratingCount[movies[i].rated]++;
    } else {
      ratingCount[movies[i].rated] = 1;
    }
  }
  return ratingCount;
}
// console.log(countByRating(exampleMovies)); // print to console to test

// where in array of objects:
// rated: "G",

/**
 * 5. findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  if (movies.length === 0) {
    return null;
  }

  let movieById = {}; // object

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      return movieById = movies[i];
    }
  }
  return null;
}
// console.log(findById(exampleMovies, "tt1979376")); // print to console to test

// where in array of objects:
// imdbID: "tt1979376",
// title: "Toy Story 4",


/**
 * 6. filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  if (movies.length === 0) {
    return []; // empty array
  }

  let filteredGenre = []; // array

  for (let i = 0; i < movies.length; i++) {
    // if movie includes genre, case-insensitive
    if (movies[i].genre.toUpperCase().includes(genre.toUpperCase())) {
      filteredGenre.push(movies[i]);
    }
  }
  return filteredGenre; // outside for loop
}
// console.log(filterByGenre(exampleMovies, "Mystery")); // print to console to test
// where in array of objects:
// genre: "Animation, Adventure, Comedy, Drama, Family, Fantasy",


/**
 * 7. getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */

function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  if (movies.length === 0) {
    return []; // empty array if no movies
  }

  let moviesReleasedDateArr = [];

  // Accumulator #1
  // access year only for `released` as a number (not string)
  for (let i = 0; i < movies.length; i++) {
    let theYear = Number(movies[i].released.substr(7, movies[i].released.length -1));
    // re-factor extra lines of code into 1 variable `theYear` ^^:
    // Remove characters before the year. // These are all the years as numbers.
    // theYear = theYear.substr(7, theYear.length -1);
    // theYear = Number(theYear);
   
    // Returns all movie objects with a `released` year equal to or less than the given year.
    if (theYear <= year) {
      moviesReleasedDateArr.push(movies[i]);
    }
  }
  return moviesReleasedDateArr; // outside for loop
  
  // TODO: replace value for `released` in each object of movies array with `theYear` (number) instead of `21 June 2019` (string)

  // Accumulator #2
  // for (let i = 0; i < movies.length; i++) {
  //   console.log(movies[i].released.includes(year));
  //   // if year is equal to
  //   if (movies[i].released.includes(year)) {
  //     moviesReleasedDate.push(movies[i]);
  //     // if year is less than
  //   } else if (year < movies[i].released.includes(year)) {
  //     moviesReleasedDate.push(movies[i]);
  //   }
  // }
}
console.log(getAllMoviesReleasedAtOrBeforeYear(exampleMovies, 2000)); // print to console to test
// where in array of objects:
// released: "21 Jun 2019",
// title: "Toy Story 4",

/**
 * @christina - Resources used to help with problem #7:
 * @string - to substr - https://www.tracedynamics.com/javascript-remove-character-from-string/
 */

/**
 * 8. getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  if (movies.length === 0) {
    return null; // return null if no movies
  }

  // helper function - remove `notNum` characters
  function priceWithoutDollarSign(priceStr) {
    let price = "";
    for (let notNum of priceStr) {
      if (!isNaN (Number(notNum))) {
        price += notNum;
      }
    }
    return Number(price);
  }

  let highestBoxOfficeMovie = movies[0];
  for (let i = 0; i < movies.length; i++) {
    // use helper function to compare movies index to find highest
    if (priceWithoutDollarSign(movies[i].boxOffice) > priceWithoutDollarSign(highestBoxOfficeMovie.boxOffice)) {
      highestBoxOfficeMovie = movies[i];
    }
  }
  return highestBoxOfficeMovie.title; // outside for loop


  // TODO: Access the price only for `boxOffice`, as a number (not string) without the "$" symbol or commas.
  
  // remove dollar sign from string using split
  // priceWithoutDollarSign = movies[0].boxOffice.split();
  // priceWithoutDollarSign.shift();
  // console.log(priceWithoutDollarSign); // splits each character

  // // remove dollar sign from string using slice
  // priceWithoutDollarSign = movies[0].boxOffice.slice(1);
  // // use parseFloat to remove commas from string
  // priceWithoutDollarSign = parseFloat(priceWithoutDollarSign.replace(/,/g, ''));
  // // change string without dollar sign or commas to number ?
  // priceWithoutDollarSign = Number(priceWithoutDollarSign);
  // // console.log(priceWithoutDollarSign);

    // for (let i = 0; i < movies.length; i++) {
    //   if (priceWithoutDollarSign > highestBoxOfficeMovie) {
    //     highestBoxOfficeMovie = movies[i].title;
    //     return highestBoxOfficeMovie = movies[i].title;
    //   }

      // if (priceWithoutDollarSign > movies[i].boxOffice) {
      //   priceWithoutDollarSign = movies[i].title;
      // }
  }

  // TODO: This function is not looping, it's only getting the first index of the array of objects and returning the first one `Toy Story 4`.
console.log(getBiggestBoxOfficeMovie(exampleMovies)); // print to console to test
// where in array of objects:
// boxOffice: "$434,038,008",
// title: "Toy Story 4",

/**
 * @christina - Resources used to help with problems #7, #8:
 * @string - https://stackoverflow.com/questions/5788741/remove-commas-from-the-string-using-javascript
 * @array - https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
 */

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
