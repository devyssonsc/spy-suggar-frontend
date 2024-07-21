import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ReportComponent } from '../../components/report/report.component';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [NavbarComponent, ReportComponent],
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.scss'
})
export class RelatoriosComponent {

}
