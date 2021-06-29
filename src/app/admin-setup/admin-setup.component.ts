import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { Admin } from '../model/admin.model';
import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-admin-setup',
  templateUrl: './admin-setup.component.html',
  styleUrls: ['./admin-setup.component.css']
})
export class AdminSetupComponent implements OnInit {

  constructor(private service: DataServiceService,private router:Router) { }
  admin:Admin = new Admin();
  ngOnInit(): void {
  }
  onSubmit() {
    
    this.service.adminSetup(this.admin).subscribe(
      response => {
        console.log(response);
        swal("Congratulations!", 'Admin profile successfully setup', "success");
        this.router.navigate(['app-admin-login']);
      },
      error=>{
        console.log(error);
        swal("Failed!!", "You are not registered as an employee of UBI", "error");
      }
    );
  }
}
