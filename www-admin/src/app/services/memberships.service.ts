import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/database';

@Injectable()
export class MembershipsService {
    constructor(public afDB: AngularFireDatabase) {
    }

    memberships = [];

    public getMemberships() {
        return this.afDB.list('/memberships/');
    }

    public getBag(id) {
        return this.afDB.object('/memberships/' + id);
    }

    public createMembership(membership, parent, i) {
        return this.afDB.database.ref('/memberships/' + parent.id + '/memberships/' + i).set(membership);
    }

    public createParentMembership(membership) {
        return this.afDB.database.ref('/memberships/' + membership.id).set(membership);
    }

    public editMembership(membership) {
        return this.afDB.database.ref('/memberships/' + membership.id).set(membership);
    }

    public deleteMembership(membership) {
        return this.afDB.database.ref('/memberships/' + membership.id).remove();
    }
}
