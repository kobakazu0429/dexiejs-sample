import Dexie from "dexie";

export interface Friend {
  id: number;
  name: string;
  age: number;
}

export class FriendDatabase extends Dexie {
  public friends: Dexie.Table<Partial<Friend>, number>;
  public constructor() {
    super("FriendDatabase");
    this.version(1).stores({
      friends: "++id,name,age"
    });
    this.friends = this.table("friends");
  }
}
