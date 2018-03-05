import { Component } from '@angular/core';
import {MembershipsService} from '../services/memberships.service';
import {DialogService} from "ng2-bootstrap-modal";
import {ShowMemberComponent} from "../modals/show-member/show-member.component";

@Component({
  selector: 'app-root',
  templateUrl: './membership.component.html'
})
export class MembershipComponent {
  title = 'app';
  memberships: any = [];
  constructor(private membershipsService: MembershipsService,
              private dialogService: DialogService){
    this.membershipsService.getMemberships().valueChanges()
      .subscribe((result) => {
        this.memberships = result;
        console.log(result);
      }, (error) => {
        console.log(error);
      });
  }
  openMemberModal(m) {
    this.dialogService.addDialog(ShowMemberComponent, {user: m})
      .subscribe((result) => {
        console.log(result);
      });
  }
}
