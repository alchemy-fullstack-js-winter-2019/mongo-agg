
import { isMainThread } from "worker_threads";
import { create } from "domain";
const chance = new Chance();



return Promise.all(
  [ ...Array(TOTAL_TWEETS)].map(() => {
    return Tweet.create({
      handle: chance.pickone(users)._id,
      text:chance.sentence()
    });
  }));
