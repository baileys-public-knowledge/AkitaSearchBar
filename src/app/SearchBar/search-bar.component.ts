import { Component, OnInit, ElementRef, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap, map } from "rxjs/operators";
import { TodosQuery } from '../todos.query';
import { TodosService } from '../todos.service';
import { createTodo } from '../todo.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: [ './search-bar.component.css' ]
})
export class SearchBarComponent implements OnInit
{

  private _SearchDebounce$: Subject<String> = new Subject<String>();
  @Output() public Search$ = this._SearchDebounce$.asObservable()
    .pipe(
      tap(x => 
        { 
          if (x.length === 0) 
          { 
            this.SearchTerm = null; 
          } 
        }
      ),
      filter(value => value.length != 0),
      debounceTime(750),
      map(x=>x.trim()),
      distinctUntilChanged());

  public SearchTerm: String;

  constructor(public todoQuery: TodosQuery, public todoService: TodosService)
  {
    this.todoService.add(createTodo({text: "Hello World"}));
    this.todoService.add(createTodo({text: "Hello"}));
    this.todoService.add(createTodo({text: "Bailey"}));
    this.todoService.add(createTodo({text: "Brianna"}));
    this.todoService.add(createTodo({text: "Kiefer"}));
  }

  ngOnInit()
  {
    this.Search$.subscribe(x=> this.SearchTerm = x);
  }

  OnChange(event: KeyboardEvent)
  {
    let value = (<HTMLInputElement>event.target).value;
    this._SearchDebounce$.next(value);
  }

}