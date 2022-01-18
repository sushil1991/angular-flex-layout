import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  cards = [
    {
      title: 'Card',
      url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
      description:'Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.',
      mobileDescription: 'Angular Flex Order is reverse now....!!! No need to write media queryies !!!',
      subTitle:'API using Flexbox CSS + mediaQuery'
    },
      {
        title: 'Card',
        url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
        description:'Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.',
        mobileDescription: 'Angular Flex Order is reverse now....!!! No need to write media queryies !!!',
        subTitle:'API using Flexbox CSS + mediaQuery'
      },
      {
        title: 'Card',
        url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
        description:'Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.',
        mobileDescription: 'Angular Flex Order is reverse now....!!! No need to write media queryies !!!',
        subTitle:'API using Flexbox CSS + mediaQuery'
      },
      {
        title: 'Card',
        url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
        description:'Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.',
        mobileDescription: 'Angular Flex Order is reverse now....!!! No need to write media queryies !!!',
        subTitle:'API using Flexbox CSS + mediaQuery'
      },
      {
        title: 'Card',
        url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
        description:'Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.',
        mobileDescription: 'Angular Flex Order is reverse now....!!! No need to write media queryies !!!',
        subTitle:'API using Flexbox CSS + mediaQuery'
      },
      {
        title: 'Card',
        url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
        description:'Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.',
        mobileDescription: 'Angular Flex Order is reverse now....!!! No need to write media queryies !!!',
        subTitle:'API using Flexbox CSS + mediaQuery'
      },
      {
        title: 'Card',
        url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
        description:'Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.',
        mobileDescription: 'Angular Flex Order is reverse now....!!! No need to write media queryies !!!',
        subTitle:'API using Flexbox CSS + mediaQuery'
      },
      {
        title: 'Card',
        url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
        description:'Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.',
        mobileDescription: 'Angular Flex Order is reverse now....!!! No need to write media queryies !!!',
        subTitle:'API using Flexbox CSS + mediaQuery'
      },
      {
        title: 'Card',
        url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png',
        description:'Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.',
        mobileDescription: 'Angular Flex Order is reverse now....!!! No need to write media queryies !!!',
        subTitle:'API using Flexbox CSS + mediaQuery'
      }
      
    
  ]
  constructor(private http: HttpClient) { }
  getCards() {
    return of(this.cards)
  }
}
