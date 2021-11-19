import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../client';
import {ClientServiceService} from "../services/client-service.service";
@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.css']
})
export class ClientMasterComponent implements OnInit {


  //for activation part
  checked1: boolean = false;
  checked2: boolean = true;

  //variable for fetching data
  client1:Client[] = [];

  client!: Client;

  submitted?:boolean;
  clientDialogue?:boolean;
  clientEditDialogue?:boolean;

  selectedClients!:boolean;

  constructor(private cls:ClientServiceService,private formBuilder: FormBuilder) {}

  

  ngOnInit(): void {

    //fetching data from service method and display all data here...

    this.cls.getClientData().subscribe((result:any)=>{
      this.client1 = result;
    })
  }

 
//to open dialog box
  addClient(){
    this.client={};
    this.submitted=false;
    this.clientDialogue=true;
  }
//to hide dialog box
  hideDialog(){
    this.clientDialogue=false;
    this.submitted=false;
  }

  //save client information
  saveClient(){
    this.submitted=true;
    if(this.client.companyName?.trim()){
      if(this.client.id){
        this.cls.updateClient(this.client.id,this.client).subscribe((result)=>{
        window.location.reload();
      })  
    }
    else 
    {
        this.client.id = this.createId();
        this.client1.push(this.client);
        this.cls.postClient(this.client).subscribe((result)=>{
        window.location.reload();
        })
    }
    
    this.clientDialogue = false;
    this.client = {};
  }   
}


  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }


  findIndexById(id:string)
  {
    let index = -1;
    for (let i = 0; i < this.client1.length; i++) {
        if (this.client1[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
  }

  //Edit client information
    editClient(client:Client){
    this.client={...client};
    // this.submitted=false;
    this.clientDialogue=true;
    console.log(client);
    
  }
}
