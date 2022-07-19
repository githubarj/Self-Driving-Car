class Controls {
  constructor() {
    this.foward=false;
    this.left=false;
    this.right=false;
    this.reverse=false;

    this.#addKeyboardListeners(); // # identifies a private function
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      //we use the arrow notation so that the this keyword refers to the object in the contructor and not the function
      //when a key is pressed
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.foward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
      
    };
    document.onkeyup = (event) => {
      //when key released
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.foward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }
      
    };
  }
}
