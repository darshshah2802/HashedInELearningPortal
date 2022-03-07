import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MODAL_MESSAGES } from '../courses/constants';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  areaOfInterestArr: any = [
    { id: 1, name: 'Designer', value : 'designer', },
    { id: 2, name: 'Developer', value : 'developer'},
    { id: 3, name: 'Project Manager', value : 'projectManager' },
    { id: 4, name: 'Sales', value : 'sales' },
  ];

  profileService: ProfileService;
  profileForm: FormGroup;

  modalMessage:string = MODAL_MESSAGES.PROFILE_SAVED;
  modalIntent = 'success';
  showModal = false;

  constructor(private formBuilder: FormBuilder, profileService: ProfileService) {
    this.profileForm = this.formBuilder.group({});

    this.profileService = profileService;
  }


  ngOnInit(): void {
      const profileValues = this.profileService.getProfileDetails();
      console.log(profileValues);
      this.profileForm = this.formBuilder.group({
        displayName: new FormControl(profileValues.displayName, Validators.required),
        firstName: new FormControl(profileValues.firstName, Validators.required),
        lastName: new FormControl(profileValues.lastName, Validators.required),
        descriptionAboutYourself: new FormControl(profileValues.descriptionAboutYourself),
        areaOfInterest: this.formBuilder.array(profileValues.areaOfInterest, Validators.required),
        profileType: new FormControl(profileValues.profileType),
        experience: new FormControl(profileValues.experience),
        technology: new FormControl(profileValues.technology),
        role: new FormControl(profileValues.role,
          Validators.pattern('^[a-zA-Z \-\']+')
        ),
      });
  }

  onCheckboxChange(e: any) {
    const areaOfInterest: FormArray = this.profileForm.get('areaOfInterest') as FormArray;
    if (e.target.checked) {
      areaOfInterest.push(new FormControl(e.target.value));
    } else {
       const index = areaOfInterest.controls.findIndex(x => x.value === e.target.value);
       areaOfInterest.removeAt(index);
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.profileService.setProfileDetails(this.profileForm.value);
    this.showModal=true;
  }

  closeModal() {
    this.showModal = false;
  }

}
