export abstract class factoryJobs {
  retorno: string;
  constructor(retorno: string) {
    this.retorno = retorno;
  }
  get key() {
    return this.retorno;
  }

  abstract async execute(base: any): Promise<void>;
}
