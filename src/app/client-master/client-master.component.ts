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

  clientFormGroup!: FormGroup;

  constructor(private cls:ClientServiceService,private formBuilder: FormBuilder) {

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

    console.log(this.clientFormGroup.value);

    this.cls.postClient(this.clientFormGroup.value).subscribe((result)=>{
      console.warn("result is here",result);
      this.ngOnInit();
      window.location.reload();

    })

  }


}
