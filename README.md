# Assignment 1 - ReactJS app.

Name: Sinéad Cleary

## Overview.

ReactJS App for listing movies and movie details.

### Features.
 
+ Top Rated page
+ Popular page
+ Watchlist page
+ List reccommended movies on movie details pages
+ List of translations for each movie
+ Ability to translate movie details page to an available translation language
+ Add and remove movies to watchlist

## Setup requirements.

Navigate to movies and run npm start

## API endpoints.

+ Top Rated page - /topRated
+ Popular page - /popular
+ Watchlist page - /movies/watchlist
+ Movie details translated - /movies/:id/:translationid
+ Translations list - /movies/:id/:languagecode-:countrycode
+ Recommended movies - /movie/:id/recommendations

## Routing.

+ /topRated - displayes movies sorted by rating
+ /popular - displays popular now movies
+ /movies/watchlist - displays all movies added to watchlist
+ /movies/:id/:translationid - displays movie details translated

## Independent learning

+ I attempted to include pagination, however it does not fully work. When changing page the listed movies do not change to reflect the change in page. (src/components/templateMovieListPage/index.js)
+ Used MUI Tabs in header (src/components/siteHeader/index.js)
+ Online references: https://mui.com/material-ui/
