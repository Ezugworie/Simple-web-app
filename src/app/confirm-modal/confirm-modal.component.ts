import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 
import { BillService } from '../bill.service';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../customer';
import { Sales } from './../sales';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  customer: Customer = new Customer();
  submitted = false;

  form: FormGroup;

  sales: Sales[] = [];
  constructor(private billService: BillService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'item': new FormControl(null),
      'quantity': new FormControl(null),
      'unitPrice': new FormControl(null)
  })
  this.billService.getSales()
  .subscribe(v => { 
    this.sales = v;
  });

}
newCustomer(): void {
  this.submitted = false;
  this.customer = new Customer();
}

  onSubmit(){
    const sale: Sales = new Sales(this.form.value);
    this.sales.push(sale);

    this.billService.setSales(this.sales);
    
   // this.billService.getSales();
   this.submitted = true;
    this.save();
  }

  save() {
    this.billService.createInvoice({
      total: v => v.total,
      id: v => v.id
    })
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
  }


  public captureScreen(time: Date)
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save(); // Generated PDF  
      pdf.addImage() 
    });  
  }  
  onOpen(event: any) {
    console.log(event);
  }


}
