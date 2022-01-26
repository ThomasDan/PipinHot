import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'morseSmoke'
})
export class MorseSmokePipe implements PipeTransform {

  morseMap = new Map<string, string>([
    ['A','· —'],
    ['B','—···'],
    ['C','—·—·'],
    ['D','—··'],
    ['E','·'],
    ['F','··—·'],
    ['G','——·'],
    ['H','····']
  ]);

  transform(value: string): string {
    let output = '';
    let morse = '';
    for(let i = 0; i < value.length; i++){
      morse = this.morseMap.get(value[i].toUpperCase());
      if(morse != undefined){
        output += morse
      }
      else{
        output += 'ERR';
      }

      if(i < value.length-1){
        output += ' ';
      }
    }
    console.log(output);
    return output;
  }

}
