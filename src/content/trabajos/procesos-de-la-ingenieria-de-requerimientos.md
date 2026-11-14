---
titulo: "Procesos de la Ingeniería de Requerimientos"
numero: 5
fecha: 2026-09-17
descripcion: "Elicitación, especificación, validación y gestión de requerimientos aplicadas a un sistema de turnos de una institución de salud, con trazabilidad y control de cambios."
tags: ["Procesos", "Trazabilidad", "Gestión de cambios"]
portada: "../../assets/portadas/tp-05.svg"
portadaAlt: "Portada del TP 5: Procesos de la Ingeniería de Requerimientos"
modalidad: grupal
documento: "/documentos/procesos-de-la-ingenieria-de-requerimientos.docx"
---

### Caso: Sistema de Turnos en una Institución de Salud

#### Parte 1 – Elicitación

##### Stakeholders relevantes

Los principales stakeholders del sistema serían:

1.  **Pacientes:** utilizarán el sistema para solicitar, consultar y gestionar sus turnos.

2.  **Personal administrativo:** se encargará de registrar y organizar los turnos, atender consultas y gestionar las agendas.

3.  **Médicos:** necesitan consultar su agenda y recibir notificaciones sobre nuevos turnos o cancelaciones.

##### Preguntas de elicitación

Durante las entrevistas se podrían realizar las siguientes preguntas:

4.  ¿Cómo se asignan actualmente los turnos y qué problemas ocurren con mayor frecuencia?

5.  ¿Qué información se necesita solicitar al paciente para registrar un turno?

6.  ¿Cómo se informa actualmente a los médicos cuando se asigna o cancela un turno?

7.  ¿Qué debería poder hacer un paciente desde el sistema, además de solicitar un turno?

8.  ¿Qué tipos de turnos y especialidades médicas deberían poder gestionarse mediante el sistema?

##### Requerimientos funcionales

- **RF1:** El sistema deberá permitir a los pacientes solicitar turnos médicos seleccionando especialidad, médico, fecha y horario disponible.

- **RF2:** El sistema deberá permitir al personal administrativo consultar, modificar y cancelar turnos.

- **RF3:** El sistema deberá enviar notificaciones a los médicos y pacientes cuando se cree, modifique o cancele un turno.

- **RF4:** El sistema deberá impedir que dos pacientes sean asignados al mismo horario de un médico.

##### Requerimientos no funcionales

##### 

- **RNF1:** El sistema deberá estar disponible las 24 horas del día, los 7 días de la semana, salvo períodos programados de mantenimiento.

- **RNF2:** El sistema deberá proteger los datos personales de los pacientes mediante autenticación y mecanismos de seguridad adecuados.

## Especificación

#### RF1 – Solicitud de turno

##### Descripción:

El sistema permitirá al paciente solicitar un turno médico seleccionando una especialidad, un médico, una fecha y un horario disponible.

##### Precondiciones:

- El paciente deberá estar registrado o identificado en el sistema.

- Deberá existir al menos un horario disponible.

##### Proceso:

1.  El paciente seleccionará la especialidad médica.

2.  El sistema mostrará los médicos disponibles.

3.  El paciente seleccionará un médico.

4.  El sistema mostrará los días y horarios disponibles.

5.  El paciente seleccionará un horario.

6.  El sistema verificará que el horario continúe disponible.

7.  El sistema registrará el turno.

8.  El sistema mostrará una confirmación al paciente.

##### Postcondición:

El turno quedará registrado en la agenda del médico y no podrá ser asignado simultáneamente a otro paciente.

#### RF4 – Prevención de duplicación de turnos

##### Descripción:

El sistema deberá impedir que dos pacientes tengan asignado el mismo horario para un mismo médico.

##### Precondición:

Debe existir una solicitud de asignación de turno.

##### Proceso:

##### 

1.  El paciente o administrativo seleccionará médico, fecha y horario.

2.  El sistema verificará la disponibilidad.

3.  Si el horario está disponible, el sistema registrará el turno.

4.  Si el horario ya fue ocupado, el sistema rechazará la operación y mostrará un mensaje indicando que el horario no está disponible.

##### Postcondición:

Cada horario de un médico podrá estar asociado como máximo a un único turno.

## Validación

#### Técnicas de validación

##### Prototipo:

Se podría crear un prototipo de las pantallas principales del sistema, como la solicitud de turnos, consulta de agenda y cancelación. El personal administrativo y algunos pacientes podrían probarlo antes de desarrollar el sistema completo.

##### Entrevistas y revisión de requerimientos:

Se presentarían los requerimientos al personal administrativo, médicos y pacientes para comprobar que reflejan correctamente sus necesidades y detectar errores, ambigüedades o funciones que falten.

#### Feedback esperado

Del **personal administrativo** se esperaría obtener información sobre:

- Si el proceso de asignación de turnos es sencillo.

- Si pueden consultar y modificar las agendas correctamente.

- Si las notificaciones son suficientes.

- Qué funciones adicionales necesitan para realizar su trabajo.

De los **pacientes** se esperaría conocer:

- Si pueden encontrar fácilmente un médico y horario.

- Si el proceso para solicitar un turno es comprensible.

- Si las confirmaciones y notificaciones son claras.

- Si necesitan otras opciones, como consultar o cancelar turnos.

## Gestión de Requerimientos

#### Trazabilidad

#### 

La trazabilidad permite relacionar una necesidad del usuario con los requerimientos, el diseño, la implementación y las pruebas del sistema.

En este proyecto, la necesidad inicial es:

**Necesidad:** Evitar la duplicación de turnos. Esta necesidad se transforma en:

##### Requerimiento:

**RF4 – El sistema deberá impedir que dos pacientes sean asignados al mismo horario de un médico.**

Luego, este requerimiento se relaciona con:

##### Diseño:

Se diseña una estructura de datos que permita identificar al médico, la fecha y el horario de cada turno y comprobar si ya está ocupado.

##### Implementación:

Se desarrolla la función que verifica la disponibilidad antes de registrar un nuevo turno.

##### Prueba:

Se realiza una prueba intentando registrar dos pacientes en el mismo horario. El sistema debe permitir el primer turno y rechazar el segundo.

De esta manera, se puede comprobar que la necesidad original fue tenida en cuenta durante todo el desarrollo.

**Necesidad → Requerimiento → Diseño → Implementación → Prueba**

#### Cambio solicitado: cancelación de turnos en línea

Si a mitad del proyecto la dirección solicita que los pacientes puedan cancelar sus turnos en línea, primero se debería **registrar formalmente la solicitud de cambio**.

Se podría crear una solicitud de cambio indicando:

- **Descripción:** Permitir que los pacientes cancelen sus turnos desde el sistema.

- **Solicitante:** Dirección del sanatorio.

- **Motivo:** Facilitar la gestión de cancelaciones y reducir el trabajo administrativo.

- **Prioridad:** A determinar por la dirección.

- **Impacto:** Analizar los requerimientos, diseño, base de datos, notificaciones y pruebas existentes.

Luego se debería analizar el impacto antes de aprobar el cambio.

#### Impacto sobre los requerimientos

El cambio agregaría un nuevo requerimiento funcional:

##### RF5 – Cancelación de turno:

El sistema deberá permitir al paciente cancelar un turno previamente asignado, siempre que se cumplan las condiciones establecidas por el sanatorio.

También afectaría otros requerimientos existentes. Por ejemplo, **RF3**, relacionado con las notificaciones, debería contemplar que cuando un paciente cancele un turno, el médico y posiblemente el personal administrativo reciban una notificación.

Además, habría que actualizar:

- El diseño de las pantallas.

- La lógica de gestión de turnos.

- La base de datos, si fuera necesario.

- Las notificaciones.

- Los casos de prueba.

- La documentación del proyecto.

Finalmente, el cambio debería ser **aprobado por los responsables del proyecto**, incorporado a la documentación y comunicado al equipo de desarrollo.

**Proceso del cambio:**

**Solicitud → Análisis de impacto → Aprobación → Actualización de requerimientos → Implementación → Pruebas → Actualización de documentación**
