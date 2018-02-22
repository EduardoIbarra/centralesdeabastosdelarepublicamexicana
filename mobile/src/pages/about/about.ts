import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
})
export class AboutPage {

    items: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewWillEnter() {
        this.items = [{
            title: '¿Quienes Somos?',
            content: 'La <b>Cámara Nacional de Comercio, Servicios y Turismo de Querétaro</b> es una cámara de puertas abiertas, donde se incentiva la paricipación y representación de organismos gubernamentales, sociales y empresariales. Tenemos la firme convicción de integrar a todos los actores de la comunidad, en especial a las mujeres y jóvenes, en decisiones y proyectos que detonen el desarrollo económico del sector comercial en el Estado de Querétaro'
        }, {
            title: 'Historia',
            content: ' Todo indica que la privilegiada posición geográfica de Querétaro, la vastedad de su territorio y su riqueza natural, han sido entre otros factores, los que han favorecido y determinado el pujante desarrollo estatal.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Del mismo modo y desde tiempos ancestrales, la actividad comercial ha jugado un papel determinante como lo demuestran los importantes intercambios mercantiles que aquí se realizan entre los estados de Zacatecas, Guanajuato y San Luis Potosí.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Querétaro se ve convertido en cruce de caminos y también en ciudad de abastecimiento.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Además la intensa actividad agropecuaria, practicada en el Bajío y particularmente en el estado, contribuye en la definitiva expansión de las relaciones comerciales y la prestación de servicios estatales.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Un crecimiento que se ve fortalecido ha sido a través del inminente desarrollo industrial del estado, por un lado, el proceso productivo requiere de una serie de insumos que deben traerse desde la ciudad de México y por el otro, la necesidad natural de distribuir la producción industrial local.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Estos avances provocan la mejora urbana que se traducen en la construcción de una infraestructura que favorece el ejercicio del comercio a pequeña escala, aunado a un gran espíritu empresarial coordinado con la iniciativa gubernamental.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Es así como se genera una gran activación y participación social surgiendo así una organización voluntaria y sin fines de lucro como lo es la Cámara de Comercio de Querétaro, organismo que desde su fundación se ha caracterizado por la gran participación en el desarrollo y beneficio de su sociedad, no sólo en términos económicos, sino sociales.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            La Canaco Servytur de Querétaro, promueve la comercialización entre municipios, comenzando por la vinculación con San Juan del Río y Tequisquiapan, seguido de los municipios conurbados, con el objetivo de crear un sistema micro regional para promover la vinculación nacional.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Lo que Canaco Servytur de Querétaro tiene como objetivo con esta actividad es el elevar la productividad de las organizaciones, empresas e instituciones, teniendo como base la continua actualización y desarrollo del personal. Dentro de sus objetivos principales de la Canaco Qro. están el de representar, promover y defender los intereses generales del sector comercial en su circunscripción así como también ante los tres niveles de gobierno.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Los órganos de gobierno que estructuran la Canaco Servytur de Querétaro son la Asamblea General y el Consejo Directivo. La Asamblea General está integrada por sus afiliados, quienes en este momento la forman cerca de 17,000 empresarios comerciantes y prestadores de servicios.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            El Consejo Directivo es el órgano de ejecución y de representación de la Canaco, integrado por representantes de empresas afiliadas a la cámara dedicados a la actividad del sector comercial, y que son designados como consejeros por la Asamblea General.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Actualmente el Consejo Directivo de la Canaco Qro. está integrado por un Presidente, un Secretario, un Tesorero, un Auditor externo, 12 vicepresidentes (uno por cada actividad comercial) y 11 consejeros.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            Las atribuciones y objetivos que tiene el Consejo Directivo, van encaminadas a representar a los afiliados de la cámara mediante el cumplimiento del objeto y obligaciones de la misma, así como hacer las gestiones necesarias en beneficio de sus afiliados ante los instituciones públicas y privadas para la defensa de sus intereses, de acuerdo con las disposiciones de las leyes vigentes.\n' +
            '            <br/>\n' +
            '            <br/>\n' +
            '            La Canaco Qro. a través de sus dos órganos de gobierno y fundamentalmente por medio del Consejo Directivo, se trazan las líneas de acción para el diseño del paquete de servicios que se le ofrecerán a sus afiliados tales como: cursos de capacitación en temas interés comercial, fiscal, contable, entre otros; asesoría jurídica gratuita en las áreas laboral, fiscal y civil; gestoría y representación en defensa de los intereses del afiliado ante los tres niveles de gobierno; colaborar y\n' +
            '            promover el estudio y la investigación en materia comercial con las instituciones educativas; así como otros servicios más'
        }
        ]
    }

}
