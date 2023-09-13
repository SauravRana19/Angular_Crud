import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(data: any, value:any): any {
      // console.log("pipedata",data)
      return data.filter((item: any) =>{
        return JSON.stringify(item.FirstName).toLocaleLowerCase().includes(value)
      })
    }
}
