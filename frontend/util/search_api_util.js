export const searchUsers = ( query ) => {

  return $.ajax({
    method: 'GET',
    url: `/api/users/search`,
    data: {query: query},
  });
};
