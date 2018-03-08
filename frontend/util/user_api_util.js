export const updateUser = ( user ) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: {user: user},
  });
};

export const updateUserAvatar = ( user ) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    contentType: false,
    processData: false,
    data: user,
  });
};

export const getUser = ( id ) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const addFollow = ( follow ) => {
  return $.ajax({
    method: 'POST',
    url: `api/follows`,
    data: {follow: follow}
  });
};

export const deleteFollow = ( follow ) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${follow.id}`,
    data: { follow }
  });
};
