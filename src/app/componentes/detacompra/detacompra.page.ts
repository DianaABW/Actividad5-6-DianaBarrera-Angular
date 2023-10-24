import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detacompra',
  templateUrl: './detacompra.page.html'
})
export class DetacompraPage implements OnInit {
  misdatos: any;

  constructor(private router: Router){}
  openDetailsWithState() {
    this.router.navigate(['si/tabs/tab2']);
  }

  ngOnInit() {
  }
}
