/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
    selector: 'ngx-app',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
    constructor(private analytics: AnalyticsService, private http: HttpClient) {
        // call api awake
        this.http.get(environment.apiUrl).subscribe();
    }

    ngOnInit(): void {
        this.analytics.trackPageViews();
    }
}
