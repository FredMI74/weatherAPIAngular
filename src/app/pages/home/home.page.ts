import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { select, Store } from '@ngrx/store';

import * as formHomeActions from './state/home.actions';
import * as formHomeSelectors from './state/home.selectors';

@Component({
  selector: 'owa-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
  
  searchForm: FormGroup;
  cidade : String;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      cidade: new FormControl('')
    });

    this.store.pipe(select(formHomeSelectors.selectHomeText))
    .subscribe(text => this.cidade = text)
  }

  submitForm() {
    //this.store.dispatch(formHomeActions.changeText({ text: this.searchForm.controls.city.value }));
    console.log(this.searchForm.value)
  }


}
