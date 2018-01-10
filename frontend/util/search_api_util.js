export const searchUsers = ( query ) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search`,
    data: {query: query},
  });
};
