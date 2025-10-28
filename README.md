# Ingenieria-de-Software-Objetos-Perdidos.


\section*{Equipo y Roles}
\begin{itemize}
  \item \textbf{Product Owner (PO)}: Andrea Nicole Arellano Márquez
  \item \textbf{Scrum Master (SM)}: Ángel Benjamín Barrientos Carrasco
\end{itemize}

\section*{Visión del Sprint}
\subsection*{Visión del Sprint 1}

El objetivo principal del \textbf{Sprint 1} es implementar el flujo completo para el registro de objetos encontrados dentro del sistema. Este sprint busca desarrollar la funcionalidad que permita a los usuarios o administradores ingresar información sobre objetos extraviados que han sido hallados, asegurando que los datos se almacenen correctamente, con validaciones apropiadas y una experiencia de uso sencilla e intuitiva.

Durante este sprint se abordarán todas las etapas esenciales del proceso, desde la creación de la interfaz de registro hasta la persistencia de los datos en la base de datos. Se busca garantizar que cada elemento del flujo sea funcional, seguro y coherente con la arquitectura general del sistema.

\subsubsection*{Tareas principales}

\begin{enumerate}
    \item \textbf{Diseño y desarrollo del formulario de registro:} 
    Crear una interfaz gráfica que permita ingresar los datos relevantes del objeto (nombre, descripción, lugar y fecha en que fue encontrado, imagen, entre otros campos). Se prioriza un diseño responsivo y claro, compatible con distintos dispositivos.

    \item \textbf{Implementación de validaciones de entrada:}
    Asegurar que los campos obligatorios sean completados correctamente. Validar formatos de entrada (por ejemplo, tipo de archivo de imagen, longitud de texto y formato de fecha) para evitar errores y mejorar la calidad de los datos capturados.

    \item \textbf{Integración con la base de datos:}
    Diseñar la estructura de la tabla correspondiente para almacenar los objetos encontrados. Implementar la conexión entre el formulario y la base de datos, garantizando la persistencia, consistencia y seguridad de los datos registrados.

    \item \textbf{Pruebas iniciales del flujo:}
    Realizar pruebas funcionales que verifiquen el correcto funcionamiento del registro desde la interfaz hasta el almacenamiento. Se incluirán casos de prueba que validen el manejo de errores, entradas incorrectas y mensajes de validación.

    \item \textbf{Documentación técnica y manual preliminar de usuario:}
    Elaborar la documentación que describa el proceso de desarrollo, los requerimientos técnicos y la estructura de datos implementada. Además, generar una guía básica para el uso del módulo de registro de objetos encontrados.
\end{enumerate}

\subsubsection*{Resultado esperado}

Al concluir el \textbf{Sprint 1}, el sistema deberá contar con un módulo completamente funcional para el registro de objetos encontrados. Este módulo deberá incluir validaciones adecuadas, mensajes informativos al usuario y almacenamiento seguro de los datos. El resultado servirá como base para los próximos sprints, en los cuales se añadirán funcionalidades complementarias como la búsqueda, categorización y notificación de coincidencias con objetos perdidos.
