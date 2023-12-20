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
  selectGetUsers,
  selectGroupMessages,
  selectGroupsInfo,
} from '../../../../core/store/redux';

import {
  AddUserNameService,
  DialogTimerService,
  LocalStorageService,
} from '../../../../core/services';

import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { GroupDeleteComponent } from '../../../../shared/components/group-delete/groups-delete.component';

import {
  GroupMessageData,
  GroupMessagesDataType,
  UserListPersonalData,
  UserRegisterData,
} from '../../../../core/store/models';

@Component({
  selector: 'app-group-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogFormComponent,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent implements OnInit, OnDestroy {
  messages: GroupMessagesDataType[] = [];

  localData: UserRegisterData | null;

  title: string = '';

  groupMessages: GroupMessageData[] = [];

  usersList: UserListPersonalData[] = [];

  timeNow$!: Observable<number>;

  disabledBtn$!: Observable<boolean>;

  getGroupMessagesSubscribe$!: Subscription;

  updateMessagesSubscribe$!: Subscription;

  updateDialogsSubscribe$!: Subscription;

  updateTitleSubscribe$!: Subscription;

  lastSentTime!: string;

  groupId: string = '';

  groupCreatorId: string = '';

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private localStore: LocalStorageService,
    private addNameService: AddUserNameService,
    private timer: DialogTimerService,
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
      this.groupId = params['id'];
    });

    this.getGroupMessagesSubscribe$ = this.store
      .select(selectGroupMessages({ groupId: this.groupId }))
      .pipe(
        map(data => {
          if (data.messages) {
            this.messages = this.addNameService.changeIdToName(
              data.messages,
              data.users
            );
          } else {
            this.store.dispatch(
              ConversationActions.getGroupMessages({
                dialog: { groupId: this.groupId },
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
        ConversationActions.getGroupMessages({
          dialog: {
            groupId: this.groupId,
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
            if (element.id.S === this.groupId) this.title = element.name.S;
            if (
              element.id.S === this.groupId &&
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
    this.getGroupMessagesSubscribe$.unsubscribe();
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
        ConversationActions.getGroupMessages({
          dialog: {
            groupId: this.groupId,
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
        id: this.groupId,
        isOpenGroup: true,
      },
      minHeight: '200px',
      width: '400px',
    });
  }
}