import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Height: number;
  Weight: number;
  bmiValue:number;
  BMIMessage:string;

  constructor() {

  }
 calculateBMI() {
      if (this.Weight > 0 && this.Height > 0) {
        let finalBmi = this.Weight / (this.Height / 100 * this.Height / 100);
        this.bmiValue = parseFloat(finalBmi.toFixed(2));
        this.setBMIMessage();
      }
    }
    private setBMIMessage() {
      if (this.bmiValue <18.5){
        this.BMIMessage = "underweigth"
      }
      else if (this.bmiValue >= 18.5 && this.bmiValue < 25) {
        this.BMIMessage = "Normal"
      }
      else if (this.bmiValue >= 25 && this.bmiValue < 29.9) {
        this.BMIMessage = "overweigth"
      }
      else if (this.bmiValue >=30) {
        this.BMIMessage = "Obese"
      }
    }
}
