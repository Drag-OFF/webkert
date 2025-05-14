import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialtyList',
  standalone: true
})
export class SpecialtyListPipe implements PipeTransform {
  transform(value: string[]): string {
    return value && value.length ? value.join(', ') : 'No specialties';
  }
}