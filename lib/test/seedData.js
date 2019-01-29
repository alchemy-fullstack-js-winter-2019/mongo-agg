
import { isMainThread } from "worker_threads";
import { create } from "domain";
const chance = new Chance();



return Promiseall()
  [...Array(100)].map => {
    return Tweet.create({
      handle: chance.pickone(['ryan', 'another', 'a third']),
      text:''
    });
  };
