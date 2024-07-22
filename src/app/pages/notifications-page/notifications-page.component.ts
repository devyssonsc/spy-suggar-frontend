import { Component } from '@angular/core';
import { NotificationComponent } from '../../components/notification/notification.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [NavbarComponent, NotificationComponent],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.scss'
})
export class NotificationsPageComponent {

}
