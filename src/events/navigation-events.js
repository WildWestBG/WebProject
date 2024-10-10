import { ABOUT, CATEGORIES, CONTAINER_SELECTOR, FAVORITES, HOME } from '../common/constants.js';
import { loadCategories, loadCategory, loadMovies, loadSingleMovie } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toCategoriesView } from '../views/category-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView, toSingleMovieView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';

// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    /* if the app supports error login, use default to log mapping errors */
    default: return null;
  }

};

export const renderMovieDetails = async (id = null) => {
  const movie = await loadSingleMovie(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
};

export const renderCategory = async (categoryId = null) => {
  const category = await loadCategory(categoryId);
  const movies = await loadMovies(category.id);
  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = async () => {
  const categories = await loadCategories();
  console.log(categories);

  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
};

const renderFavorites = async () => {
  const favorites = getFavorites();

  const movies = favorites.map(async id => await loadSingleMovie(id));

  const moviesData = await Promise.all(movies);

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(moviesData);
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
