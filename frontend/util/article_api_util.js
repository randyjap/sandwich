export const getArticles = () => (
  $.ajax({
    method: 'GET',
    url: '/api/articles'
  })
);

export const getArticle = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/articles/${id}`,
  })
);
