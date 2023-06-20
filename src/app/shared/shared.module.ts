import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SidebarComponent, LazyImageComponent],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent, LazyImageComponent]
})
export class SharedModule { }
