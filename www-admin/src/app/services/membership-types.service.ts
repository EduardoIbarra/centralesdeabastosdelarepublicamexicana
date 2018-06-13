import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/database';

@Injectable()
export class MembershipTypesService {
    constructor(public afDB: AngularFireDatabase) {
    }

    membership_types = [];

    public getMembershipTypes() {
        return this.afDB.list('/membership_types/');
    }

    public getBag(id) {
        return this.afDB.object('/membership_types/' + id);
    }

    public createMembershipType(membership_type, parent, i) {
        return this.afDB.database.ref('/membership_types/' + parent.id + '/membership_types/' + i).set(membership_type);
    }

    public createParentMembershipType(membership_type) {
        return this.afDB.database.ref('/membership_types/' + membership_type.id).set(membership_type);
    }

    public editMembershipType(membership_type) {
        return this.afDB.database.ref('/membership_types/' + membership_type.id).set(membership_type);
    }

    public deleteMembershipType(membership_type) {
        return this.afDB.database.ref('/membership_types/' + membership_type.id).remove();
    }
}
