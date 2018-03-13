// Arriba siempre pondremos la importaciones necesarias

// importamos la libreria de angular que trae el componente
import{Component}from'@angular/core';

//decorador, le vamos a pasar un objeto
@Component({
    // le damos el valor del elemento donde queremos renderizar el componente
    selector:'app-fecha',
    // enlazamos el html con el tipescript
    templateUrl: './fecha.component.html',
    styleUrls:['./fecha.component.css']
})

export class FechaComponent{
    hoy:object=new Date();
}