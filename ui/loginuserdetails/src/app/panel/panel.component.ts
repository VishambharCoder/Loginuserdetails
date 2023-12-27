import { Component, TemplateRef } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { CommonModule } from '@angular/common';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';  
import { Data } from 'popper.js';

@Component({
  selector: 'app-panel', 
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})


export class PanelComponent{
  

  users:any;
  ngOnInit(): void {
    
  }
 
  constructor(private userData:UserDataService , private modalService: NgbModal){
   userData.users().subscribe((data)=>{
   console.warn("data",data);
    this.users=data
  });
  }


  closeResult = '';

	open(content:TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

	
  }
