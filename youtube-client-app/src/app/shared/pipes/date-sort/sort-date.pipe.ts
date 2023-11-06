import { Pipe, PipeTransform } from '@angular/core';

import * as dayjs from 'dayjs';

import { FilterCommand, SearchItem } from '../../../core/store';

@Pipe({
  name: 'sortDate',
})
export class SortDatePipe implements PipeTransform {
  transform(cards: SearchItem[], date: string = ''): SearchItem[] {
    if (date === FilterCommand.UP) {
      return cards.sort((a: SearchItem, b: SearchItem) =>
        dayjs(a.snippet.publishedAt, 'd') < dayjs(b.snippet.publishedAt, 'd')
          ? 1
          : -1
      );
    }
    if (date === FilterCommand.DOWN) {
      return cards.sort((a: SearchItem, b: SearchItem) =>
        dayjs(a.snippet.publishedAt, 'd') < dayjs(b.snippet.publishedAt, 'd')
          ? -1
          : 1
      );
    }
    return cards;
  }
}