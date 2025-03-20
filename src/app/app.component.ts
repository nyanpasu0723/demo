import { Component } from '@angular/core';
import { HttpClientService } from './@http-service/http-client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  resData!: any;
  chooseLocationName!: string;
  chooseLocation!: any;
  chooseElement!: string;
  chooseElementData!: any;


  constructor(private httpClientService: HttpClientService) { }


  ngOnInit(): void {
    this.httpClientService.getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-DB0E0D2B-1593-40A7-88C3-F4237C75DD1A&limit=10&format=JSON')
      .subscribe((res: any) => {
        console.log(res);
        this.resData = res;
        this.chooseLocationName = this.resData.records.Locations[0].Location[0].LocationName;
        this.chooseLocation = this.resData.records.Locations[0].Location[0];
        this.chooseElement = this.resData.records.Locations[0].Location[0].WeatherElement[0].ElementName;
        this.chooseElementData = this.resData.records.Locations[0].Location[0].WeatherElement[0];
      }
      );
  }


  changeLocation(location: any) {
    this.chooseLocationName = location.LocationName;
    this.chooseLocation = location;
    for (let weather of location.WeatherElement) {
      if (this.chooseElement == weather.ElementName) {
        this.chooseElementData = weather;
      }
    }
  }


  changeElement(element: any) {
    this.chooseElement = element.ElementName;
    this.chooseElementData = element;
  }
}
