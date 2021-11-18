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

  //declairation part

  //form group
  clientFormGroup!: FormGroup;
  clientFormGroup2!: FormGroup;

  //for activation part
  checked1: boolean = false;
  checked2: boolean = true;

  //variable for fetching data
  // client_collection:Client[] = [];
  client_collection:any;

  client!: Client;

  submitted?:boolean;
  clientDialogue?:boolean;
  clientEditDialogue?:boolean;

  selectedClients!:Client[];

  constructor(private cls:ClientServiceService,private formBuilder: FormBuilder) {

    //form part
    this.clientFormGroup = this.formBuilder.group(
      {
        companyName: new FormControl('',[Validators.required,Validators.pattern("[A-Z a-z]{5,20}")]),
        PAN: new FormControl('',[Validators.required,Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
        groupCompany: new FormControl(''),
        PrecisionId: new FormControl(''),
        approver: new FormControl('',[Validators.required,Validators.email]),
      }
    );

   }

  

  ngOnInit(): void {

    //fetching data from service method and display all data here...

    this.cls.getClientData().subscribe((result)=>{
     
      console.warn("shivraj",result);

      this.client_collection = result;
      
      console.log("id is",this.client_collection);

      

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
        this.client_collection[this.findIndexById(this.client.id)] = this.client;

        this.cls.updateClient(this.client.id,this.client).subscribe((result)=>{

          console.warn("result is here",result);
    
        })
        
      }
      else {
        this.client.id = this.createId();
        this.client_collection.push(this.client);
        this.cls.postClient(this.client_collection).subscribe((result)=>{

          console.warn("result is here",result);
    
        })
    }

    this.client_collection = [...this.client_collection];
    this.clientDialogue = false;
    this.client = {};
}
    
  
    //sending data to service file method

   

   
  }


  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}


//Edit client information
  editClient(client:Client){
    this.client={...client};
    // this.submitted=false;
    this.clientDialogue=true;
    console.log(client);
    
  }

  findIndexById(id:string){

    let index = -1;
    for (let i = 0; i < this.client_collection.length; i++) {
        if (this.client_collection[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}


}
