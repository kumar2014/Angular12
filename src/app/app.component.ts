import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // #8 Create a new property so this input property is going to store whatever value 
  // the user will enter in the text box
  inputText: string = '';
  destroy: boolean = true;

  // #7
  onSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }

  destroyComponent() {
    this.destroy = false;
  }
}
