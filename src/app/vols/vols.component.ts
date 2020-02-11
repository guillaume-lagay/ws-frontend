import { VolService } from './../../services/vols.service';
import { Vol } from './../../models/Vol';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.scss']
})
export class VolsComponent implements OnInit {

  private vols: Vol[] = [];

  constructor(private volService: VolService ) { }

  ngOnInit() {
    this.refreshVolsList();
  }

  refreshVolsList() {
    this.volService.getVols().subscribe(result => {
      this.vols = result;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }
}
