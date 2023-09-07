const users = [
    {
      name: 'Користувач 1',
      balance: 100,
      friends: ['Друг 1', 'Друг 2'],
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Користувач 2',
      balance: 200,
      friends: ['Друг 1', 'Друг 3'],
      skills: ['CSS', 'Python'],
    },
    {
      name: 'Користувач 3',
      balance: 150,
      friends: ['Друг 2', 'Друг 4'],
      skills: ['JavaScript', 'Java'],
    },
  ];
   console.log( totalBalance);


  const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
  

  function getUsersWithFriendName(friendName) {
    return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
  }
    console.log( getUsersWithFriendName('Друг 1'));


  const usersSortedByFriends = users.slice().sort((a, b) => b.friends.length - a.friends.length).map(user => user.name);
    console.log( usersSortedByFriends);


  const uniqueSkills = [...new Set(users.flatMap(user => user.skills))].sort();
  
  console.log( uniqueSkills);