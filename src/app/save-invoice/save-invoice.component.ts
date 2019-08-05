import { Sales } from './../sales';
import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { BillService } from '../bill.service';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../customer';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-save-invoice',
  templateUrl: './save-invoice.component.html',
  styleUrls: ['./save-invoice.component.css']
})
export class SaveInvoiceComponent implements OnInit {
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



   get total() {
    return this.sales.map(v => v.quantity * v.unitPrice)
      .reduce((a: number, b: number) => a + b, 0);
  }


 save() {
    this.billService.createInvoice({
      total: this.total,
     
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
  
}
