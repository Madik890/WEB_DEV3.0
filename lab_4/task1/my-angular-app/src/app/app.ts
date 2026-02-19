import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'My first Angular app';
  description = 'Angular is working!';
  count = 0;

  items = ['Apple', 'Banana', 'Orange'];
  showList=true;
  toggleList(){
    this.showList=!this.showList;
  }

  increase() {
    this.count++;
  }
}