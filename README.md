# Ingenieria-de-Software-Objetos-Perdidos.
 Equipo y Roles
Product Owner (PO): Andrea Nicole Arellano M´arquez
Scrum Master (SM): Angel Benjam´ın Barrientos Carrasco 

Visión del Problema
Dentro de la UdeC, no se tiene un registro formalizado ni centralizado de los objetos perdidos. Cada facultad, edificio o dependencia maneja esta situación de manera independiente, ya sea en una oficina de los encargados o mandarlos con los guardias. Esta falta de estandarización dificulta la trazabilidad de los objetos y reduce significativamente las posibilidades de que los estudiantes y personal recuperen sus pertenencias.

Como consecuencia, los usuarios carecen de un mecanismo claro para registrar la pérdida de un objeto o consultar su estado, generando incertidumbre y desconfianza en el proceso institucional. Sin un registro completo, actualizable y compartido entre áreas, muchas coincidencias potenciales pasan desapercibidas y la devolución de objetos se vuelve tardada o, en ocasiones, imposible.

Visión de la solución
La solución propuesta consiste en una plataforma HTML que centraliza, organiza y valida todos los reportes de objetos perdidos y encontrados dentro de la UDEC. Su propósito es agilizar y transparentar el proceso de recuperación, reduciendo tiempos de espera y evitando errores humanos.

El sistema permite al usuario (Alumno, Colaborador, profesor o externo) registrar fácilmente un objeto encontrado o reportar la pérdida de uno, adjuntando información clave como descripción, ubicación, fecha y evidencia fotográfica. Toda esta información se almacena en una base de datos para facilitar la trazabilidad y el control.

Por otro lado, el encargado del área recibe los reportes a través de un panel administrativo donde puede revisarlos, filtrarlos y validarlos. Gracias a un módulo de coincidencias automatizado —basado en comparación de descripciones, categorías y análisis de similitudes— la plataforma identifica posibles matches entre objetos perdidos y encontrados. Esto optimiza el trabajo del encargado, quien solo debe confirmar las coincidencias sugeridas por el sistema.

Una vez encontrada y validada una coincidencia entre un objeto perdido y uno encontrado, la plataforma permite agendar la entrega del artículo al dueño legítimo. Esto garantiza una devolución ordenada, segura y documentada.


Visión del Sprint

Visión del Sprint 1
El objetivo principal del Sprint 1 es diseñar y construir la interfaz completa para el registro de objetos encontrados dentro del sistema. Este sprint se enfoca en desarrollar una experiencia visual clara, ordenada e intuitiva que permita a cualquier usuario identificar fácilmente los campos necesarios y comprender el proceso de registro sin dificultades.

Durante esta etapa se trabajará en la creación de una pantalla atractiva, coherente con la identidad visual del proyecto, donde la disposición de los elementos facilite la captura de información. Se cuidarán aspectos como la organización del formulario, la legibilidad, el uso de colores y jerarquías visuales, así como la incorporación de indicadores, mensajes y retroalimentación visual que guíen al usuario en cada paso.

El objetivo es que la interfaz transmita claridad, accesibilidad y profesionalismo, asegurando que toda persona que interactúe con ella pueda realizar el registro de manera fluida. Aunque el almacenamiento de datos forma parte del proceso, en este sprint la prioridad es establecer una base visual sólida y bien estructurada que siente las bases para la funcionalidad futura del sistema.

Visión del Sprint 2
El objetivo del Sprint 2 es implementar la funcionalidad completa para registrar nuevos reportes de objetos perdidos y habilitar el proceso inicial de comparación entre objetos perdidos y encontrados para identificar posibles coincidencias. Este sprint se centra en construir la lógica necesaria para que el sistema gestione datos confiables y sea capaz de sugerir matches automáticamente.

Durante esta etapa se desarrollará el flujo funcional para que los usuarios puedan registrar un objeto perdido, capturando información clave como nombre, descripción, categoría, ubicación, fecha y evidencia fotográfica. Se incluirán validaciones que aseguren que los datos ingresados sean correctos, completos y coherentes.

Además del registro, se implementará el módulo de comparación que analiza de forma automática los objetos perdidos contra los objetos encontrados previamente almacenados. Este proceso utilizará criterios como similitud de descripciones, coincidencia de categorías, coincidencia aproximada de fechas y coincidencias textuales, generando una lista de posibles matches. El sistema no confirmará la coincidencia por sí mismo, pero dejará las coincidencias listas para ser revisadas por el encargado en un sprint posterior.



