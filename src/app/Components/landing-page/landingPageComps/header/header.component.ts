import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT }  from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService:TranslateService, @Inject(DOCUMENT) public document:any) { }
  lang:String = 'English';
  ngOnInit() {
    this.translateService.onLangChange.subscribe((lang)=>{
      console.log("l",lang)
      this.switchFontLanguage(lang.lang);
      this.lang = (lang.lang === 'ar')?'Arabic':'English';
    });
  }
  menuChanged(e){
    console.log(e)
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

  switchFontLanguage(language: string){
    let styleTagForDynamicFont = document.getElementById('styleTagForDynamicFont');
    if(language === 'ar'){
      styleTagForDynamicFont.innerHTML = `
      :not(i) {
        font-family:cairo !important;
              }
      `;
    }else{
      styleTagForDynamicFont.innerHTML=""
    }

  }
}
