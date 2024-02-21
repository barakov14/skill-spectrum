import { Component } from '@angular/core';
import {LoginFormUiComponent} from "../login-form-ui/login-form-ui.component";

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [
    LoginFormUiComponent
  ],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {

}
