import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface PromptModel {
  user:any;
}
@Component({
  selector: 'prompt',
  templateUrl: './show-member.component.html'
})
export class ShowMemberComponent extends DialogComponent<PromptModel, any> implements PromptModel {
  user: any = null;
  constructor(dialogService: DialogService,
  ) {
    super(dialogService);
    console.log(this.user);
  }
  apply() {
    this.result = null;
    this.close();
  }
}
