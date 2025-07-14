import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
  standalone: true
})
export class ShortNamePipe implements PipeTransform {
  transform(value: { first_name?: string; last_name?: string } | null | undefined): string {
    if (!value) return '.';

    const first = value.first_name || '';
    const last = value.last_name || '';

    const formattedFirst =
      first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();

    const formattedLastInitial = last
      ? last.charAt(0).toUpperCase()
      : '';

    return `${formattedFirst}.${formattedLastInitial}`;
  }
}
