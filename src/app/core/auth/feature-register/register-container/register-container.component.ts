import { Component } from '@angular/core';
import {RegisterFormUiComponent} from "../register-form-ui/register-form-ui.component";

@Component({
  selector: 'app-register-container',
  standalone: true,
  imports: [
    RegisterFormUiComponent
  ],
  templateUrl: './register-container.component.html',
  styleUrl: './register-container.component.scss'
})
export class RegisterContainerComponent {

}
