import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService:TranslateService) { }
  lang:String = 'English';
  ngOnInit() {
    this.translateService.onLangChange.subscribe((lang)=>{
      console.log("l",lang)
      this.lang = (lang.lang === 'ar')?'Arabic':'English';
    });
  }
  menuChanged(e){
    console.log(e)
  }
  switchLanguage(language: string) {
    this.translateService.use(language);

  }
}
