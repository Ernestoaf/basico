import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//importacion de app.componente o archivo raiz
import { AppComponent } from './app.component';

//importamos el archivo nuevo de ts, (sin la extension)
import { FechaComponent} from './fecha/fecha.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MonoarchivoComponent } from './monoarchivo/monoarchivo.component';




@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    ImagenesComponent,
    MonoarchivoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
