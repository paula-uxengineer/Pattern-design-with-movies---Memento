# Pattern design with movies - Memento, "Johnny Mnemonic"

## Propósito:

>El patrón de diseño Memento, al igual que la trama de la película "Johnny Mnemonic", busca capturar y externalizar información crucial en un momento específico. En la película, Johnny almacena datos >sensibles en su cerebro mediante implantes de memoria, permitiéndole acceder y recuperar esa información en momentos cruciales.

## Problema:

Imaginemos una situación en la que un desarrollador necesita implementar una funcionalidad de "deshacer" en una aplicación de edición de texto. De manera similar, que en "Johnny Mnemonic", Johnny enfrenta el desafío de manejar la sobrecarga de información en su cerebro mientras transporta datos encapsulados en él.


## Solución:

El patrón Memento propone una solución al encapsular el estado de un objeto en un objeto separado llamado Memento. Así como en la película, Johnny utiliza implantes de memoria como sus "Mementos" para almacenar datos y liberar espacio cuando sea necesario, permitiendo así gestionar su carga de información.

## Estructura:

- Originator (Database-Johnny): Representa al objeto principal cuyo estado se desea capturar y restaurar.
- Memento (Implantes de memoria): Almacena el estado del Originator (Datos sensibles).
- Caretaker (Johnny como mensajero): Gestiona y almacena los Mementos (Implantes de memoria) para acceder y recuperar información.

## Aplicabilidad:

- Implementación de funciones de deshacer (undo) en aplicaciones.
- Conservación y restauración de información sensible o estados anteriores en sistemas de almacenamiento.

## Cómo implementarlo:

- Originator (JohnnyMnemonic):
        Utiliza implantes de memoria para almacenar datos.
        Libera información cuando sea necesario.

- Memento (MemorySnapshot):
        Almacena información sensible.

- Caretaker (TaskCommand):
        Gestiona y utiliza los implantes de memoria para acceder y recuperar datos.

## Pros y Contras:

Pros:

- Flexibilidad para gestionar información sensible de manera segura.
- Permite adaptarse a situaciones cambiantes liberando y recuperando datos según sea necesario.

Contras:

- Puede resultar costoso en términos de recursos si se manejan grandes cantidades de datos.
- Introduce complejidad en la gestión de la información almacenada.
