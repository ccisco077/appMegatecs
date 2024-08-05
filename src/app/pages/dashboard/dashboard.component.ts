import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/pages/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../components/pages/sidebar/sidebar.component";
import { BreadcrumbComponent } from "../../components/pages/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent, BreadcrumbComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
