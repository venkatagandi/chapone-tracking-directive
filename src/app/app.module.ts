import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstDirective } from "./directives/first.directive";
import { BasicComponent } from "./basic/basic.component";
import { TrackDirective } from "./directives/track.directive";
import { TrackdirComponent } from "./trackdir/trackdir.component";
import { TrackingService } from "./trackdir/services/tracking.service";

@NgModule({
  declarations: [
    AppComponent,
    FirstDirective,
    TrackDirective,
    BasicComponent,
    TrackdirComponent
  ],
  imports: [BrowserModule],
  providers: [TrackingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
