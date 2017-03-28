import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechiesListComponent } from './techies-list/techies-list.component';
import { TechieDetailsComponent } from './techie-details/techie-details.component';
import { DataService } from './data.service';

const appRoutes:Routes= [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'techies', component: TechiesListComponent},
{path: 'techie/:id', component:TechieDetailsComponent },
{path: 'techie', component:TechieDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechiesListComponent,
    TechieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
