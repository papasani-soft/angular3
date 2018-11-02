import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  a1="abc";   
  data2()
  {     
    
    this.a1="Anji";
    console.log(this.a1);
  }
  constructor() { }

  ngOnInit() {
  }

}
