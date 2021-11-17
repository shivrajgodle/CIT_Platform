import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import {ClientServiceService} from "../services/client-service.service";
@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.css']
})
export class ClientMasterComponent implements OnInit {

  constructor(private cls:ClientServiceService) { }
  client_collection!:any;

  ngOnInit(): void {
    this.cls.getClientData().subscribe((result)=>{
      console.warn(result);

      this.client_collection = result;

    })
  }

  client!: Client;
  submitted?:boolean;
  clientDialogue?:boolean;

  selectedClients!:Client[];

  addClient(){
    this.client={};
    this.submitted=false;
    this.clientDialogue=true;
  }

  hideDialog(){
    this.clientDialogue=false;
    this.submitted=false;
  }

  saveClient(){
    this.submitted=true;

    console.log(this.client);

    this.cls.postClient(this.client).subscribe((result)=>{
      console.warn("result is here",result);
      this.ngOnInit();
      window.location.reload();

    })

  }


}
