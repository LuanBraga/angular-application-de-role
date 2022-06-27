import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(seconds: number): string {

    if (seconds === undefined || seconds === 0) {
      return 'No time has passed'
    }
    else if (seconds < 15) {
      return 'a few seconds ago';
    } else if (seconds < 60) {
      return 'less than a minute ago';
    } else if (seconds < 120) {
      return 'a minute ago'
    } else if (seconds < 240) {
      return 'a few minutes ago';
    } else if (seconds < 3600) {
      return `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 7200) {
      return 'an hour ago';
    } else {
      return 'more than an hour ago';
    }
  }
}
