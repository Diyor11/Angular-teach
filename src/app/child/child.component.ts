import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'child-component',
  template: `<h1>Child {{ queryParam }}</h1>`,
  styles: '',
})
export default class Childcomponent {
  queryParam: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.queryParam = params['id']; // Replace 'paramName' with your actual query param
    });
  }
}
