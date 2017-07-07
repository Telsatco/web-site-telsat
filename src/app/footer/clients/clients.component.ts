import { ClientsService } from './../../services/clients/clients.service';
import { Client } from './../../classes/client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [ClientsService]
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientsService:ClientsService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientsService.getClient().then(data => {
      this.clients = this.arrayToGroups(data, 3);
      this.clients = this.arrayToGroups(this.clients, 2);
    });
    
  }

  private arrayToGroups(source, groupSize): Array<any>{  

    //This is the array of groups to return:
    let grouped = [];

    //work out the size of the group
    let groups = Math.ceil(source.length/groupSize);

    //clone the source array so we can safely splice it
    let queue = source;

    for (let r=0;r<groups;r++) {
      //Grab the next groupful from the queue, and append it to the array of groups
      grouped.push(queue.splice(0, groupSize));            
    }       
    return grouped;
  }
}
