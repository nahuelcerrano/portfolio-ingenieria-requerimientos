---
titulo: "Casos de uso, historias de usuario y escenarios"
numero: 15
fecha: 2026-11-05
descripcion: "Modelado de la tienda de informática del TP integrador con un caso de uso (registrar venta), una historia de usuario con criterios de aceptación y un escenario Dado/Cuando/Entonces."
tags: ["Casos de uso", "User stories", "Escenarios"]
portada: "../../assets/portadas/tp-15.svg"
portadaAlt: "Portada del TP 15: Casos de uso, historias de usuario y escenarios"
modalidad: individual
documento: "/documentos/casos-de-uso-historias-y-escenarios.docx"
---

## Consigna

Especificar, sobre el dominio del TP integrador (la tienda de informática), un caso de uso, una historia de usuario con criterios de aceptación y un escenario.

## Caso de uso: Registrar venta presencial

- Actor Principal: Personal de Ventas.

- Actores Secundarios: ARCA (organismo fiscal regulador).

- Precondiciones: El empleado de ventas debe haber ingresado al sistema con su usuario y contraseña, respetando los permisos de su rol.

- Flujo Principal:

  1.  El vendedor atiende al cliente de forma presencial en el local e ingresa en el sistema el producto solicitado.

  2.  El sistema responde en menos de 2 segundos mostrando la cantidad disponible y el precio del producto.

  3.  El vendedor confirma la compra y selecciona el medio de pago elegido por el cliente: efectivo, tarjeta de débito, tarjeta de crédito o transferencia bancaria.

  4.  El sistema registra la venta y en el mismo momento, descuenta el producto del stock.

  5.  El sistema procesa la información conforme a la normativa de ARCA y genera un comprobante fiscal electrónico.

- Flujo Alternativo: Ante un error o caída del sistema durante la confirmación, la operación no queda a medias para garantizar la integridad de los datos y el stock no se descuenta erróneamente.

## Historia de usuario: Alerta de reposición de mercadería

- Título: Control de stock mínimo

- Como Personal de Depósito

- Quiero que el sistema identifique cuando un producto alcanza su punto de reposición

- Para poder avisarle al área de Compras y que ellos generen una orden de compra hacia los proveedores

- Criterios de Aceptación:

  - El sistema debe permitir configurar un límite de stock mínimo para cada producto registrado.

  - El sistema debe monitorear los egresos de mercadería y detectar cuándo el stock disponible de un producto es igual o menor a su punto de reposición.

  - El sistema debe enviar una notificación o alerta al área de Compras para que inicie la adquisición de nueva mercadería.

## Escenario: Venta presencial exitosa con actualización en tiempo real

- Dado que un cliente en el local desea comprar una computadora y periféricos.

- Y el cajero del Personal de Ventas ha iniciado sesión en el sistema y verifica que hay cantidad disponible.

- Cuando el cajero procesa el pago y confirma la venta.

- Entonces el sistema descuenta los artículos del stock de manera inmediata para que el Personal de Depósito sepa con exactitud qué egresó.

- Y el sistema emite el comprobante fiscal electrónico correspondiente para el cliente.
