// En este contexto, JohnnyMnemonic es el originator responsable de crear mementos 
class JohnnyMnemonic {
    private data: string;
    private currentPosition: { x: number; y: number };
    private memorySpaceOccupied: number;
  
    constructor() {
      this.data = "";
      this.currentPosition = { x: 0, y: 0 };
      this.memorySpaceOccupied = 0;
    }
  
    setData(data: string): void {
      this.data = data;
    }
  
    setCursorPosition(x: number, y: number): void {
      this.currentPosition = { x, y };
    }
  
    setMemoryOccupied(space: number): void {
      this.memorySpaceOccupied = space;
    }
  
    // guarda la información de los datos en el memento ("MemorySnapshot")
    createMemorySnapshot(): MemorySnapshot {
      return new MemorySnapshot(this, this.data, this.currentPosition, this.memorySpaceOccupied);
    }
  }
  
  // almacena el estado pasado del originator ("johnny")
  class MemorySnapshot {
    private johnny: JohnnyMnemonic;
    private data: string;
    private currentPosition: { x: number; y: number };
    private memorySpaceOccupied: number;
  
    constructor(johnny: JohnnyMnemonic, data: string, currentPosition: { x: number; y: number }, memorySpaceOccupied: number) {
      this.johnny = johnny;
      this.data = data;
      this.currentPosition = currentPosition;
      this.memorySpaceOccupied = memorySpaceOccupied;
    }
  
    // restaura el estado anterior de Johnny a partir de un snapshot.
    restoreMemory(): void {
      this.johnny.setData(this.data);
      this.johnny.setCursorPosition(this.currentPosition.x, this.currentPosition.y);
      this.johnny.setMemoryOccupied(this.memorySpaceOccupied);
    }
  }
  
  // Command sería "Caretaker" realiza copias de seguridad (makeMemoryBackup()) antes de realizar cambios en el JohnnyMnemonic
  class TaskCommand {
    private backup: MemorySnapshot;
  
    constructor(private johnny: JohnnyMnemonic) {
      this.backup = null;
    }
  
    // Realiza una copia de seguridad del estado actual 
    makeMemoryBackup(): void {
      this.backup = this.johnny.createMemorySnapshot();
    }
  
    // deshace los cambios y restaura el estado anterior 
    undoMemoryChanges(): void {
      if (this.backup !== null) {
        this.backup.restoreMemory();
      }
    }
  }
  
  // Ejemplo de uso: pasaríamos a
  const johnny = new JohnnyMnemonic();
  const taskCommand = new TaskCommand(johnny);
  
  //realizariamos los cambios de memoria a través de los métodos de memento ("MemorySnapshot")
  johnny.setData("Recuerdos de la infancia");
  johnny.setCursorPosition(10, 20);
  johnny.setMemoryOccupied(512);
  
  // Realiza una copia de seguridad antes de realizar cambios
  taskCommand.makeMemoryBackup();
  
  // Deshace los cambios utilizando el backup
  taskCommand.undoMemoryChanges();
  
  console.log(johnny); // Johnny ha recuperado su estado anterior
  