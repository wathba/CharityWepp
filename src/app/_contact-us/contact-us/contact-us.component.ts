import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/_service/contact.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
FormData: FormGroup;
  constructor(private builder: FormBuilder,private contact:ContactService, private router:Router) { }

  ngOnInit() {this.FormData = this.builder.group({
Fullname: new FormControl('', [Validators.required]),
Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
Comment: new FormControl('', [Validators.required])
})
  }r
onSubmit(FormData) {
console.log(FormData)
this.contact.postMessage(FormData).subscribe(response => {
 if(location.href = 'https://mailthis.to/confirm'){this.router.navigate(['/home']);}
console.log(response)
}, error => {
console.warn(error.responseText)
console.log({ error })
})
  
}
}
