import { Injectable } from '@angular/core';

export interface IProfile {
  displayName: string,
  firstName: string,
  lastName: string,
  descriptionAboutYourself: string,
  areaOfInterest: string[],
  profileType: string,
  experience: string,
  technology: string,
  role: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  private profileDetails: IProfile = {
    displayName: '',
    firstName: '',
    lastName: '',
    descriptionAboutYourself: '',
    areaOfInterest: ['developer'],
    profileType: 'professional',
    experience: '10',
    technology: 'react',
    role: ''
  };

  setProfileDetails(details: IProfile){
    this.profileDetails = details;
  }

  getProfileDetails() {
    return this.profileDetails;
  }


}
