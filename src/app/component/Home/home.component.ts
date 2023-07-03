import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { FiltroWeaponComponent } from './filtro-weapon/filtro-weapon.component';
import { FiltroSkinsComponent } from './filtro-skins/filtro-skins.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dialog: MatDialog){}

  resultadoSkin = false

  resultadoWeapons = true
  teste: any

  filtragem: any

  filtragemSkin: any

  skins: any = []

  armas: any = []


  
  filtrarWeapons(){
   const dialogRef = this.dialog.open(FiltroWeaponComponent, {
      height: '70%',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.skins = []
      this.armas = []
     this.filtragem = result?.content
     if(result?.content){
      this.resultadoWeapons = true
      this.resultadoSkin = false
     }

     for (const arma of this?.filtragem) {
      this.armas.push(arma)
      if(arma?.skins){
        for (const skin of arma?.skins) {
          this.skins.push(skin)
         }}
      }
      


    })

    
  }

  filtrarSkins(){

    const dialogRef = this.dialog.open(FiltroSkinsComponent, {
      height: '70%',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.skins = []
      this.armas = []
     this.filtragemSkin = result?.content
     if(result?.content){
      this.resultadoSkin = true
      this.resultadoWeapons = false
     }



    })

  }
  
}