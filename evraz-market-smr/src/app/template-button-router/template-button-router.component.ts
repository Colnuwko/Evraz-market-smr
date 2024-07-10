import {Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-template-button-router',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './template-button-router.component.html',
  styleUrl: './template-button-router.component.css'
})
export class TemplateButtonRouterComponent {
  @Input() imageSrc!: string;
  @Input() buttonText!: string;
  @Input() routePath!: string;
  @Input() sizeimg!: string;
}
