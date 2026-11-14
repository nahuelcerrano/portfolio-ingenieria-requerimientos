---
titulo: "Uso del lenguaje natural (Clase 10)"
numero: 10
fecha: 2026-10-21
descripcion: "Un término con significado propio dentro de un dominio (\"liquidar\" en consorcios) y la reescritura de una especificación en lenguaje natural siguiendo guías de redacción."
tags: ["Lenguaje natural", "Redacción", "Dominio"]
portada: "../../assets/portadas/tp-10.svg"
portadaAlt: "Portada del TP 10: Uso del lenguaje natural"
modalidad: individual
---

## 1. Un término con significado propio en un dominio

**Consigna:** identificar un término o expresión de un dominio en el que se haya participado en el desarrollo de software, donde tenga una definición precisa diferente del sentido común.

**Respuesta:** "Liquidar" en el desarrollo de un sistema de gestión de consorcios y expensas es un término que se refiere al proceso administrativo mediante el cual se recopilan, calculan y determinan el monto exacto de una unidad funcional (departamento, casa). De manera coloquial, "liquidar" normalmente se refiere a terminar algo o saldar una cuenta.

## 2. Reescritura de una especificación

**Consigna:** tomar una especificación en lenguaje natural de alrededor de 10 líneas y reescribirla a partir de las guías vistas en el video de estilos de redacción.

### Especificación original

> Sea un consorcio de propietarios donde se administran las expensas mensuales del edificio. La misma se compone de gastos ordinarios y extraordinarios que varían según el mes. Cualquier vecino puede consultar su boleta en el sistema y, cuando informa un pago, se le emite el comprobante. El cálculo del recargo por mora se realiza de la siguiente forma. A los propietarios que pagan fuera de término se les cobra el valor de la expensa sumado un interés del 5% si el atraso es de hasta 10 días, y se recarga un 12% si supera ese tiempo. Luego, los inquilinos o dueños reciben beneficios por buen cumplimiento. Los que pagaron en término durante más de 6 meses seguidos o adelantaron el pago anual completo, reciben una bonificación de 2000 pesos en el próximo período.

### Especificación reescrita

- El sistema administra las expensas mensuales del consorcio.
- Las expensas mensuales tienen gastos ordinarios y gastos extraordinarios.
- Las expensas mensuales tienen un monto total y una fecha de vencimiento.
- El propietario consulta la liquidación de expensas en el sistema.
- El propietario informa el pago de la expensa mensual al sistema.
- El sistema valida el pago de la expensa mensual.
- El sistema emite un comprobante de pago al propietario.
- El consorcio otorga una bonificación de 2000 pesos a los propietarios cumplidores.
- El sistema aplica la bonificación de 2000 pesos en la expensa mensual del período siguiente al propietario que pagó en término durante más de 6 meses consecutivos.
- El sistema aplica la bonificación de 2000 pesos en la expensa mensual del período siguiente al propietario que abonó el pago anual completo por adelantado.
