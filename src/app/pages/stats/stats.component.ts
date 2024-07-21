import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

  openModel() {
    const modal = document.getElementById('staticBackdrop');

    if(modal != null) {
      modal.style.display = 'block';
    }
  }

  closeModel() {
    const modal = document.getElementById('staticBackdrop');

    if(modal != null) {
      modal.style.display = 'none';
    }
  }

  addData() {
    const modal = document.getElementById('staticBackdrop');

    if(modal != null) {
      modal.style.display = 'none';
    }

    alert('Data added successfully');
  }

}
