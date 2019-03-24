import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
    is_home_page: boolean;

    constructor(private router: Router) {
        this.is_home_page = this.checkCurrentUrl();
        console.log(this.is_home_page);
    }

    ngOnInit() {
    }

    checkCurrentUrl() {
        return this.router.url === '/home';
    }

}
