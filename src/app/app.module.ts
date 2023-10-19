import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataCollectionComponent } from './components/data-collection/data-collection.component';
import { HistoryComponent } from './components/history/history.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DataCollectionService } from './services/data-collection.service';
import { FormsModule } from '@angular/forms';
import { IntroductionComponent } from './components/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    DataCollectionComponent,
    HistoryComponent,
    NotFoundComponent,
    IntroductionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataCollectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
