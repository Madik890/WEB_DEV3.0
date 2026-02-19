import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.components'; // Добавь этот импорт

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], // Обязательно добавь сюда!
  templateUrl: './app.html', // Проверь, чтобы имя файла совпадало (app.html или app.component.html)
})
export class AppComponent { }