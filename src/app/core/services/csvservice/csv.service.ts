import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  constructor() {}

  downloadFile(data: any, filename: any) {
    // console.log('data',data)
    // let header = []
    // header.push(Object.keys(data[0]))
    // console.log("header",header)

    let csvData = this.ConvertToCSV(data, Object.keys(data[0]));

    console.log('csvData', csvData);
    let blob = new Blob(['\ufeff' + csvData], {
      type: 'text/csv;charset=utf-8;',
    });

    let dwldLink = document.createElement('a');
    let url = URL.createObjectURL(blob);
    console.log('url', url);
    //   // let isSafariBrowser =
    //   //   navigator.userAgent.indexOf('Safari') != -1 &&
    //   //   navigator.userAgent.indexOf('Chrome') == -1;
    //   // if (isSafariBrowser) {
    //   //   //if Safari open in new window to save file with random filename.
    //   //   dwldLink.setAttribute('target', '_blank');
    //   // }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray: any, headerList: any) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    let str = '';
    let row = 'S.No,';

    for (let index in headerList) {
      row += headerList[index] + ',';
    }

    row = row.slice(0, -1);
    str += row + '\r\n';

    for (let i = 0; i < Object.keys(array).length; i++) {
      let line = i + 1 + '';

      for (let index in headerList) {
        let head = headerList[index];

        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    return str;
  }
}
