/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { Router } from '@angular/router';
import { PostsService } from './posts/posts.service';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
  <div class="site-wrapper">
    <div class="site-wrapper-inner">
      <div class="cover-container">
        <div class="masthead clearfix">
          <div class="inner">
            <h3 class="masthead-brand">Park Another Day</h3>
            <nav class="nav nav-masthead">
              <a [ngClass]="getRoute('/')" href="#">Home</a>
              <a [ngClass]="getRoute('/buy')" href="#">Buy</a>
              <a [ngClass]="getRoute('/sell')" href="#">Sell</a>
              <a [ngClass]="getRoute('/account')" href="#">Account</a>
              <a [ngClass]="getRoute('/admin')" href="/admin">Admin</a>
            </nav>
          </div>
        </div>
        <router-outlet></router-outlet>
        <div class="mastfoot">
          <div class="inner">
            <p>Brought to you by the <a href="#">Hack to the Future</a> team.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  providers: [PostsService]
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Mean stack starter';
  public url = 'https://mean.io';

  public location: string;

  constructor(
    public appState: AppState,
    private router:Router
  ) { }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  public getRoute(path){
    if (this.router.url === path){
      return "nav-link active";
    }
    else{
      return "nav-link";
    }
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
