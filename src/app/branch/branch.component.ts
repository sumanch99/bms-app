//To be used
import { DataServiceService } from './../service/data/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../model/branch.model';
import { Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  newBranch:Branch=new Branch('','','',0,0);  
  constructor(private service:DataServiceService,private router:Router) { }

  ngOnInit(): void {
    
    
  }
  onSubmit(addBranchForm:any)
  {
    //console.log(addBranchForm.value);
    this.newBranch.address=addBranchForm.value.address;
    this.newBranch.branchName=addBranchForm.value.branchName;
    this.newBranch.ifscCode=addBranchForm.value.ifscCode;
    this.newBranch.pincode=addBranchForm.value.pincode;
    //console.log('In list branches,before subscribing');
    //console.log(this.newBranch);
    this.service.addNewBranch(this.newBranch).subscribe(
      data=>{
        console.log(data);
        swal("Done!", "New Branch added successfully!", "success");
        this.router.navigate(['listBranches']);
      },
      error=>{
        swal("Oops!", "Something went wrong! May be IFSC code already exists.", "error");
      }
    );  
    
  }

}
