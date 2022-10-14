import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



 constructor(public navCtrl: NavController) {}
    
    order = [
        {id: 1, chk: false, itm: 'Hatdog'},
        {id: 2, chk: false, itm: 'Itlog'},
        {id: 3, chk: false, itm: 'Siomai'},
        {id: 4, chk: false, itm: 'Cookies'},
        {id: 5, chk: false, itm: 'Coke'},
    ];
    
    items = [];
    iQty = [];
    cart = [];
    selQty = "0";
    qty = 0;
    
    onItemChk($event){
        const itemID = $event.target.value;
        const isChecked = $event.target.checked;
        
        this.order = this.order.map((d) => {
            if (d.id == itemID){
                d.chk = isChecked;
                if (d.chk == true){
                    const sel = document.getElementById(itemID) as HTMLSelectElement | null;
                    this.selQty = sel.value;
                    if (sel.value == null){
                        this.selQty = "1";
                        this.iQty[d.id - 1] = "1";
                    }
                    this.items.push(d.itm + "    -    " + this.selQty + "x");
                }else{
                    this.items.splice(this.items.indexOf(d.itm), 1);
                }
                return d;
            }
            return d;
        });
        
    }
    
    onSelect($event){
        const qtyID = $event.target.id;
        const val = $event.target.value;



       this.order = this.order.map((d) => {
            if (qtyID == d.id){
                this.items[this.items.indexOf(d.itm + "    -    "+this.iQty[d.id-1]+"x")] = d.itm + "    -    " + val + "x";
                this.iQty[d.id - 1] = val;
                return d;
            }
            
            return d;
        });
        
    }
    
    
    goTo(){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                items: JSON.stringify(this.items),
            }
        };
        console.log(JSON.stringify(this.items));
        this.navCtrl.navigateForward(['order-page'],navigationExtras);
    }



}