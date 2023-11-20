import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { CardDataType } from 'src/app/core/store';
import { CardsVideoActions } from 'src/app/core/store/redux';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: CardDataType;

  constructor(private store: Store) {}

  getShortedDescription(descr: string): string {
    return descr.length > 252 ? `${descr.slice(0, 249)}...` : descr;
  }

  onLikedCard() {
    this.store.dispatch(
      CardsVideoActions.likedCard({ likedCardId: this.card.key })
    );
  }
}
