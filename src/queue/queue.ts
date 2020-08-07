import Bee from "bee-queue";
import { factoryJobs } from "./jobs/factoryJobs";

const jobs: factoryJobs[] = [];

class Queue {
  queues: any;
  constructor() {
    this.queues = {};
    this.init();
  }
  init() {
    jobs.forEach(({ key, execute }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: {
            host: "127.0.0.1",
            port: 6379,
          },
        }),
        execute,
      };
    });
  }

  add(queue: any, job: any) {
    return this.queues[queue.key].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach((jobs) => {
      const { bee, execute } = this.queues[jobs.key];
      bee.process(execute);
    });
  }
}

export default new Queue();
