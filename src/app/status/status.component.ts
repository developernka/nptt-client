import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

declare var $;

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  showTable = false;
  statusListHeaders = [];
  statusList = [];
  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getFromAPI("status").subscribe( resp => {
      this.statusList =  resp['records'];
      this.statusListHeaders = Object.keys(this.statusList[0]);
      $(()=>{
        $('table.table').DataTable({
          columnDefs: [
            { targets: [0, 1], visible: false },
            { targets: '_all', visible: true }
          ],
          "order": [[ 1, 'desc' ]],
          "initComplete" : () => {
            this.showTable = true;
          }
        });
      });
    });
  }
}
