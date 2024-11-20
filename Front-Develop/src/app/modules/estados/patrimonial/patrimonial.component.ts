import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-patrimonial',
  templateUrl: './patrimonial.component.html',
  styleUrls: ['./patrimonial.component.css']
})
export class PatrimonialComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  patrimonioData: any[] = [];
  patrimonioJson() {
    this.apiService.jsonEstadoPatrimonial().subscribe((data: any) => {
      this.patrimonioData = data;
      console.log("Patrimonio: ", this.patrimonioData);
    });

    return this.patrimonioData;
  }

  ngOnInit(){
    this.patrimonioJson();
  }

  parsearJson(cadenaJson: any): any[] {
    try {
      if (cadenaJson) {
        return JSON.parse(cadenaJson);
      } else {
        console.warn("Cadena JSON indefinida");
        return [];
      }
    } catch (error) {
      console.error("Error parseando el JSON:", error);
      return [];
    }
  }

  fecha: string = this.mostrarFecha(); //Pongo la fecha en una variable para que no haga llamadas recurrentes
  mostrarFecha() {
    const dia = new Date().getDate().toString();
    const mes = (new Date().getMonth() + 1).toString();
    const año = new Date().getFullYear().toString();
    const fechaHeader = `${dia}/${mes}/${año}`;
    console.log(fechaHeader);
    return fechaHeader;
  }

  getTotales(tipo: string): number {
    let total = 0;
  
    for (const grupo of this.patrimonioData) {
      // Verificamos si el grupo es iterable
      if (Symbol.iterator in Object(grupo)) {
        for (const elemento of grupo) {
          const totalArray = elemento?.[tipo]; // Cambiamos a `tipo` para buscar directamente el dato necesario
  
          if (totalArray) {
            const parsedArray = this.parsearJson(totalArray);
  
            if (Array.isArray(parsedArray)) {
              // Sumamos los saldos de cada objeto dentro del array parseado
              total += parsedArray.reduce((acc, item) => acc + (item.saldo || 0), 0);
            }
          }
        }
      }
    }
  
    // Retornamos el total asegurando que sea un float con precisión de 2 decimales
    return parseFloat(total.toFixed(2));
  }

  // getTotales(tipo: string): number {
  //   let total = 0;
  
  //   // Iteramos sobre el arreglo principal
  //   this.patrimonioData.forEach((grupo) => {
  //     grupo.forEach((item:any) => {
  //       // Verificamos si el tipo coincide
  //       if (item[tipo]) {
  //         const valores = JSON.parse(item[tipo]);
  
  //         // Sumamos los saldos del rubro actual
  //         total += valores.reduce((acc:any, curr:any) => acc + curr.saldo, 0);
  //       }
  //     });
  //   });
  
  //   return parseFloat(total.toFixed(2));
  // }
  


  // getTotales(tipo: string): number {
  //   let total = 0;
  
  //   for (const grupo of this.patrimonioData) {
  //     // Verificar si grupo es un iterable antes de recorrerlo
  //     if (Symbol.iterator in Object(grupo)) {
  //       console.log("Grupo",grupo)
  //       for (const elemento of grupo) {
  //         console.log("Elemento of grupo",elemento)
  //         const totalArray = elemento.total;
  //         //console.log("El objeto es iterable")
  //         if (totalArray) {
  //           console.log("totalArray", totalArray)
  //           const totalObj = this.parsearJson(totalArray)[0];
  //           console.log("totalObj", totalObj)
  //           if (totalObj && totalObj[tipo] !== undefined) {
  //             total += parseFloat(totalObj[tipo]);
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return total;
  // }
  getTotalActivoCorriente(): number {
    const activoCorriente = this.getTotales('activos_corrientes');
    console.log("a ver que pasa",activoCorriente)
    return activoCorriente
  }

  getTotalActivoNoCorriente(): number {
    return this.getTotales('activos_no_corrientes');
  }
  getTotalActivo(): number {
    return this.getTotales('activo');
  }
  getTotalPasivoCorriente(): number {
    return this.getTotales('pasivos_corrientes');
  }
  getTotalPasivoNoCorriente(): number {
    return this.getTotales('pasivos_no_corrientes');
  }
  getTotalPasivo(): number {
    return this.getTotales('pasivo');
  }
  getTotalPatrimonioNeto(): number {
    return this.getTotales('patrimonio_neto');
  }
  getPasivoYPatrimonioNeto(): number {
    return this.getTotales('pasivo_patrimonio_neto');
  }
}
