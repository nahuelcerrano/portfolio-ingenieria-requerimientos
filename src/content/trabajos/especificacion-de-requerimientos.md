---
titulo: "Especificación de requerimientos: app de bicicletas compartidas"
numero: 6
fecha: 2026-09-17
descripcion: "Redacción de RF y RNF verificables para una app de reserva de bicicletas, detección y corrección de requerimientos ambiguos y un mini glosario del dominio."
tags: ["Especificación", "Ambigüedad", "Glosario"]
portada: "../../assets/portadas/tp-06.svg"
portadaAlt: "Portada del TP 6: Especificación de requerimientos"
modalidad: grupal
documento: "/documentos/especificacion-de-requerimientos.docx"
---

## Consigna

A partir del caso de una aplicación de bicicletas compartidas (reservas de 15 minutos, mapa de estaciones y modo sin conexión), especificar requerimientos funcionales y no funcionales verificables, detectar y corregir requerimientos ambiguos y armar un glosario del dominio.

## Requerimientos funcionales (RF)

\[RF01\] El sistema debe registrar una reserva de bicicleta por un período máximo y exacto de 15 minutos.

\[RF02\] El sistema debe impedir la doble reserva de una misma bicicleta validando la disponibilidad en tiempo real antes de confirmar la operación.

\[RF03\] El sistema debe enviar una notificación al dispositivo del usuario inmediatamente al finalizar el tiempo de su reserva.

\[RF04\] El sistema debe mostrar el mapa de estaciones y su ubicación incluso cuando el dispositivo no cuente con conexión a internet.

## Requerimientos no funcionales (RNF)

Redactados con criterios verificables y medibles para que puedan ser testeados de forma objetiva.

- \[RNF01\] El sistema debe procesar y confirmar una solicitud de reserva en un tiempo máximo de 2 segundos bajo condiciones normales de red como 3G, 4G o Wi-Fi.

- \[RNF02\] El sistema debe garantizar que el mapa cacheado localmente para el uso offline pese menos de 50 MB, permitiendo su carga fluida sin conexión.

- \[RNF03\] El sistema debe soportar un mínimo de 2.000 usuarios simultáneos interactuando con el mapa sin degradar el tiempo de respuesta por encima de los 3 segundos.

## Detección y corrección de ambigüedades

Requerimiento 1: El sistema debe tener buena seguridad.

- Problema: Buena seguridad es subjetivo e imposible de medir o testear formalmente.

- Corrección: El sistema debe encriptar las contraseñas de los usuarios antes de almacenarlas en la base de datos.

Requerimiento 2: Los usuarios deben poder hacer reservas sin problemas.

- Problema: Sin problemas es ambiguo. No especifica cómo se mide el éxito de la reserva.

- Corrección: El sistema debe confirmar la creación de la reserva mostrando un mensaje de éxito en pantalla y actualizando el estado de la bicicleta a Reservada.

Requerimiento 3: Tiene que mostrar las estaciones como sea.

- Problema: Como sea es informal y no define la interfaz o formato de visualización.

- Corrección: El sistema debe mostrar la ubicación de las estaciones de bicicletas utilizando pines geolocalizados sobre un mapa interactivo.

Requerimiento 4: Se debe poder usar el mapa cuando no hay conexión.

- Problema: No aclara qué funcionalidades del mapa están restringidas por la falta de internet.

- Corrección: El sistema debe mostrar el mapa con las estaciones cacheadas en la última conexión, deshabilitando la funcionalidad de reserva, cuando se detecte pérdida de red.

Requerimiento 5: Debe permitir el acceso a la cuenta.

- Problema: No define los actores, el método de autenticación ni las credenciales requeridas.

- Corrección: El sistema debe permitir el inicio de sesión a los usuarios registrados validando su correo electrónico y contraseña.

## Mini glosario

- Reserva: Acción temporal mediante la cual un usuario autenticado retiene el uso exclusivo de una bicicleta específica por un lapso no prorrogable de 15 minutos.

- Estación: Ubicación física geolocalizada en el mapa de la aplicación donde las bicicletas se encuentran ancladas y disponibles para su retiro, o donde pueden ser devueltas.

- Doble Reserva: Condición de error en la que el sistema asigna simultáneamente una misma bicicleta a dos o más usuarios diferentes en el mismo instante de tiempo.

- Modo Offline: Estado de la aplicación en el cual el dispositivo del usuario no tiene acceso a internet, permitiendo únicamente la consulta del mapa almacenado en caché local, pero impidiendo realizar transacciones como reservas o reportes de daños.
