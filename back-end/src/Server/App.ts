import express, { Express } from 'express';

export default class App {
  constructor(
    private app: Express,
    private PORT: number,
  ) {}

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Ouvindo na porta ${this.PORT}`);      
    });
  }
}