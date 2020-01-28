import { FriendDatabase } from "./db/FrinedDatabase";

const db = new FriendDatabase();

db.transaction('rw', db.friends, async() => {

  if ((await db.friends.where({name: 'Josephine'}).count()) === 0) {
      const id = await db.friends.add({name: "Josephine", age: 21});
      console.log(`Addded friend with id ${id}`);
  }

    const youngFriends = await db.friends.where("age").below(25).toArray();

    console.log("My young friends: " + JSON.stringify(youngFriends));

}).catch(e => {
    console.log(e.stack || e);
});
