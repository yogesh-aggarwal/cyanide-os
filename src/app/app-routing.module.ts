import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DesktopComponent } from "./routes/global/desktop/desktop.component";

const routes: Routes = [{ path: "", component: DesktopComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
