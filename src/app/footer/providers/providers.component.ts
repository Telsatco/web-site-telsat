import { Component, OnInit } from '@angular/core';
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';
import { Client } from "app/classes/client";

@Component({
  selector: 'providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
  providers: [ServicesTelsat]
})
export class ProvidersComponent {
  providers: Client[];
  subscription: any
  constructor(private providersService:ServicesTelsat) { 
    this.getInfoProviders()
  }

  private getInfoProviders(): void {
    this.subscription = this.providersService.getProvider()
        .subscribe( data => {
         let providersGroup = this.arrayToGroups(data, 3);
          this.providers = this.arrayToGroups(providersGroup, 2);
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
    for (let r=0;r<groups;r++) {
      //Grab the next groupful from the queue, and append it to the array of groups
      grouped.push(queue.splice(0, groupSize));            
    }       
    return grouped;
  }
}
