import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}
  // @ViewChild('userform', {static: false}) userform!: ElementRef;


  pdfconvert(data: any) {
    console.log(data);

    let doc = new jsPDF();
    let col = [Object.keys(data)]
    let row = Object.values(data).map(value => [value]).toString();
    console.log(row)
 
    autoTable(doc,{
      // head:[col],
      body: [col,[row]],
      tableWidth: 'auto',
    })
  doc.save('table.pdf')
    //  autoTable(doc, {
    //   // styles: { fillColor: [255, 0, 0] },
    //   // columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } }, // Cells in first column centered and green
    //   // margin: { top: 10 },
    //   body: [
    //     // [ ],
    //     ['Norway', 'China', 'USA'],
    //     ['Denmark', 'China', 'Mexico'],
    //   ],
    //   columns: [
    //     { header: 'Europe', dataKey: 'europe' },
    //     { header: 'Asia', dataKey: 'asia' },
    //   ],
    // })
  

    // const docDefinition = {
    //   content: [
    //     {
    //       style: 'tableExample',
    //       table: {
    //         body: [[col, row]],
    //       },
    //     },
    //   ],
    // };
    // pdfMake.createPdf(docDefinition).download('test.pdf');
    // pdfMake.createPdf(data).download();

    // const doc = new jsPDF('l', 'mm', 'a4',);
    // doc.text('This is basic text', 14,15);
    //   autoTable(doc,{html:'#userform',
    //   tableWidth: 'auto',
    //    //   width: 170,
    //   //   windowWidth: 570
    // });


    //   doc.save('Document.pdf');
    // doc.html(document.getElementById('userform')!, {
    //   callback: function (doc) {
    //     doc.save('Document.pdf');
    //   },
    //   margin: [0, 60, 60, 0],
    //   x: 0,
    //   y: 0,
    //   width: 170,
    //   windowWidth: 570
    // });

  }



}
