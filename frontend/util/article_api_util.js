export const getArticles = category => (
  $.ajax({
    method: 'GET',
    url: '/api/articles',
    data: category
  })
);

export const getArticle = id => (
  $.ajax({
    method: 'GET',
    url: `/api/articles/${id}`,
  })
);
