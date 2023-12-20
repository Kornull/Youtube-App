import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Observable, Subscription, map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {
  ConversationActions,
  selectGetPersonalConversations,
  selectGetUsers,
  selectGroupsInfo,
} from '../../../../core/store/redux';

import {
  AddUserNameService,
  LocalStorageService,
} from '../../../../core/services';

import { ConversationFormComponent } from '../conversation-form/conversation-form.component';
import { GroupDeleteComponent } from '../../../../shared/components/group-delete/groups-delete.component';

import {
  GroupMessageData,
  GroupMessagesDataType,
  UserListPersonalData,
  UserRegisterData,
} from '../../../../core/store/models';
import { PersonalTimerService } from '../../../../core/services/timer/personal-timer.service';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [
    CommonModule,
    ConversationFormComponent,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss',
})
export class ConversationComponent implements OnInit, OnDestroy {
  messages: GroupMessagesDataType[] = [];

  localData: UserRegisterData | null;

  title: string = '';

  groupMessages: GroupMessageData[] = [];

  usersList: UserListPersonalData[] = [];

  timeNow$!: Observable<number>;

  disabledBtn$!: Observable<boolean>;

  getPersonMessagesSubscribe$!: Subscription;

  updateMessagesSubscribe$!: Subscription;

  updateDialogsSubscribe$!: Subscription;

  updateTitleSubscribe$!: Subscription;

  lastSentTime!: string;

  userId: string = '';

  groupCreatorId: string = '';

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private localStore: LocalStorageService,
    private addNameService: AddUserNameService,
    private timer: PersonalTimerService,
    private dialog: MatDialog
  ) {
    this.localData = this.localStore.getLoginInfo();
  }

  ngOnInit(): void {
    this.updateDialogsSubscribe$ = this.store
      .select(selectGetUsers)
      .pipe(
        tap(data => {
          if (!data.length) {
            this.store.dispatch(ConversationActions.updateDialogUsers());
          }
        })
      )
      .subscribe();

    this.route.params.subscribe((params: Params) => {
      this.userId = params['id'];
    });

    this.getPersonMessagesSubscribe$ = this.store
      .select(selectGetPersonalConversations({ userId: this.userId }))
      .pipe(
        map(data => {
          if (data.messages) {
            this.messages = this.addNameService.changeIdToName(
              data.messages,
              data.users
            );
          } else {
            this.store.dispatch(
              ConversationActions.getUserMessages({
                dialog: { userId: this.userId },
              })
            );
            this.messages = [];
          }
        })
      )
      .subscribe();

    if (this.messages.length) {
      this.lastSentTime = this.messages[this.messages.length - 1].time;
      this.store.dispatch(
        ConversationActions.getUserMessages({
          dialog: {
            userId: this.userId,
            since: this.lastSentTime,
          },
        })
      );
    }

    this.updateTitleSubscribe$ = this.store
      .select(selectGroupsInfo)
      .pipe(
        tap(arr => {
          arr.Items.forEach(element => {
            if (element.id.S === this.userId) this.title = element.name.S;
            if (
              element.id.S === this.userId &&
              element.createdBy.S === this.localData?.uid
            ) {
              this.groupCreatorId = element.createdBy.S;
            }
          });
        })
      )
      .subscribe();

    this.timeNow$ = this.timer.getCountdown();
    this.disabledBtn$ = this.timer.getRunTimer();
  }

  ngOnDestroy(): void {
    this.getPersonMessagesSubscribe$.unsubscribe();
    this.updateDialogsSubscribe$.unsubscribe();
    this.updateTitleSubscribe$.unsubscribe();
  }

  runUpdateMessage() {
    this.timer.startCountdown();
    this.updateMessage();
  }

  updateMessage() {
    if (this.messages.length) {
      this.lastSentTime = this.messages[this.messages.length - 1].time;
      this.store.dispatch(
        ConversationActions.getUserMessages({
          dialog: {
            userId: this.userId,
            since: this.lastSentTime,
          },
        })
      );
    }
  }

  deleteGroup() {
    this.dialog.open(GroupDeleteComponent, {
      data: {
        groupTitle: this.title,
        id: this.userId,
        isOpenGroup: true,
        isPersonal: true,
      },
      minHeight: '200px',
      width: '400px',
    });
  }
}