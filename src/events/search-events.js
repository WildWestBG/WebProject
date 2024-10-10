import { CONTAINER_SELECTOR } from '../common/constants.js';
import { searchBarMovies } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

export const renderSearchItems = async (searchTerm) => {
  const movies = await searchBarMovies(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(movies, searchTerm);
};
