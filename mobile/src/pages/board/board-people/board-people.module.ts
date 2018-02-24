import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoardPeoplePage } from './board-people';

@NgModule({
  declarations: [
    BoardPeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(BoardPeoplePage),
  ],
})
export class BoardPeoplePageModule {}
