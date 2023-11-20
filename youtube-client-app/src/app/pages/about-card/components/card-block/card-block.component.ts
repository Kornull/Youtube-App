import { SearchValueService } from 'src/app/core/services/search-value/search-value.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {
  FilterActivateService,
  FilterOpenedService,
  SearchResultService,
  SortResultService,
} from 'src/app/core/services';
import { DefaultDataCustomBtn, CardDataType } from 'src/app/core/store';
import { Subject, takeUntil, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  CardsVideoActions,
  selectGetOpenedCard,
  selectGetViewCards,
} from 'src/app/core/store/redux';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss'],
})
export class CardBlockComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  cardDetails: CardDataType | null;

  cardDetails$: Observable<CardDataType | undefined>;

  goBackBtnStyle: string = DefaultDataCustomBtn.GO_BACK;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private location: Location,
    private filterActivateService: FilterActivateService,
    private filterOpenedService: FilterOpenedService,
    private sortResultService: SortResultService,
    private searchResultService: SearchResultService,
    private searchValueService: SearchValueService
  ) {}

  ngOnInit(): void {
    this.filterOpenedService.closeFilter();
    this.filterActivateService.turnOffBtn();
    this.sortResultService.resetSort();
    this.route.params.subscribe((params: Params) => {
      this.store.dispatch(
        CardsVideoActions.setCardId({
          cardId: params['id'],
        })
      );
    });
    this.cardDetails$ = this.store.select(selectGetOpenedCard);
    takeUntil(this.destroy$);
    this.searchValueService.setValue('');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    selectGetViewCards.release();
  }

  goBack(): void {
    this.filterActivateService.turnOnBtn();
    this.location.back();
  }
}
