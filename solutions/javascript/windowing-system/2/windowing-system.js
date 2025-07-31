// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}


export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}


export class ProgramWindow {  
  screenSize = new Size(800, 600);
  size = new Size();
  position = new Position();

  resize (newSize) {
    const minWidht = 1;
    const minHeight = 1;
    const maxWidht = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
    
    const newWidth = Math.max(minWidht, Math.min(newSize.width, maxWidht));
    const newWHeight = Math.max(minHeight, Math.min(newSize.height, maxHeight));
 
    this.size.resize(newWidth, newWHeight);
  }

   move(newPosition) {
     const minX = 0;
     const minY = 0;
     const maxX = this.screenSize.width - this.size.width;
     const maxY = this.screenSize.height - this.size.height;

     const newX = Math.max(minX, Math.min(newPosition.x, maxX));
     const newY = Math.max(minY, Math.min(newPosition.y, maxY));

     this.position.move(newX, newY);
   }
}

export function changeWindow(programWindow) {
    programWindow.move(new Position());

    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    
    return programWindow;
}
