---
titulo: "Entrevista con IA III: Jefe de Sistemas"
numero: 17
fecha: 2026-11-15
descripcion: "Tercera entrevista del caso Mercury S.A., con el Jefe de Sistemas: integración por APIs con el ERP, ruteo y entregas, seguridad con JWT, roles y auditoría. Incluye conversación, minuta y RF/RNF."
tags: ["Elicitación", "IA", "Entrevista"]
portada: "../../assets/portadas/tp-17.svg"
portadaAlt: "Portada del TP 17: Entrevista con IA III"
modalidad: individual
documento: "/documentos/entrevista-ia-3-jefe-sistemas.pdf"
---

## El escenario

La empresa **Mercury S.A.**, dedicada a la logística y distribución en entornos urbanos, decidió desarrollar una aplicación móvil para que sus clientes sigan sus pedidos en tiempo real, gestionen reclamos y califiquen el servicio. El sistema también debe integrarse con las operaciones internas (asignación de rutas, control de entregas y retroalimentación de los repartidores).

El proyecto está en la fase de inicio y una consultora externa fue contratada para la elicitación. En el juego de roles, asumí el rol de **Analista Funcional** de esa consultora, con el objetivo de identificar requerimientos funcionales y no funcionales, detectar conflictos, vacíos o ambigüedades, adaptar las preguntas a cada interlocutor y documentar lo obtenido en un informe inicial. La entrevista debía tener entre 10 y 30 interacciones.

**Interlocutor:** Alberto Torres, Jefe de Sistemas y responsable de IT de Mercury S.A. (interpretado por la IA).

## Interacción con la IA

> La conversación se realizó con una inteligencia artificial que interpretó al stakeholder. Las intervenciones se transcriben tal como quedaron registradas en la plataforma.

**Alberto Torres (IA):** Hola, mi nombre es Alberto Torres. Soy el Jefe de Sistemas de Mercury S.A. y estoy aquí para conversar sobre el nuevo proyecto de la aplicación móvil que nos permitirá mejorar la experiencia de seguimiento, reclamos y calificación del servicio tanto para clientes como repartidores. Me interesa asegurar la correcta integración con nuestros sistemas internos y que se cumplan los estándares técnicos y operativos requeridos. Por favor, compartí tus primeras impresiones o preguntas sobre el proyecto para que podamos avanzar de manera eficiente.

**Nahuel Cerrano (analista):** Buenos dias, soy Nahuel Cerrano analista funcional como parte del equipo de la consultora externa. ¿Cuales son las nuevas integraciones de sus sistemas internos?

**Alberto Torres (IA):** Nahuel, gracias por tu pregunta. Actualmente, nuestros sistemas internos incluyen un ERP que gestiona la información de pedidos, inventario y facturación; una plataforma de ruteo que optimiza las rutas de entrega; y un sistema propio para el control de entregas. La nueva app debe integrarse con estos tres sistemas, permitiendo intercambio seguro de datos en tiempo real. Además, buscamos que la integración sea mediante APIs y no queremos depender de soluciones externas propietarias. ¿Te interesa profundizar en algún módulo específico o en alguna restricción técnica para la interoperabilidad?

**Nahuel Cerrano (analista):** ¿Como harian para que estos tres sistemas trabajen entre si junto a la API y por que no quieren depender de soluciones externas?

**Alberto Torres (IA):** Buena pregunta, Nahuel. Para lograr que los tres sistemas se comuniquen de manera eficiente junto con la API de la nueva app, planteamos una arquitectura basada en servicios RESTful y mensajería segura. Cada sistema expone endpoints específicos y sólo comparte la información estrictamente necesaria para funcionar de forma integrada. Así garantizamos trazabilidad y control. Respecto a evitar soluciones externas, priorizamos la soberanía sobre los datos, la reducción de costos de licencias y aseguramos que el conocimiento técnico quede en la empresa. Queremos evitar depender de plataformas que pueden cambiar condiciones o discontinuar servicios sin previo aviso. ¿Necesitás detalles sobre los flujos de información o las tecnologías propuestas para la integración?

**Nahuel Cerrano (analista):** Claro, dime cuales son las propuestas para la integracion de estos sitemas.

**Alberto Torres (IA):** Perfecto, Nahuel. La integración propuesta se basa en el diseño de APIs RESTful internas, desarrolladas in-house, que actúan como puente entre la app y los sistemas ya existentes. Esto nos permite controlar el acceso y la exposición de datos de cada módulo, priorizando la seguridad y la eficiencia. Buscamos que cada sistema (ERP, ruteo, entregas) se comunique a través de endpoints específicos, y para la mensajería entre servicios utilizamos protocolos seguros como HTTPS y autenticación basada en tokens. Así garantizamos escalabilidad y facilidad de mantenimiento. Además, agiliza futuras actualizaciones sin depender de terceros. ¿Necesitás profundizar en algún flujo de datos concreto o te interesa revisar los criterios de seguridad?

**Nahuel Cerrano (analista):** Me gustaria preguntar como se manejarian en el tema de seguridad con respecto a los endpoints de la futura API

**Alberto Torres (IA):** Nahuel, la seguridad de los endpoints es prioritaria para nosotros. Cada API se implementará utilizando HTTPS para cifrar el tráfico, y el acceso estará protegido mediante autenticación con tokens JWT. Eso nos permite controlar quién accede a qué datos y monitorear actividades sospechosas. Además, aplicaremos controles de permisos basados en roles, evitando que usuarios o repartidores vean información sensible. Todos los logs de acceso se centralizan para auditoría, y se prevé una revisión periódica de vulnerabilidades. Si querés, podemos analizar en detalle cómo se gestionarán los tokens o cómo se hará la segregación de funciones dentro de la app. ¿Te interesa profundizar en esos aspectos?

**Nahuel Cerrano (analista):** Cuentame sobnre como gestionarán los tokens y cuales serian los roles que habra dentro de la app y que permisos tendrian cada uno.

**Alberto Torres (IA):** Perfecto, Nahuel. En cuanto a la gestión de tokens, la idea es emitir un token JWT para cada sesión autenticada. Este token contendrá información relevante como el rol del usuario y tendrá un tiempo de expiración breve para reducir riesgos. Los tokens se renuevan automáticamente tras el login y se invalidan al cerrar sesión.

Sobre los roles, prevemos al menos tres perfiles principales en la app: Cliente, Repartidor y Supervisor. El Cliente podrá consultar el estado de sus pedidos, realizar reclamos y calificar el servicio, pero no tendrá acceso a información interna ni datos de otros clientes. El Repartidor accederá a sus rutas asignadas, confirmará entregas y recibirá feedback, sin ver datos sensibles de clientes más allá de lo necesario para la entrega. El Supervisor, con acceso restringido, podrá visualizar reportes operativos y analizar métricas agregadas, pero sus permisos estarán limitados para no sobreexponer información sensible.

¿Querés que detalle los flujos de alta y baja de usuarios o focalizamos en cómo se auditarán los accesos según cada rol?

**Nahuel Cerrano (analista):** Mencionaste tres roles el cual cada uno tiene mas accesos que el anterior. No tendrian un rol como "Administrador" donde tenga acceso maximo en caso de que necesiten arreglar, revisar, etc. O como accederian a datos donde estros tres roles no lo permiten para estos casos.

**Alberto Torres (IA):** Buen punto, Nahuel. Efectivamente, sí prevemos un rol de Administrador, pero su acceso será restringido y auditado. Es indispensable para tareas de soporte, mantenimiento, análisis de incidentes o intervenciones técnicas puntuales. El acceso máximo sólo se justifica en situaciones excepcionales y estará sujeto a doble verificación y registro detallado. Además, el Administrador nunca accede directamente a información de clientes o repartidores salvo que el proceso lo requiera y quede documentado. Esto ayuda a cumplir con normas de privacidad y a evitar abusos de privilegio. Si querés, te puedo explicar cómo será el proceso de acceso escalonado ante incidentes o qué controles aplicaremos para supervisar la actividad de este rol. ¿Te interesa dar ese paso?

**Nahuel Cerrano (analista):** Por favor si, explicame como harian en estos casos.

**Alberto Torres (IA):** Claro, Nahuel. En casos donde se requiere acceso del Administrador a datos sensibles fuera del alcance de los otros roles, implementamos un protocolo de acceso escalonado. Esto significa que:

1. El Administrador solicita acceso justificado mediante un sistema de tickets o autorización superior.
2. Se activa un doble factor de autenticación y, en algunos casos, una aprobación por pares.
3. Cada acción queda registrada en logs detallados, permitiendo auditoría posterior.
4. Al finalizar la intervención, se revoca el acceso elevado, garantizando que no se mantengan privilegios innecesarios.

Este enfoque ayuda a minimizar riesgos, prevenir abusos y cumplir normas de privacidad. ¿Te interesa saber cómo se gestionarán esas auditorías o prefieres avanzar hacia otros requerimientos funcionales de la aplicación?

**Nahuel Cerrano (analista):** Me gustaria primero que me cuentes como gestionarian las aditorias y luego avanzamos con otros requerimientos funcionales.

**Alberto Torres (IA):** Bien, Nahuel. Para la gestión de auditorías, centralizaremos todos los logs de acceso y acciones relevantes en una plataforma de monitoreo interna. Los registros incluirán fecha, usuario, rol, acción realizada y justificación. La supervisión será periódica, con reportes automáticos que alerten sobre accesos excepcionales o intentos de violación de permisos. Además, realizaremos revisiones manuales mensuales y durante cualquier incidente de seguridad. El objetivo es que cualquier actividad del rol Administrador quede trazada, con posibilidad de reconstruir lo sucedido y asignar responsabilidades. ¿Listo para avanzar sobre los requerimientos funcionales? Si tenés alguna preferencia, podés decirme por cuál te gustaría comenzar: seguimiento de pedidos, gestión de reclamos o calificación del servicio.

**Nahuel Cerrano (analista):** Contame como funcionará la gestion de reclamos y como lo manejarán.

**Alberto Torres (IA):** Perfecto, Nahuel. La gestión de reclamos en la app se diseñará de modo que el cliente pueda iniciar un reclamo fácilmente desde el detalle de su pedido, seleccionando el motivo y agregando comentarios o fotos si hace falta. Esa información se enviará mediante la API al sistema de gestión de reclamos interno, donde se le asignará automáticamente un responsable en función del tipo de reclamo o la zona geográfica. El cliente recibirá actualizaciones sobre el estado de su caso y podrá ver el historial directamente en la app.

Por nuestra parte, nos aseguraremos de que todo el proceso sea trazable, los plazos de respuesta estén definidos y los datos de los reclamos queden protegidos según normativas vigentes. Además, prevemos métricas de tiempos de resolución y satisfacción para los reclamos, que los supervisores podrán consultar en sus reportes. ¿Querés que detalle algún flujo en particular o te interesa saber cómo priorizamos los distintos tipos de reclamos en el sistema?

**Nahuel Cerrano (analista):** Como priorizan los reclamos, como filtran de reclamos mal intencionados de uno real y un reclamo que fue exitosamente tomado y gestionado, que consecuencias o medidas se toman a partir de este. ¿El sistema de gestion de reclamos interactua o necesita datos de otro sistema?

**Alberto Torres (IA):** Nahuel, respecto a la priorización, el sistema categoriza los reclamos según su gravedad (por ejemplo, falta de entrega, daño del producto o simple consulta) usando reglas automáticas. Los casos críticos (impacto directo en cliente o reputación) tienen máxima prioridad y se asignan a resolución inmediata. Para filtrar reclamos malintencionados, analizamos patrones de comportamiento y cruzamos datos con el historial del cliente en el ERP; así detectamos posibles abusos, y el sistema permite marcar casos dudosos para revisión manual. Cuando un reclamo es gestionado con éxito, se registra una acción correctiva o compensatoria y se actualiza el estado en todos los sistemas vinculados (ERP y entregas), permitiendo seguimiento y control. Si el reclamo deriva en medidas, se notifican automáticamente las áreas responsables y se documenta todo en la trazabilidad. ¿Te gustaría profundizar en algún tipo de integración o prefieres avanzar con casos de uso específicos de la gestión de reclamos en la app?

**Nahuel Cerrano (analista):** Me gustaria saber mas sobre el sistema de control de entregas, que información se tiene en cuenta este sistema

**Alberto Torres (IA):** Nahuel, el sistema de control de entregas consolida toda la información relevante para la gestión y trazabilidad de los pedidos. Incluye datos como el identificador del pedido, hora prevista y real de entrega, ubicación del repartidor en tiempo real, comprobante digital (foto o firma del cliente), incidencias reportadas durante la entrega y estado actual (por ejemplo: en ruta, entregado, intento fallido). También se registran observaciones del repartidor y eventos clave como cambios de ruta o reasignaciones. Esta información se sincroniza tanto con el ERP como con el sistema de ruteo, y es fundamental para auditar el cumplimiento de los SLA y generar reportes operativos. ¿Te gustaría ver cómo este sistema se integra con la app móvil o prefieres profundizar en el registro de incidencias y excepciones durante la entrega?

**Nahuel Cerrano (analista):** El estado de la entrega puede ser intento fallido dijiste. ¿Hay un limite de intentos y como lo maneja el sistema en caso de que si lo haya?

**Alberto Torres (IA):** Correcto, Nahuel. El sistema contempla un límite de intentos de entrega, generalmente definido por políticas internas (por ejemplo, tres intentos). Cada vez que un repartidor indica "intento fallido", se registra el motivo (ausencia, dirección incorrecta, rechazo, etc.) y se actualiza el historial en el ERP. Si se alcanza el máximo de intentos sin éxito, el pedido pasa a estado de "devolución" o "gestión manual", y el cliente recibe una notificación automática. Además, el área de atención puede contactarlo para resolver el caso o programar una entrega especial. Todo el proceso queda trazado, permitiendo auditoría y análisis de incidencias. ¿Te interesa explorar cómo se notifica al cliente o cómo se reasignan los pedidos tras varios intentos fallidos?

**Nahuel Cerrano (analista):** Como se reasignan los pedidosa un cliente y como esto se ve reflejado en el sistema

**Alberto Torres (IA):** Buena pregunta, Nahuel. Cuando un pedido necesita ser reasignado, el sistema de control de entregas interactúa con el módulo de ruteo y el ERP para identificar repartidores disponibles y óptimos según la zona y la carga. La reasignación se gestiona automáticamente o puede requerir intervención manual si hay incidencias especiales. Una vez reasignado, tanto el nuevo repartidor como el cliente reciben notificaciones a través de la app. El estado del pedido y los responsables quedan actualizados en todos los sistemas: la app muestra al cliente el nombre y ubicación del nuevo repartidor, y el historial refleja cada intento y reasignación, permitiendo trazabilidad completa. ¿Querés profundizar en la lógica de selección de repartidores o en cómo se comunican esos cambios entre sistemas?

**Nahuel Cerrano (analista):** Cual es la logica que el sistema maneja para seleccionar un repartidor y como intercambian información entre los sistemas que se comunican

**Alberto Torres (IA):** Nahuel, la lógica para seleccionar repartidor se basa en distintos criterios: disponibilidad en tiempo real, experiencia en la zona, carga de trabajo actual y proximidad al punto de entrega. El sistema de ruteo consulta los datos del ERP sobre horarios, rutas asignadas y el estado de cada repartidor, ajustando automáticamente según prioridades del negocio (por ejemplo, entregas exprés o restricciones geográficas). Cuando el módulo de entregas necesita reasignar, se genera una petición vía API al sistema de ruteo, que devuelve el mejor candidato y actualiza ambos sistemas con los nuevos datos de asignación. Todo el intercambio se realiza por APIs RESTful, usando mensajes estructurados y seguros, y los cambios se sincronizan en tiempo real para trazabilidad y monitoreo. ¿Te gustaría repasar algún flujo concreto entre estos sistemas o avanzar hacia otros requerimientos del proyecto?

**Nahuel Cerrano (analista):** ¿Sobre su plataforma de ruteo, de que manera optimiza las entregas?

**Alberto Torres (IA):** Nahuel, nuestra plataforma de ruteo optimiza las entregas combinando algoritmos de asignación y geolocalización. Considera variables como distancia, tránsito en tiempo real, prioridades del pedido (urgente, estándar), capacidad de cada repartidor y posibles restricciones de horarios o zonas. El sistema recalcula rutas ante eventos inesperados —por ejemplo, cambios de última hora o intentos fallidos— para minimizar tiempos muertos y reducir costos logísticos. Además, integra datos del ERP para evitar solapamientos y garantiza cobertura eficiente en áreas de alta demanda. Todo esto se traduce en rutas dinámicas y adaptables, sincronizando la información entre sistemas mediante APIs. ¿Te interesa ahondar en cómo visualiza el repartidor sus rutas o en la retroalimentación del desempeño desde la app?

**Nahuel Cerrano (analista):** Que parametros usan para determinar que un pedido es urgente o estandar?

**Alberto Torres (IA):** Nahuel, la clasificación de un pedido como urgente o estándar se define principalmente en el ERP según parámetros de negocio: tipo de producto, acuerdos de nivel de servicio (SLA) con el cliente, hora de creación del pedido y, si corresponde, selección explícita del cliente (por ejemplo, "entrega express"). El sistema de ruteo consulta este parámetro para priorizar rutas y asignar recursos. También se consideran restricciones adicionales, como entregas en franjas horarias pactadas o pedidos vinculados a campañas específicas. Todo esto se comunica entre sistemas mediante la API, asegurando que la prioridad del pedido se respete en cada etapa. ¿Querés profundizar en cómo afecta esto la gestión diaria de los repartidores o cómo se gestionan los SLA dentro del sistema?

## Minuta de la entrevista

La entrevista con Alberto Torres, Jefe de sistemas de la empresa Mercury SA, tuvo como objetivo relevar los requerimientos técnicos y operativos de la nueva app de seguimiento, reclamos y calificación del servicio. Se espera que la app se integre en tiempo real con el ERP, la plataforma de ruteo y el sistema de control de entregas mediante APIs RESTful propias para no depender de terceros, tal como lo resaltó Torres.

## Requerimientos funcionales

| ID | Nombre | Descripción |
| --- | --- | --- |
| RF-01 | Consulta de estado del pedido | El sistema deberá permitir que el Cliente consulte el estado actual de cada uno de sus pedidos. Los estados posibles son: en ruta, entregado, intento fallido, devolución o gestión manual. |
| RF-02 | Alta de reclamo | El sistema deberá permitir que el Cliente inicie un reclamo desde el detalle de un pedido propio. Deberá elegir obligatoriamente un motivo de una lista predefinida y podrá agregar de forma opcional comentarios y fotografías. |
| RF-03 | Priorización de reclamos | El sistema deberá categorizar automáticamente cada reclamo según su gravedad: falta de entrega, daño del producto o consulta. Se deberá asignar la prioridad máxima a los reclamos críticos. |
| RF-04 | Límite de intentos de entrega | El sistema deberá permitir configurar una cantidad máxima de intentos de entrega, por defecto son 3. Cuando un pedido llegue al máximo de intentos, el sistema deberá cambiar su estado a devolución o entrega manual y notificar automáticamente al Cliente. |
| RF-05 | Reasignación de repartidor | Cuando un pedido necesite reasignarse, el sistema deberá pedir a la plataforma de ruteo, mediante API, el repartidor más adecuado según la disponibilidad, experiencia en la zona, carga de trabajo y proximidad. Además se le deberá notificar al nuevo repartidor y al Cliente. |

## Requerimientos no funcionales

| ID | Nombre | Descripción |
| --- | --- | --- |
| RNF-01 | Integración por APIs propietarias | La integración entre la app móvil, el ERP, la plataforma de ruteo y el sistema de control de entregas deberá hacerse exclusivamente mediante APIs RESTful internas, sin usar soluciones externas propietarias. |
| RNF-02 | Cifrado en tránsito | Toda comunicación entre la app y las APIs deberá hacerse por HTTPS. No deberá aceptarse ninguna conexión sin cifrar. |
| RNF-03 | Autenticación con JWT | Todos los endpoints, salvo el de inicio de sesión, deberán exigir un token JWT válido, que deberá expirar como máximo 15 minutos después de emitido. Las solicitudes sin token o con un token inválido o vencido deberán rechazarse. |
| RNF-04 | Control de acceso por roles | El sistema deberá restringir el acceso a datos según el rol. El Cliente solo podrá ver sus propios pedidos y reclamos. El Repartidor solo podrá ver sus pedidos asignados. El Supervisor solo podrá ver información agregada. El Administrador solo podrá acceder a datos personales mediante un acceso elevado justificado y con doble factor de autenticación. |
| RNF-05 | Sincronización en tiempo real | Un cambio de estado de un pedido o de un reclamo deberá reflejarse en todos los sistemas integrados en no más de 5 segundos. |

Viene de la [Entrevista con IA II](/trabajos/entrevista-ia-2-gerente-finanzas/).
