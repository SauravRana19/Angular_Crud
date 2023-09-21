import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}
  // @ViewChild('userform', {static: false}) userform!: ElementRef;

  pdfconvert(data: any) {
    console.log('data', data);
    // let row:any = [];
    // let col:any = [];

    // data.forEach((elm:any) => {
    //   col = [Object.keys(elm)]
    //   row.push(Object.values(elm).map(value => [value]))
    // })

    // let res = data.forEach((values:any)=>{
    //     for(let value in values){
    //   console.log(values[value])
    //   }
    // })
    // console.log("res",res)

    let doc = new jsPDF('l', 'mm', 'a4');
    let col = [Object.keys(data)];
    console.log('col', col);
    let row = Object.values(data)
      .map((value) => [value])
      .toString();
    console.log('row', row);

    autoTable(doc, {
      head: [col],
      body: [[row]],
      tableWidth: 'auto',
    });
    doc.save('table.pdf');
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
  pdfallconvert(data: any) {
    let row: any = [];
    let col: any = [];

    data.forEach((elm: any) => {
      col = [Object.keys(elm)];
      row.push(Object.values(elm).map((value) => [value]));
    });
    let doc = new jsPDF('l', 'mm', 'a4');
    autoTable(doc, {
      head: [col],
      body: [[row]],
      tableWidth: 'auto',
    });
    doc.save('table.pdf');
  }
}
