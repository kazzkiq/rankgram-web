import { calculatePercentage } from "../helpers/Numbers";

async function getAll() {
  const rawUsers = await (await fetch("/api/bbb21/users.json")).json();
  
  rawUsers.sort((a, b) => (a.followers < b.followers) ? 1 : -1);
  rawUsers.forEach(user => {
    if (user.stats.length > 1) {
      user.percentage = calculatePercentage(user.stats[0].value, user.stats[user.stats.length - 1].value);
    } else {
      user.percentage = 0;
    }
  });
  
  console.log(rawUsers);

  return rawUsers;
}

export function UsersService() {
  return {
    getAll,
  }
}
