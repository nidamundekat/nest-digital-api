import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Ui/navbar/navbar';
import { Footer } from './Ui/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('api');
}
