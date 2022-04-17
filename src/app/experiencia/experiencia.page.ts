import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
})
export class ExperienciaPage implements OnInit {
  // eslint-disable-next-line max-len
  text1 = 'Desarrollé un sistema inteligente domótico y automatizado basado en IoT, aplicado a huertos urbanos interiores, utilizando metodologías RAD y UML.';
  text2 = 'Programé el SoC Esp32 en C++ para enviar los datos de los sensores a la DB en la nube Google Firebase.';
  // eslint-disable-next-line max-len
  text3 = 'Implementé una app para dispositivos Android con Python y Flutter que permite recibir notificaciones, visualizar información y estadísticas de los sensores, además realiza acciones de control manual para el riego y cortina.';
  fecha1 = 'De 05/06/2020 a 25/03/2021';
  // eslint-disable-next-line max-len
  text4 = 'Administré un equipo de trabajo de diez personas con el propósito de desarrollar un paseo virtual interactivo en la web, del patrimonio histórico tangible resguardados en el Área Histórica del Centro de Información Integral.';
  // eslint-disable-next-line max-len
  text5 =     'Desarrollé la propuesta del proyecto, asigné tareas y plazos, revisé avances semanales y realicé feedbacks, recolecté informes realizados por todos los miembros del equipo, así como los certificados de finalización para la aprobación del trabajo y respaldos digitales.';
  text6 =     'Como resultado el paseo virtual está actualmente activo con 2700 visitas.';

  fecha2 = 'De 06/2020 a 09/2021';

  // eslint-disable-next-line max-len
  text7 = 'Profundicé en las herramientas Blender y Unity 3D, además del uso de Photoshop y Premiere con el fin de: añadir nuevas prácticas de física virtuales en la plataforma de Fislab y crear un paseo virtual del edificio del Centro de Física.';

  fecha3 = 'De 03/10/2018 a 24/04/2019';
  constructor() { }

  ngOnInit() {
  }

}
