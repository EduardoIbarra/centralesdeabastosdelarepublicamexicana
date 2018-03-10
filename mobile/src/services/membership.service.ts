import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/database';

@Injectable()
export class MembershipService {
  constructor(public afDB: AngularFireDatabase){
  }
  membership = [];
  public getMembership(){
    return this.afDB.list('/memberships/');
  }
  public getBag(id){
    return this.afDB.object('/memberships/' + id);
  }
  public createCategory(membership, parent, i){
    return this.afDB.database.ref('/memberships/' + parent.id + '/memberships/' + i).set(membership);
  }
  public createParentCategory(membership){
    return this.afDB.database.ref('/memberships/' + membership.id).set(membership);
  }
  public editCategory(membership){
    return this.afDB.database.ref('/memberships/' + membership.id).set(membership);
  }
  public deleteCategory(membership){
    return this.afDB.database.ref('/memberships/' + membership.id).remove();
  }
}
