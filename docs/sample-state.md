# Sample State

```js

{
  session: {
    currentUser: {
      id: 1,
      username: 'cashmerechris'
    }
  },
  currentUser: {
    id: 1,
    username: 'cashmerechris',
    avatarURL: "chris.png",
    name: 'Chris Hakos',
    bio: 'Some shit',
    photos: [1, ...],
    likes: [1, ...],
    comments: [1, ...]
    followingCount: 2
    following: {
        2: {
          id: 2,
          username: 'samir',
          avatar: 'samir.png',
          followsCurrentUser: true,
        },
        3: {
          id: 3,
          username: 'larrydavid'
          avatar: 'larry.png'
          followsCurrentUser: false
        }
    }
    followersCount: 2
    followers: {
        2: {
          id: 2,
          username: 'samir',
          avatar: 'samir.png',
          currentUserfollows: true
        },
        4: {
          id: 4,
          username: 'henry',
          avatar: 'henry.png',
          currentUserfollows: false
        }
    }
  },
  user: {
    id: 1,
    username: 'differentguy',
    avatarURL: "chris.png",
    name: 'Chris Hakos',
    bio: 'Some shit',
    photos: [1, ...],
    likes: [1, ...],
    comments: [1, ...]
    followingCount: 2
    following: {
        2: {
          id: 2,
          username: 'samir',
          avatar: 'samir.png',
          followsCurrentUser: true,
        },
        3: {
          id: 3,
          username: 'larrydavid'
          avatar: 'larry.png'
          followsCurrentUser: false
        }
    }
    followersCount: 2
    followers: {
        2: {
          id: 2,
          username: 'samir',
          avatar: 'samir.png',
          currentUserfollows: true
        },
        4: {
          id: 4,
          username: 'henry',
          avatar: 'henry.png',
          currentUserfollows: false
        }
    }
  },
  photo: {
    id: 1,
    userID: 1,
    photoUrl: 'by_the_beach.png',
    caption: 'Coastline Sunset',
    likers: [2, ...],
    numLikes: 25,
    comments: {
      1: {
        username: 'thelarrydavid',
        body: 'Nice time for a glass of milk'
      },
      2: {
        username: 'henry',
        body: 'cartwheels are for the faint of heart'
      }
    }
  }
}
