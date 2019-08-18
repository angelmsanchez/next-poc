const axios = require('axios');

module.exports = {
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
    const data = res.data;
    const shows = data.map(entry => entry.show);

    shows.forEach(show => {
      paths[`/post/${show.id}`] = { page: '/post/[id]', query: { id: show.id } };
    });

    return paths;
  }
};