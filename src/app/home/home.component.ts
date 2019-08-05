import { Component, OnInit } from '@angular/core';
import { Sales } from '../sales';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submitted = false;

  form: FormGroup;

  sales: Sales[] = [];





  constructor(private billService: BillService) { 
    
  }
  
  ngOnInit() {
    this.form = new FormGroup({
      'item': new FormControl(null),
      'quantity': new FormControl(null),
      'unitPrice': new FormControl(null)
    })

    this.billService.getSales()
    .subscribe(v => {
      this.sales = v || [];
    });

  }




  onSubmit(){
    const sale: Sales = new Sales(this.form.value);
    this.sales.push(sale);

    this.billService.setSales(this.sales);
   // this.billService.getSales();
  }

}
