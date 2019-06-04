import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodosStore, TodosState } from './todos.store';
import { Todo } from './todo.model';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState, Todo> {

  public get$ = this.selectAll();



  constructor(protected store: TodosStore) {
    super(store);
  }

  public search(term: string)
  {
    if(!term)
      return this.get$;

    return this.get$.pipe(map(array => array.filter(val => val.text.includes(term))))
  }
}
