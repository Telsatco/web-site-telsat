import { Component, OnInit } from '@angular/core';
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';
import { Client } from "app/classes/client";

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [ServicesTelsat]
})
export class ClientsComponent {
  clients: Client[];
  subscription: any;
  
  constructor(private clientsService:ServicesTelsat) {
    this.getInfoClients()
  }

  getInfoClients(): void {
    this.subscription = this.clientsService.getClient()
        .subscribe(data => {
          let clientsGroup = this.arrayToGroups(data, 3);
          this.clients = this.arrayToGroups(clientsGroup, 2);
        })    
  }

  ngOnDestroy() {
    if (this.subscription)  this.subscription.unsubscribe()
  }

  private arrayToGroups(source, groupSize): Array<any>{
    //This is the array of groups to return:
    let grouped = [];
    //work out the size of the group
    let groups = Math.ceil(source.length/groupSize);
    //clone the source array so we can safely splice it
    let queue = source;
    for (let r=0; r < groups; r++) {
      //Grab the next groupful from the queue, and append it to the array of groups
      grouped.push(queue.splice(0, groupSize));            
    }       
    return grouped;
  }
}
