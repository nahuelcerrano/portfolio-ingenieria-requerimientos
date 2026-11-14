---
titulo: "Metodologías de desarrollo e Ingeniería de Requerimientos"
numero: 3
fecha: 2026-09-03
descripcion: "Cómo tratan los requerimientos Waterfall, RUP, el Modelo en V, Scrum y CMMI: cuándo se definen, cómo se gestionan los cambios, ventajas, desventajas y ejemplos."
tags: ["Metodologías", "Scrum", "CMMI", "Modelo en V"]
portada: "../../assets/portadas/tp-03.svg"
portadaAlt: "Portada del TP 3: Metodologías de desarrollo"
modalidad: grupal
documento: "/documentos/metodologias-de-desarrollo-y-requerimientos.docx"
---

## Consigna

Investigar distintas metodologías de desarrollo de software y analizar, para cada una, su relación con la Ingeniería de Requerimientos: cuándo y cómo se definen los requerimientos, cómo se gestionan los cambios, qué prácticas se aplican, ventajas, desventajas y ejemplos de uso.

## Metodologías Tradicionales

### 1. Descripción General

- **Waterfall:** Originado formalmente en 1970 por Winston Royce. Es estrictamente lineal. El proyecto fluye en una sola dirección pasando por fases inamovibles: Análisis de Requerimientos, Diseño, Implementación, Pruebas, Despliegue y Mantenimiento. No se avanza a la siguiente etapa sin terminar, revisar y firmar la documentación de la anterior.

- **RUP (Rational Unified Process):** Creado en 1998 por Rational Software. Es un proceso iterativo e incremental, pero altamente estructurado. Está dirigido por casos de uso y centrado en la arquitectura. Se divide en cuatro fases principales: Inicio, Elaboración, Construcción y Transición.

### 2. Relación con la Ingeniería de Requerimientos

**¿Cuándo y cómo se definen?**

La captura de requerimientos ocurre estrictamente al inicio del ciclo de vida del proyecto (enfoque conocido como *Big Design Up Front* o BDUF). Se ejecutan entrevistas, encuestas y análisis de negocio para congelar el alcance de forma exhaustiva antes de diseñar o programar.

**¿Cómo se gestionan los cambios?**

El control de cambios es un proceso formal y restrictivo diseñado para evitar el *scope creep* (corrupción del alcance). Si surge una modificación en fases avanzadas, se debe:

1.  Emitir una Solicitud de Cambio formal (Change Request).

2.  Analizar el impacto en los costos, cronogramas y arquitectura del sistema.

3.  Someter a aprobación o rechazo mediante un Comité de Control de Cambios (CCB).

**Herramientas y prácticas aplicadas:**

- **Documento SRS (Software Requirements Specification):** Redactado frecuentemente bajo el estándar **IEEE 830**, donde se listan requerimientos funcionales, no funcionales y restricciones del sistema con lenguaje natural detallado.

- **Modelado UML:** Especialmente los Diagramas de Casos de Uso, que capturan las interacciones requeridas desde la perspectiva del usuario final.

- **Matrices de Trazabilidad:** Un artefacto (como una hoja de cálculo) que vincula cada requerimiento documentado con su correspondiente módulo de código y caso de prueba, garantizando que todo lo solicitado se construya y se valide.

### 3. Comparativa del tratamiento de requerimientos

|                 |                                                         |                                                                    |                                          |
|-----------------|---------------------------------------------------------|--------------------------------------------------------------------|------------------------------------------|
| **Metodología** | **Captura de Requerimientos**                           | **Flexibilidad al Cambio**                                         | **Artefacto Principal**                  |
| **Waterfall**   | Única vez al inicio. Definición totalitaria y estática. | Nula/Muy baja. El cambio rompe la secuencialidad.                  | Documento SRS exhaustivo (ej. IEEE 830). |
| **RUP**         | Fuerte énfasis inicial (fases de Inicio y Elaboración). | Media/Baja. Permite ajustes, pero controlados por la arquitectura. | Modelo robusto de Casos de Uso (UML).    |

### 

### 4. Ventajas y Desventajas de esta gestión

**Ventajas:**

- **Claridad presupuestaria:** Al congelar los requerimientos desde el día uno, es mucho más sencillo calcular un presupuesto y una fecha de entrega precisos (ideal para licitaciones gubernamentales o presupuestos cerrados).

- **Independencia de las personas:** El conocimiento del dominio reside en los documentos formales, por lo que la rotación de desarrolladores no paraliza el proyecto.

- **Auditoría y control:** La alta trazabilidad asegura que el software cumpla con normativas legales (compliance) o contratos estrictos sin dejar áreas grises.

**Desventajas:**

- **Validación tardía (Efecto Túnel):** El cliente no ve un software funcional hasta las últimas fases. Si los requerimientos se interpretaron mal inicialmente, el costo de rediseño es catastrófico.

- **Falsa certidumbre:** Asume que los usuarios saben exactamente lo que necesitan antes de ver el producto.

- **Parálisis por análisis:** Se desperdicia una gran cantidad de tiempo intentando predecir y documentar escenarios que, en la realidad del mercado, terminan volviéndose obsoletos antes del lanzamiento.

### 5. Ejemplo de uso

Un clásico ejemplo sería el desarrollo de un ERP ya que este gestiona la columna vertebral de una empresa: contabilidad, facturación, nóminas de empleados, inventario y cadena de suministro. Un fallo en este tipo de software puede paralizar por completo la operación de un negocio, lo que hace que el enfoque predictivo y estructurado sea ideal.

## Modelo en V

#### **Metodología: Modelo en V (Validación y Verificación)**

### 1. Descripción general: origen, características principales y estructura

- **Origen:** El Modelo en V nace a finales de la década de 1970 (atribuido a Barry Boehm) y se consolida en los años 80 como una evolución del modelo en cascada tradicional. Fue adoptado fuertemente como estándar para proyectos de TI en el ámbito gubernamental y militar (especialmente en Alemania con el "V-Modell").

- **Características y estructura:** Físicamente se representa con la forma de la letra "V". Su premisa fundamental propone relacionar diferentes etapas de la especificación (rama descendente) con distintas etapas de la validación (rama ascendente).

- En este esquema, la codificación es el vértice de la V. Esto significa que cada fase de desarrollo tiene una fase correspondiente de prueba que se planifica en paralelo.

### 2. Relación con la Ingeniería de Requerimientos

- **¿Cuándo y cómo se definen?** Los requerimientos se definen íntegramente al inicio del proyecto (fase de *Requirement Analysis*). Son la piedra angular del modelo, ya que de ellos se desprenden no solo los diseños, sino también los planes de prueba. Finalmente, los requerimientos se validan mediante pruebas de aceptación (UAT) en la etapa final de la rama derecha.

- **¿Cómo se gestionan los cambios?** Este modelo asume un "alcance fijo", por lo que los requerimientos no son flexibles. Una vez que se aprueba la especificación inicial y se avanza hacia el diseño, gestionar un cambio es un proceso muy burocrático, rígido y altamente costoso.

- **¿Qué herramientas o prácticas se aplican?** Es un modelo que requiere documentación exhaustiva. En la industria, se suele utilizar la "Matriz de Trazabilidad de Requerimientos" (RTM) como herramienta práctica para asegurar que cada requerimiento documentado esté vinculado matemáticamente a un caso de prueba específico.

### 3. Comparativa entre metodologías en cuanto al tratamiento de requerimientos

- **Frente a metodologías ágiles (Scrum):** A diferencia de las metodologías ágiles, que priorizan el software funcionando y se adaptan a los cambios de requerimientos en cada iteración, el Modelo en V requiere documentación exhaustiva desde el día uno y utiliza los requerimientos como broche final para asegurar la correctitud del desarrollo.

- **Frente al modelo Cascada:** Aunque ambos son secuenciales, el Modelo en V mejora el tratamiento de los requerimientos al obligar al equipo a pensar en cómo van a *probar* y validar cada requerimiento desde el mismo momento en que lo están definiendo.

### 4. Ventajas y desventajas respecto a la gestión de requerimientos

- **Ventajas:** Alta disciplina. Al definir claramente las pruebas de aceptación al mismo tiempo que los requerimientos, se evitan ambigüedades. Es un modelo excelente para garantizar que lo que el cliente pidió sea exactamente lo que se entregue.

- **Desventajas:** Su extrema rigidez. Si durante la fase inicial hubo *omisiones* o *hechos incorrectos* (que estadísticamente representan el 31% y 49% de los errores de requerimientos, respectivamente), el equipo podría diseñar y codificar basándose en premisas falsas. Detectar un defecto originado en los requerimientos recién en la fase de pruebas dispara los costos exponencialmente.

### 5. Ejemplos de uso o aplicaciones recomendadas

Dado que requiere un alcance fijo y un nivel de validación milimétrico, el Modelo en V no se recomienda para startups o software comercial general. Es ideal y altamente recomendado para:

- **Sistemas de Misión Crítica:** Industria aeroespacial (software de vuelo), aeronáutica y defensa.

- **Sector Salud:** Desarrollo de software para dispositivos médicos y equipamiento hospitalario.

- **Sistemas Integrados (Embedded):** Industria automotriz (ej. desarrollo del software para frenos ABS o control de airbags), donde los requerimientos son muy estables y una falla técnica puede costar vidas.

## Metodologías Ágiles

### Scrum

### 1. Descripción general: origen, características principales y estructura

Scrum es un marco de trabajo ágil basado en ciclos cortos llamados **Sprints**. El trabajo se organiza en un Product Backlog y se prioriza según el valor que aporta al producto.

### 2. Relación con la Ingeniería de Requerimientos

Los requerimientos pueden cambiar durante el desarrollo. Se representan principalmente mediante **historias de usuario** y se organizan en el Product Backlog.

Los cambios pueden incorporarse priorizando nuevamente el backlog para futuros Sprints.

### 4. Ventajas y desventajas respecto a la gestión de requerimientos

#### **Ventajas**

- Alta adaptación a los cambios.

- Comunicación frecuente con el cliente.

- Permite entregar funcionalidades rápidamente.

- Los requerimientos se pueden mejorar continuamente.

#### **Desventajas**

- Puede resultar difícil si los requerimientos cambian constantemente sin control.

- Requiere una buena comunicación del equipo.

- La documentación puede ser menor que en metodologías tradicionales.

### 5. Ejemplos de uso o aplicaciones recomendadas

Es muy utilizado en aplicaciones web, aplicaciones móviles y proyectos donde las necesidades de los usuarios pueden cambiar durante el desarrollo.


## Modelo de Madurez

### 1. Descripción general

**Origen:** Desarrollado inicialmente a fines de la década de 1980 por el Software Engineering Institute (SEI) de la Universidad Carnegie Mellon, originalmente para evaluar la capacidad de los contratistas de software del Departamento de Defensa de EE. UU

**Características principales:** No es un ciclo de vida de desarrollo, sino un marco de referencia global. Mide y mejora la madurez de los procesos de una organización estructurándolos en cinco niveles: Inicial, Gestionado, Definido, Gestionado Cuantitativamente y En Optimización

**Estructura:** Se basa en "Áreas de Proceso". Para el tratamiento del software, destacan específicamente el Desarrollo de Requerimientos (RD) y la Gestión de Requerimientos (REQM)

### 2. Relación con la Ingeniería de Requerimientos

**¿Cuándo y cómo se definen?** A través del área de Desarrollo de Requerimientos (RD), las necesidades de los interesados se recopilan, analizan y transforman sistemáticamente en requerimientos del cliente, y posteriormente en requerimientos técnicos del producto. Se definen bajo criterios estrictos de calidad para asegurar que sean medibles y verificables

**¿Cómo se gestionan los cambios?** Se controlan mediante el área de Gestión de Requerimientos. El objetivo central es mantener una consistencia absoluta entre los requerimientos, los planes del proyecto y el producto de trabajo. Todo cambio exige evaluar el impacto, ajustar estimaciones y obtener la aprobación formal de los involucrados antes de integrarse

**Herramientas y prácticas aplicadas:** Se utilizan matrices de trazabilidad bidireccional (desde la necesidad del negocio hasta el código/prueba), establecimiento de líneas base (baselines), auditorías de configuración y plataformas corporativas de gestión (como IBM DOORS o sistemas ALM robustos).

### 3. Comparativa entre metodologías en cuanto al tratamiento de requerimientos

**Frente a enfoques predictivos (Waterfall / Modelo en V):** Waterfall y el Modelo en V imponen un flujo secuencial donde los requerimientos se congelan al inicio. CMMI no impone un ciclo de vida, sino que exige que cualquiera sea el modelo elegido (incluso el Modelo en V), los procesos de requerimientos cumplan con prácticas estandarizadas, métricas y validaciones institucionales para ser considerados "maduros"

**Frente a metodologías ágiles (Scrum):** Mientras que Scrum maneja los requerimientos de forma flexible mediante historias de usuario en un Product Backlog que cambia durante el desarrollo, CMMI exige un nivel de formalidad, trazabilidad matemática y documentación que trasciende al equipo temporal y queda como activo de toda la organización

### 4. Ventajas y desventajas respecto a la gestión de requerimientos

**Ventajas:** Garantiza una alineación total entre lo solicitado y lo entregado, minimizando la ambigüedad. Al estandarizar el proceso, la estimación de costos y tiempos se vuelve altamente predecible y basada en datos históricos

**Desventajas:** Requiere una inversión económica y de tiempo masiva para su implementación. Exige un cambio cultural profundo y puede caer en una burocracia excesiva si la organización prioriza el cumplimiento de la norma por sobre la entrega de valor.

### 5. Ejemplos de uso o aplicaciones recomendadas

Su uso es un estándar en grandes corporaciones, factorías de software multinacionales y proyectos de misión crítica. Es altamente recomendado y a menudo obligatorio en licitaciones gubernamentales, industria aeroespacial y de defensa, donde certificar la madurez y calidad del proceso a nivel organizacional es un requisito legal para poder operar.
