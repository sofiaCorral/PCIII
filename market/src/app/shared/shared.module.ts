import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
