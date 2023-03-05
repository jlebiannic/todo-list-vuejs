export class Todo {
  coche = false;
  constructor(public texte: string) {}

  static createTodo(texte: string): Todo {
    return new Todo(texte);
  }
}
