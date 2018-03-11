import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/database';

@Injectable()
export class MembershipService {
    constructor(public afDB: AngularFireDatabase) {
    }

    public getMembership() {
        return this.afDB.list('/memberships/');
    }

    public getBag(id) {
        return this.afDB.object('/memberships/' + id);
    }

    public createMembership(membership) {
        let data = {
            id: Date.now(),
            //Datos de usuario
            clave_socio: membership.PartnerKey,
            denominacion_social: membership.SocialDenomination,
            representante_legal: membership.LegalRepresentative,
            rfc: membership.Rfc,
            curp: membership.Curp,
            fecha_nacimiento: membership.BirthDay.value,
            pagina_web: membership.WebPage,
            correo_electronico: membership.Email,
            celular: parseInt(membership.Cellphone),
            telefono_casa: parseInt(membership.HomePhone),
            genero: membership.Gender,
            //Domicilio del usuario
            domicilio_personal: membership.UserAddress,
            colonia: membership.UserSettlement,
            municipio: membership.UserCity,
            codigo_postal: parseInt(membership.UserPostalCode),
            entre_calles: membership.UserStreets,
            //Domicilio del negocio
            dc_colonia: membership.BusinessSettlement,
            dc_entre_calles: membership.BusinessStreets,
            dc_municipio: membership.BusinessCity,
            dc_telefono_local: parseInt(membership.BusinessPhone),
            domicilio_comercial: membership.BusinessAddress,
            dc_codigo_postal: parseInt(membership.BusinessPostalCode),
        };

        return this.afDB.database.ref('memberships/' + data.id).set(data);
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
