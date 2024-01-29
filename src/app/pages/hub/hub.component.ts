import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.css'
})
export class HubComponent {

}
