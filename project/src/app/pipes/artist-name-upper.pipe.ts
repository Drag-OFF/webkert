import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistNameUpper',
  standalone: true
})
export class ArtistNameUpperPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.toUpperCase() : '';
  }
}