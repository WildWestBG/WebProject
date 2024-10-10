export const loadCategories = async () => {
  const data = await fetch(`http://localhost:3000/categories`);
  const result = await data.json();
  return result;
};

export const loadCategory = async (id = null) => {
  const data = await fetch(`http://localhost:3000/categories/${id}`);
  const result = await data.json();
  return result;
}

export const loadMovies = async (categoryId = null) => {
  const data = await fetch(`http://localhost:3000/categories/${categoryId}/movies`);
  const result = await data.json();
  return result;
};

// export const loadMoviesDetails = (categoryId = null) => {
//   const movies = getMoviesFullInfo(categoryId);

//   return movies;
// };

export const loadSingleMovie = async (id) => {
  const data = await fetch(`http://localhost:3000/movies/${id}`);
  const result = await data.json();
  return result;
};

export const searchBarMovies = async (searchTerm = '') => {
  const data = searchTerm ? await fetch(`http://localhost:3000/movies?search=${searchTerm}`) : await fetch(`http://localhost:3000/movies`);
  const result = await data.json();
  return result;
};
