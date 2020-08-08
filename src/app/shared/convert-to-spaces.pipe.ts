//This is a custom pipe that allows you to transform a value in a way you define.
//You must import "Pipe" and "PipeTransform" in order to create a custom pipe.

import { Pipe, PipeTransform } from '@angular/core';

//The "@Pipe" decorator must be used so that Angular knows that this class is a Pipe.

@Pipe({

  //The "name" value is the name that will be called in an HTML file for a pipe.

  name: 'convertToSpaces'
})

//An Angular module must import the classname of the pipe to use it.
//This class must always implement PipeTransform, which allows for the use of its method "transform()".

export class ConvertToSpacesPipe implements PipeTransform {

//In the "transform" method, the first parameter is the value itself.
//You can add multiple parameters thereafter so that when the pipe is called, it can offer this class values.

  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
