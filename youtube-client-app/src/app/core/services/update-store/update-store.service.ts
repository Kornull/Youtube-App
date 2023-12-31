import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { SearchItemDetails } from '../../store';
import { cardsVideoActions } from '../../store/redux';

@Injectable({
  providedIn: 'root',
})
export class UpdateStoreService {
  constructor(private store: Store) {}

  deleteCustomCard(id: string) {
    this.store.dispatch(
      cardsVideoActions.removeCustomCard({
        delCustomCardId: id,
      })
    );
  }

  private clearIdYoutubeList() {
    this.store.dispatch(cardsVideoActions.clearYoutubeIdList());
  }

  addYoutubeCardToStore(cards: SearchItemDetails[]) {
    this.clearIdYoutubeList();
    cards.forEach((card: SearchItemDetails) => {
      this.store.dispatch(
        cardsVideoActions.addYoutubeCard({
          youtubeCard: {
            value: {
              title: card.snippet.title,
              subTitle: card.snippet.localized.title,
              imageLink: card.snippet.thumbnails.medium.url,
              videoLink: '',
              date: card.snippet.publishedAt,
              description: card.snippet.localized.description,
              tags: card.snippet.tags,
              statistics: card.statistics,
            },
            key: card.id,
            liked: false,
            deleteBtn: false,
          },
        })
      );
    });
  }
}
