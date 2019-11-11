import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
    current_url: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    redirectToPageContent(url) {
        this.current_url = url;
        this.router.navigate([url]);
    }
}
