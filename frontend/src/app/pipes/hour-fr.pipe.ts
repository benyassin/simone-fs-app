import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourFr',
  standalone: true
})
export class HourFrPipe implements PipeTransform {
  transform(value: string | Date | null | undefined): string | null {
    if (!value) {
      return null; // important pour que le template détecte l’absence
    }

    const date = new Date(value);
    const hour = date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      hour12: false
    });

    return `${hour}`;
  }
}
