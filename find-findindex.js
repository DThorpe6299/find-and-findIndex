/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  usersArray.find(function(userArray){    //the solution says to use 'user' as the parameter for the callback but I don't think that works for a dynamic array so I don't think it makes a difference.
    return usersArray.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const removedUser = usersArray.findIndex(function(usersArray){
    return usersArray.username === username;
  })
  if(removedUser === -1) return;
  
  return usersArray.splice(removedUser)[0];//no second value because since i = 0 in arr[i] so it will only display removedUser.
}