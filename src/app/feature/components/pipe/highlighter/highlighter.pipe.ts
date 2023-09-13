import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter',
})
export class HighlighterPipe implements PipeTransform {
  transform(value: string, args: string): unknown {
    // debugger;
    // console.log(value,args)
    if (!args) return value;
    // console.log(value);
    const re = new RegExp(args, 'igm');
    const match: any = value.match(re);

    value = value.replace(
      re,
      `<span class="highlighted-text">${match?.[0]}</span>`
    );
    // console.log(value);
    return value;
  }
}
