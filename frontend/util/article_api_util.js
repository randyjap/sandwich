export const getArticles = () => (
  $.ajax({
    method: 'GET',
    url: '/api/articles'
  })
);
