---
titulo: "TP Integrador · Entrega 2: stakeholders, elicitación y cualidades"
numero: 11
fecha: 2026-10-29
descripcion: "Stakeholders de la tienda de informática con su matriz de poder e interés, plan de elicitación, cualidades del software priorizadas y el episodio 1 del \"Podcast del Ingeniero\"."
tags: ["TP Integrador", "Stakeholders", "Elicitación", "Podcast"]
portada: "../../assets/portadas/podcast-del-ingeniero.jpg"
portadaAlt: "Portada del \"Podcast del Ingeniero\": un micrófono de estudio sobre una placa madre"
modalidad: grupal
documento: "/documentos/tp-integrador-entrega-2.docx"
podcast: "https://open.spotify.com/episode/0BLGajH50Jvs013BXdxbbz"
---

##  Introducción

En esta segunda entrega retomamos el dominio definido en la Entrega 1 —una tienda de informática que busca automatizar su gestión— y avanzamos sobre las primeras actividades de la Ingeniería de Requerimientos: la identificación de los stakeholders (interesados), la planificación de la elicitación y la definición de las cualidades del software, que darán origen a los primeros requerimientos no funcionales. Estos avances también se comunican en el primer episodio del “Podcast del Ingeniero”.

## 1. Enunciado de la Entrega 1

### Sistema de gestión de una tienda de informática

1.1. Contexto y descripción general del negocio. Se considera una tienda de informática dedicada a la venta de computadoras, componentes, periféricos y accesorios tecnológicos. El negocio atiende a clientes y se abastece de mercadería a través de proveedores.

1.2. Recursos y entidades que maneja el sistema. La tienda comercializa distintos tipos de productos, entre ellos computadoras, procesadores, placas de video, memorias RAM, discos de almacenamiento, placas madre, fuentes de alimentación, monitores, teclados, mouse, auriculares y otros accesorios. Cada producto cuenta con información relacionada con su identificación, marca, categoría, precio y cantidad disponible. Además de los productos, el sistema debe manejar información de clientes, proveedores, ventas y stock.

1.3. Áreas organizacionales y actores involucrados. El negocio cuenta con las siguientes áreas:

- Administración: supervisa y controla las actividades generales del negocio.

- Ventas: se encarga de la atención de los clientes y de las operaciones de venta.

- Depósito: se ocupa del almacenamiento y control de los productos.

- Compras: gestiona la adquisición de mercadería y la relación con los proveedores.

Además, interactúan con el negocio actores externos: los clientes, atendidos por Ventas, y los proveedores, con quienes se vincula Compras.

1.4. Dependencias funcionales. Funcionalmente, las áreas de Ventas, Depósito y Compras dependen del área de Administración.

1.5. Objetivo del sistema a desarrollar. Se quiere desarrollar un sistema automatizado de gestión de la tienda de informática que permita centralizar la información de los productos, clientes, proveedores, ventas y stock, reduciendo el trabajo manual y facilitando el control y la administración del negocio. Para ello se contratará una empresa de desarrollo de sistemas, responsable de construir el sistema requerido.

## 2. Definiciones complementarias del dominio

Al analizar el enunciado para identificar a los interesados, detectamos aspectos del universo de discurso que no estaban definidos y que impactan en los requerimientos. Los formulamos como supuestos, a validar durante la elicitación:

- Modalidad de venta: la venta es presencial en el local. La venta online queda fuera del alcance de esta primera versión.

- Medios de pago: se aceptan efectivo, tarjetas de débito y crédito, y transferencia bancaria.

- Facturación: cada venta genera un comprobante fiscal electrónico conforme a la normativa de ARCA.

- Stock mínimo: cada producto tiene un punto de reposición; al alcanzarlo, Depósito avisa a Compras para generar una orden de compra.

- Garantías y devoluciones: los productos tienen garantía según el fabricante; las devoluciones las registra Ventas y Depósito controla el estado del producto devuelto.

- Usuarios y roles: cada empleado accede al sistema con un usuario propio y solo a las funciones de su área; Administración tiene acceso a reportes generales.

## 3. Identificación de stakeholders

Un stakeholder es toda persona, grupo u organización que tiene interés en el sistema, que puede verse afectado por él o que puede influir en su desarrollo. Los clasificamos en internos (pertenecen a la tienda o a la empresa desarrolladora) y externos, y según su relación con el sistema en directos (lo usarán) e indirectos (se ven afectados por sus resultados).

### 3.1. Stakeholders, motivaciones y características

<table>
<thead>
<tr class="header">
<th>Stakeholder</th>
<th>Tipo</th>
<th>Motivaciones</th>
<th>Características relevantes</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Dueño / Gerente de Administración</td>
<td><p>Interno, indirecto</p>
<p>Patrocinador (sponsor)</p></td>
<td>Tener control centralizado del negocio, reducir errores y costos, tomar decisiones con información confiable.</td>
<td>Mayor poder de decisión; aprueba el presupuesto y el alcance. Conoce el negocio de forma global pero no el detalle operativo. Poco tiempo disponible.</td>
</tr>
<tr class="even">
<td>Personal de Ventas (vendedores y cajeros)</td>
<td><p>Interno, directo</p>
<p>Usuario final</p></td>
<td>Atender más rápido, consultar stock y precios al instante, emitir comprobantes sin errores.</td>
<td>Usuarios intensivos del sistema; trabajan con el cliente delante. Nivel técnico variable. Conocen las consultas reales de los clientes.</td>
</tr>
<tr class="odd">
<td>Personal de Depósito</td>
<td><p>Interno, directo</p>
<p>Usuario final</p></td>
<td>Saber con exactitud qué hay, dónde está y qué falta; dejar de llevar planillas manuales.</td>
<td>Conocen el flujo físico de la mercadería (ingresos, egresos, devoluciones). Pueden resistirse al cambio si el sistema les suma trabajo.</td>
</tr>
<tr class="even">
<td>Personal de Compras</td>
<td><p>Interno, directo</p>
<p>Usuario final</p></td>
<td>Recibir alertas de reposición, comparar proveedores y registrar órdenes de compra.</td>
<td>Nexo con los proveedores. Necesitan historial de compras y precios para negociar.</td>
</tr>
<tr class="odd">
<td>Clientes</td>
<td>Externo, indirecto</td>
<td>Ser atendidos rápido, recibir información correcta de stock y precio, obtener su comprobante y garantía.</td>
<td>No usan el sistema directamente, pero perciben su calidad en la atención. Fuente de expectativas sobre tiempos y servicio.</td>
</tr>
<tr class="even">
<td>Proveedores</td>
<td>Externo, indirecto</td>
<td>Recibir órdenes de compra claras y en tiempo; cobrar en término.</td>
<td>Su información (catálogo, precios, plazos) alimenta al sistema. No participan del desarrollo.</td>
</tr>
<tr class="odd">
<td>Empresa desarrolladora (líder de proyecto, analistas, desarrolladores, testers)</td>
<td>Externo a la tienda, contratado</td>
<td>Entender bien los requerimientos, entregar en tiempo y costo, satisfacer al cliente.</td>
<td>Responsables de la elicitación, especificación, construcción y validación. Expertos técnicos, pero no del dominio.</td>
</tr>
<tr class="even">
<td>ARCA (organismo fiscal) / Contador externo</td>
<td><p>Externo, indirecto</p>
<p>Regulador</p></td>
<td>Que la facturación y los registros cumplan con la normativa vigente.</td>
<td>Imponen restricciones que el sistema debe respetar (requerimientos legales). No negociables.</td>
</tr>
</tbody>
</table>

### 3.2. Matriz de poder e interés

Para definir cómo gestionar a cada interesado, los ubicamos en una matriz de poder (influencia) e interés:

| Cuadrante                 | Stakeholders                                              | Estrategia                                                                                |
|---------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Alto poder – Alto interés | Dueño / Gerente de Administración; Empresa desarrolladora | Gestionar de cerca: involucrarlos en decisiones y validaciones.                           |
| Alto poder – Bajo interés | ARCA / Contador externo                                   | Mantener satisfechos: cumplir sus restricciones sin necesidad de participación continua.  |
| Bajo poder – Alto interés | Personal de Ventas, Depósito y Compras                    | Mantener informados y participando: son la principal fuente de requerimientos operativos. |
| Bajo poder – Bajo interés | Clientes; Proveedores                                     | Monitorear: consultarlos puntualmente (por ejemplo, con cuestionarios).                   |

## 4. Técnicas de elicitación

La elicitación es el proceso de descubrir, obtener y comprender las necesidades de los stakeholders. Como ninguna técnica cubre todo, combinamos varias según el interesado y el tipo de conocimiento buscado (explícito o tácito).

| Técnica                                 | Con quién                                 | Justificación                                                                                                                                                                                          |
|-----------------------------------------|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1\. Análisis de documentación           | Administración, Depósito, Compras         | Primer paso para conocer el dominio sin consumir tiempo de los usuarios: facturas, remitos, órdenes de compra, planillas de stock y listas de precios muestran los datos y reglas de negocio actuales. |
| 2\. Entrevistas semiestructuradas       | Dueño/Gerente y responsables de cada área | Permiten obtener objetivos, problemas y prioridades de cada área. Las preguntas guía aseguran cubrir los temas, y la parte abierta deja surgir necesidades no previstas.                               |
| 3\. Observación directa                 | Ventas y Depósito                         | Mucho conocimiento es tácito: los usuarios hacen tareas que no saben describir. Ver una venta o un ingreso de mercadería revela pasos, demoras y errores reales.                                       |
| 4\. Cuestionarios                       | Clientes (y proveedores)                  | Llegan a muchas personas con bajo costo. Sirven para conocer expectativas de atención y comunicación sin involucrarlos en el desarrollo.                                                               |
| 5\. Taller grupal / Brainstorming       | Representantes de todas las áreas         | Ventas, Depósito y Compras comparten procesos (ej.: reposición de stock). Reunirlos ayuda a detectar conflictos entre requerimientos y llegar a acuerdos.                                              |
| 6\. Prototipado (maquetas de pantallas) | Usuarios finales y Gerente                | Facilita validar lo elicitado: los usuarios reaccionan mejor ante algo visual que ante una especificación escrita, y se detectan malentendidos temprano.                                               |

Orden de aplicación previsto: análisis de documentación → entrevistas → observación → cuestionarios → taller grupal → prototipado. Así se va de lo general a lo particular y se termina validando con los usuarios.

## 5. Cualidades del software (en orden de prioridad)

Las cualidades del software (atributos de calidad, tomando como referencia la norma ISO/IEC 25010) describen cómo debe comportarse el sistema más allá de qué hace. De ellas surgirán los requerimientos no funcionales. Las priorizamos según el impacto que tiene cada una en el objetivo del negocio:

| Prioridad | Cualidad                                | Por qué en este lugar                                                                                                                                 | Requerimiento no funcional inicial (ejemplo)                                                                             |
|-----------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| 1         | Confiabilidad / Integridad de los datos | El objetivo central es centralizar información. Si el stock o las ventas registradas no coinciden con la realidad, el sistema pierde su razón de ser. | Toda venta confirmada debe descontar el stock en el mismo momento; ante una falla, la operación no debe quedar a medias. |
| 2         | Usabilidad                              | Los usuarios principales atienden clientes en tiempo real y tienen distinto nivel técnico. Un sistema difícil se deja de usar.                        | Un vendedor nuevo debe poder registrar una venta tras una capacitación de no más de 2 horas.                             |
| 3         | Seguridad                               | Se manejan datos de clientes, precios y operaciones económicas; cada área debe acceder solo a lo que le corresponde.                                  | El acceso será con usuario y contraseña, con permisos por rol (Ventas, Depósito, Compras, Administración).               |
| 4         | Eficiencia (rendimiento)                | La consulta de stock y la emisión del comprobante ocurren con el cliente esperando.                                                                   | La consulta de un producto debe responder en menos de 2 segundos.                                                        |
| 5         | Mantenibilidad                          | El negocio incorpora productos y categorías nuevas, y a futuro podría sumar venta online.                                                             | Debe poder agregarse una nueva categoría de producto sin modificar el código.                                            |

## 6. Léxico de la asignatura

Términos y conceptos teóricos utilizados en esta entrega y su relación con el caso:

| Término                          | Definición                                                                                                                  |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Ingeniería de Requerimientos     | Disciplina que se ocupa de descubrir, documentar, validar y gestionar lo que un sistema debe hacer y cómo debe comportarse. |
| Requerimiento                    | Condición o capacidad que el sistema debe cumplir para satisfacer una necesidad de un stakeholder.                          |
| Requerimiento funcional (RF)     | Describe qué debe hacer el sistema: funciones, servicios, comportamientos.                                                  |
| Requerimiento no funcional (RNF) | Describe restricciones o cualidades: cómo debe hacerlo (rendimiento, seguridad, usabilidad).                                |
| Dominio / Universo de discurso   | Contexto general donde se desarrollará y operará el sistema, con su vocabulario, reglas y actores.                          |
| Stakeholder                      | Persona, grupo u organización con interés en el sistema o afectada por él.                                                  |
| Elicitación                      | Proceso de obtener los requerimientos a partir de los stakeholders y otras fuentes.                                         |
| Conocimiento tácito              | Conocimiento que el usuario aplica pero no puede expresar fácilmente.                                                       |
| Cualidad / Atributo de calidad   | Característica que determina el grado de excelencia del software (ISO/IEC 25010).                                           |
| Priorización                     | Ordenar requerimientos o cualidades según su importancia para el negocio.                                                   |
| Validación                       | Comprobar que los requerimientos reflejan lo que el stakeholder realmente necesita.                                         |
| Trazabilidad                     | Capacidad de seguir un requerimiento desde su origen hasta su implementación.                                               |
| Patrocinador (sponsor)           | Stakeholder que financia el proyecto y tiene la decisión final.                                                             |

## 7. Guion del podcast

“Podcast del Ingeniero” — Episodio 1: ¿Quiénes son los interesados?

Voces: Agustín (conductor), Carlos, Gonzalo y Nahuel.

### Apertura (0:00 – 0:50)

Agustín: ¡Hola a todos y bienvenidos al “Podcast del Ingeniero”! Este es nuestro primer episodio. Somos estudiantes de Ingeniería en Sistemas de la Universidad Abierta Interamericana, de la asignatura Ingeniería de Requerimientos, a cargo de la profesora Marcela Samela. Yo soy Agustín Gómez…

Carlos: Yo soy Carlos Cativa…

Gonzalo: Gonzalo Castañeda…

Nahuel: …y Nahuel Cerrano. ¡Buenas!

Agustín: Hoy vamos a contar cómo arrancamos con los requerimientos de nuestro caso: el sistema de gestión de una tienda de informática. Carlos, refrescanos un poco de qué se trata.

### El caso de estudio (0:50 – 1:30)

Carlos: Dale. Es una tienda que vende computadoras, componentes, periféricos y accesorios. Tiene cuatro áreas: Administración, que supervisa todo; Ventas, que atiende a los clientes; Depósito, que controla los productos; y Compras, que trata con los proveedores. Hoy mucho se hace a mano, y el objetivo es un sistema que centralice productos, clientes, proveedores, ventas y stock.

Nahuel: Y algo que agregamos en esta entrega: definimos cosas que no estaban en el dominio, como los medios de pago, la facturación electrónica y el stock mínimo para avisar cuándo reponer.

Agustín: Bien. Pero antes de pensar qué tiene que hacer el sistema, hay que saber para quién lo hacemos. Gonzalo, ¿con quiénes nos encontramos?

### Stakeholders (1:30 – 2:50)

Gonzalo: Con los stakeholders, o interesados: todas las personas u organizaciones que tienen interés en el sistema o se ven afectadas por él. El principal es el dueño o gerente de Administración: es el patrocinador, el que paga y decide. Quiere control y datos confiables para tomar decisiones.

Carlos: Después están los usuarios directos: los vendedores, que necesitan consultar stock y precios al instante con el cliente adelante; el personal de Depósito, que quiere dejar las planillas y saber exactamente qué hay; y Compras, que necesita alertas de reposición e historial de proveedores.

Nahuel: Y hay interesados externos: los clientes, que no tocan el sistema pero notan si la atención es rápida; los proveedores; la empresa desarrolladora que lo va a construir; y ARCA, el organismo fiscal, que impone reglas de facturación que no se pueden negociar.

Gonzalo: Para ordenarlos usamos una matriz de poder e interés. Al gerente lo gestionamos de cerca; a los empleados los mantenemos participando, porque son la fuente principal de requerimientos; y a clientes y proveedores los consultamos puntualmente.

Agustín: Perfecto. Ya sabemos a quién preguntarle… ahora, ¿cómo le preguntamos? Nahuel.

### Técnicas de elicitación (2:50 – 4:10)

Nahuel: Eso es la elicitación: descubrir las necesidades de los interesados. Elegimos combinar técnicas. Primero, análisis de documentación: facturas, remitos, planillas de stock. Nos muestra cómo trabajan hoy sin quitarle tiempo a nadie.

Agustín: Después, entrevistas semiestructuradas con el gerente y los responsables de cada área: tenemos preguntas guía, pero dejamos lugar a que surja lo que no teníamos previsto.

Carlos: También observación directa en Ventas y Depósito, porque hay conocimiento tácito: cosas que el usuario hace todos los días pero no sabe explicar. Viendo una venta real aparecen pasos y demoras que en una entrevista no salen.

Gonzalo: A los clientes les hacemos cuestionarios, que son baratos y llegan a muchos. Hacemos un taller con todas las áreas para resolver conflictos, como quién se encarga de la reposición. Y al final, prototipos de pantallas para validar que entendimos bien.

Agustín: Excelente. Y ya sabiendo qué quieren, falta algo clave: cómo tiene que ser el sistema.

### Cualidades del software (4:10 – 5:20)

Carlos: Las cualidades del software, o atributos de calidad, que después se convierten en requerimientos no funcionales. Las ordenamos por prioridad. Primero, confiabilidad e integridad de los datos: si el stock del sistema no coincide con el real, no sirve para nada.

Nahuel: Segundo, usabilidad: el vendedor está con el cliente esperando, y tiene que poder aprender a usarlo rápido, con poca capacitación.

Gonzalo: Tercero, seguridad: hay datos de clientes y plata en juego, así que cada empleado entra con su usuario y ve solo lo de su área.

Agustín: Y también sumamos eficiencia, que la consulta de un producto responda en un par de segundos, y mantenibilidad, para poder agregar categorías nuevas o, el día de mañana, venta online.

### Cierre (5:20 – 6:00)

Agustín: Para cerrar: en este episodio identificamos a los stakeholders y sus motivaciones, planificamos la elicitación y priorizamos las cualidades del software.

Gonzalo: Lo que nos llevamos: un buen requerimiento empieza por entender a las personas, no por la tecnología.

Nahuel: En el próximo episodio vamos a pasar a los requerimientos funcionales y no funcionales en detalle.

Carlos: Gracias por escucharnos, ¡y nos vemos en el próximo “Podcast del Ingeniero”!

## 8. Enlace al podcast

[Episodio 1: ¿Quiénes son los interesados?](https://open.spotify.com/episode/0BLGajH50Jvs013BXdxbbz?nd=1&dlsi=f7d0bf5ec22644bc)


---

Viene de la [Entrega 1](/trabajos/tp-integrador-entrega-1/) · Continúa en la [Entrega 3 (final)](/trabajos/tp-integrador-entrega-3/).
