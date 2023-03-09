export class Todo {
  coche = false;
  constructor(public texte: string, public id: number) {}

  static createTodo(texte: string, id: number): Todo {
    return new Todo(texte, id);
  }
}
