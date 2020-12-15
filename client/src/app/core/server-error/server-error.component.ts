import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  error: any; 
  constructor(private router: Router) { 
    const navitagion = this.router.getCurrentNavigation();
    this.error = navitagion && navitagion.extras && navitagion.extras.state
    && navitagion.extras.state.error;
    
  }

  ngOnInit(): void {
  }

}
