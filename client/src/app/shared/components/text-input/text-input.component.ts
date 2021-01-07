import { Component, ElementRef, forwardRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  // providers:[
  //   {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => TextInputComponent)}
  // ],
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', {static: true}) input: ElementRef;
  @Input() type:string = 'text';
  @Input() label: string = '';

  constructor(private elementRef: ElementRef, @Self() public controlDir: NgControl) 
  {
    this.input = elementRef;
    this.controlDir.valueAccessor = this;
   }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = control?.validator ? [control.validator] : [];
    const asyncValidators = control?.asyncValidator ? [control.asyncValidator] : [];
    control?.setValidators(validators);
    control?.setAsyncValidators(asyncValidators);
    control?.updateValueAndValidity();
  }

  onChange(event: any){
    debugger;
    console.log(event);
  }

  onTauched(){

  }

  writeValue(obj: any): void {
    debugger;
    console.log(obj);
      this.input.nativeElement.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTauched = fn;
  }


}
