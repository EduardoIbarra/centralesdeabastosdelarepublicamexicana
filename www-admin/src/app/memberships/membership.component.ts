import {Component} from '@angular/core';
import {MembershipsService} from '../services/memberships.service';
import {DialogService} from "ng2-bootstrap-modal";
import {ShowMemberComponent} from "../modals/show-member/show-member.component";

@Component({
    selector: 'app-root',
    templateUrl: './membership.component.html',
    styleUrls: ['./membership.component.scss']
})
export class MembershipComponent {
    title = 'app';
    memberships: any = [];

    constructor(private membershipsService: MembershipsService,
                private dialogService: DialogService) {
        this.membershipsService.getMemberships().valueChanges()
            .subscribe((result) => {
                this.memberships = result;
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    }

    openMemberModal(m) {
        this.dialogService.addDialog(ShowMemberComponent, {user: m}, { backdropColor: 'rgba(0, 0, 0, 0.5)' })
            .subscribe((result) => {
                if(!result) return;
                result.fecha_nacimiento = result.fecha_nacimiento.value;
                console.log(result);
                this.membershipsService.editMembership(result)
            });
    }
}
