import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public textoDiferencial! : string;
public textoBannerCorpo! : string;
  constructor() { }

  ngOnInit(): void {
    this.textoDiferencial! = 'Venha conhecer nosso diferencial!!!';
    this.textoBannerCorpo! = 'Lorem ipsum dolor sit amet' +
    'consectetur, adipisicing elit. Nemo voluptatem, excepturi' +
    'consequuntur suscipit totam culpa sapiente necessitatibus,' +
    'quaerat delectus modi veniam alias quo molestiae ratione id' +
    'beatae facere quasi magni!';
  }

}
