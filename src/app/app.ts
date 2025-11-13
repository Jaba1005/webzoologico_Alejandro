import { Component, importProvidersFrom, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalComponent } from './components/animal-component/animal-component';
import { BrowserModule } from '@angular/platform-browser';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

importProvidersFrom(BrowserModule, ToastrModule.forRoot()),
    provideToastr(),
    provideAnimations()
    
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // CORREGIDO de styleUrl
})
export class App {
  protected readonly title = signal('Pagina Pro');
}

