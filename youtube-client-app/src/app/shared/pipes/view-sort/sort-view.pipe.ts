import { Pipe, PipeTransform } from '@angular/core';

import { FilterCommand, SearchItem } from 'src/app/core/store';

@Pipe({
  name: 'sortView',
})
export class SortViewPipe implements PipeTransform {
  transform(cards: SearchItem[], date = ''): SearchItem[] {
    if (date === FilterCommand.UP) {
      return cards.sort((a: SearchItem, b: SearchItem) =>
        Number(a.statistics.viewCount) < Number(b.statistics.viewCount) ? 1 : -1
      );
    }
    if (date === FilterCommand.DOWN) {
      return cards.reverse();
    }
    return cards;
  }
}