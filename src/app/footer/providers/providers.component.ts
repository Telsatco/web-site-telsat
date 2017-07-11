import { Component, OnInit } from '@angular/core';
import { ClientsService } from "app/services/clients/clients.service";
import { Client } from "app/classes/client";

@Component({
  selector: 'providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
  providers: [ClientsService]
})
export class ProvidersComponent implements OnInit {
  providers: Client[];

  constructor(private clientsService:ClientsService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientsService.getProvider().then(data => {
      this.providers = this.arrayToGroups(data, 3);
      this.providers = this.arrayToGroups(this.providers, 2);
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
