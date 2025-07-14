import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFr',
  standalone: true
})
export class DateFrPipe implements PipeTransform {
  transform(value: string | Date | null | undefined): string | null {
    if (!value) {
      return null;
    }

    const date = new Date(value);
    const formatted = date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long'
    });

    return formatted.replace(/\b\w/, (c) => c.toUpperCase());
  }
}
