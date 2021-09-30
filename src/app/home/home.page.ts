import { Component } from '@angular/core';
//importamos dependencia de pdf
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //objeto que almacena pdf
  pdfObj: any;

  constructor() {}


  generatePDF(){
    alert("PDF Generado");

    let docDefinition = {
      content: [
        'Prueba Isma PDF',
        
      ]
    };
    //crear pdf
    this.pdfObj = pdfMake.createPdf(docDefinition);
    //Descargar el pdf
    this.pdfObj.download(); 
  }

}
