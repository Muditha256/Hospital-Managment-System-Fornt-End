import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Appointment } from '../../model/Appointment';

@Component({
  selector: 'app-appoinment-manage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './appoinment-manage.component.html',
  styleUrl: './appoinment-manage.component.css'
})
export class AppoinmentManageComponent {

  public appointmentList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/appointment/get-all").subscribe(res=>{
      console.log(res);
      this.appointmentList=res;
    })
  }

  deleteAppoinment(id:any){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete(`http://localhost:8080/appointment/delete-appointment/${id}`).subscribe(res=>{
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });

          this.loadTable();
        })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
    
  }

public selectedAppoinmet:any ={};

selectAppoinment(appointment:any){
      console.log(appointment);
      this.selectedAppoinmet=appointment;

  }


  updateAppointment(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/appointment/update-appointment",this.selectedAppoinmet).subscribe(res=>{
          Swal.fire("Saved!", "", "success");
        })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  
  }
}
