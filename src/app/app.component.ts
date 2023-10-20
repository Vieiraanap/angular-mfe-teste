import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  ViewChild
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfe-bidirecional';

  @ViewChild('viewContainer', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  ngOnInit() {

    this.load()
  }

  async load() {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './ButtonComponent'
    });

    const ref = this.viewContainer.createComponent(m.ButtonComponent);
  }
}
