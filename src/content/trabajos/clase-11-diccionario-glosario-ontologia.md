---
titulo: "Diccionario, glosario y ontología (Clase 11)"
numero: 12
fecha: 2026-10-29
descripcion: "Autoevaluación de cierre: el concepto \"ticket\" definido como diccionario, glosario y ontología; símbolos LEL (sujeto, verbos y estado) y diferencias entre idioma, lenguaje, dialecto y argot."
tags: ["Glosario", "Ontología", "LEL"]
portada: "../../assets/portadas/tp-12.svg"
portadaAlt: "Portada del TP 12: Diccionario, glosario y ontología"
modalidad: individual
---

## 1. El concepto "ticket" de tres formas distintas

### Diccionario

- **Palabra:** Ticket.
- **Categoría gramatical:** Sustantivo.
- **Definición 1:** Documento impreso o digital que sirve como comprobante del pago de un producto o servicio.
- **Definición 2:** Boleto o entrada que otorga a su portador el derecho de acceder a un transporte o evento.

### Glosario

- **Símbolo:** Ticket (sinónimo: solicitud de soporte).
- **Noción (descripción interna):** Es un registro digital obligatorio para documentar y hacer seguimiento de un incidente en un sistema de ayuda. Posee todos los datos e historial del problema reportado por el usuario.
- **Impacto (descripción externa):** El usuario o solicitante lo genera. El sector de soporte técnico lo actualiza, responde y lo cierra al resolver la solicitud.

### Ontología

- **Conjunto de términos:** Ticket, Incidente, Sistema de Gestión de IT.
- **Propiedades entre dichos términos:** El ticket es un registro de incidente que es parte de un sistema de gestión.
- **Descripto en un lenguaje formal:** `Ticket(x) ∧ RegistroIncidente(x) → SistemaGestion(y)`

## 2. Glosario LEL

### Sujeto: Cliente

- **Noción:** Persona que solicita, reserva o adquiere un producto, servicio o ticket.
- **Impacto:** Paga con tarjeta de crédito o paga en efectivo. Recibe el ticket o comprobante de su operación.

### Verbo: Pagar con tarjeta de crédito

- **Noción:** Acción para cancelar el valor monetario de una transacción o ticket utilizando un medio de pago electrónico bancario.
- **Impacto:** El cliente presenta, desliza o ingresa los datos de su tarjeta de crédito. El sistema o terminal verifica los fondos y aprueba la transacción. El cliente firma el comprobante o ingresa su código de seguridad.

### Verbo: Pagar en efectivo

- **Noción:** Acción para cancelar el valor monetario de una transacción o ticket mediante la entrega de dinero físico.
- **Impacto:** El cliente entrega el dinero físico al cajero. El receptor verifica que el monto entregado cubra el costo total. El receptor entrega el vuelto correspondiente si el monto entregado es mayor al costo.

### Estado: Ticket reservado

- **Noción:** Situación que representa que un ticket ha sido apartado y asegurado temporalmente para un cliente específico, pero cuyo pago o confirmación final aún está pendiente.
- **Impacto:** Puede transicionar al estado "ticket pagado" o "ticket emitido" una vez que el cliente abona el importe. Puede transicionar al estado "ticket cancelado" o "ticket liberado" si el cliente no realiza el pago dentro del tiempo de vigencia de la reserva.

## 3. Idioma, lenguaje, dialecto y argot

- **Idioma:** Sistema de comunicación verbal, gestual o escrito compartido por una comunidad, un pueblo o una nación.
- **Lenguaje:** Capacidad innata y universal de los seres humanos para comunicarse y expresar pensamientos, ideas, emociones y necesidades mediante un sistema de signos.
- **Dialecto:** Variedad regional o geográfica de un idioma que se habla en un territorio determinado, sin perder la unidad estructural del sistema lingüístico general.
- **Argot:** Lenguaje informal y particular que utilizan los individuos de un mismo grupo social, profesional, generacional o marginal para comunicarse entre sí.
