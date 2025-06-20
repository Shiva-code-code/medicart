import { Component } from '@angular/core';
import { Searchbar } from "../searchbar/searchbar";

@Component({
  selector: 'app-home',
  imports: [Searchbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
