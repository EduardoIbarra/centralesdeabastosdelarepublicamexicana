import { Component, OnInit } from '@angular/core';
import { MembershipTypesService } from '../services/membership-types.service';
import { DialogService } from 'ng2-bootstrap-modal';
import { ShowMembershipTypeComponent } from '../modals/show-membership-type/show-membership-type.component';

@Component({
  selector: 'app-membership-types',
  templateUrl: './membership-types.component.html',
  styleUrls: ['./membership-types.component.scss']
})
export class MembershipTypesComponent implements OnInit {
  membership_types: any = [];
  constructor( private membershipTypesService: MembershipTypesService,
               private dialogService: DialogService) { }

  ngOnInit() {
    this.membershipTypesService.getMembershipTypes().valueChanges().subscribe((result) => {
      this.membership_types = result;
      console.log(this.membership_types);
    });
  }

  openMemberModal(m) {
    this.dialogService.addDialog(ShowMembershipTypeComponent, {user: m}, { backdropColor: 'rgba(0, 0, 0, 0.5)' })
      .subscribe((result) => {
        if(!result) return;
        result.id = (!result.id) ? Date.now() : result.id;
        this.membershipTypesService.editMembershipType(result);
      });
  }

}
