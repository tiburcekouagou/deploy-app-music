import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  onSubmit(form: NgForm) {
    console.log(form.value.word);
    // console.log(form.value['word']);
  }
}
