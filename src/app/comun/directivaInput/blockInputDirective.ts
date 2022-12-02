import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({selector: '[appInput]'})
export class InputDirective {

    @Input('appInput') inputType:string;

    public message:boolean = false;
    public pattern:RegExp;

    private regexMap = {
        integer: /^[0-9]*$/g,
        float: /^[+-]?([0-9]*[.])?[0-9]+$/g,
        letter: /[a-zA-ZñÑáéíóúÁÉÍÓÚ]/,
        space: /[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/,
        letterNumber: /[a-zA-ZñÑáéíóúÁÉÍÓÚ1234567890]/,
        NumSpaceLetter: /[a-zA-ZñÑáéíóúÁÉÍÓÚ1234567890\s]/,
        words: /([A-z]*\\s)*/g,
        point25: /^[0-9]+(\.[0-9]{1,2})?$/,
        badBoys: /^[^{}*+£$%\\^-_]+$/g
    };

    constructor(public ref:ElementRef, public renderer: Renderer2){};

    @HostListener('keypress', ['$event']) onInput(e) {
        
    this.pattern = this.regexMap[this.inputType]
    const inputChar = e.key;
    this.pattern.lastIndex = 0;
        
        if(!this.pattern.test(inputChar)) {
            e.preventDefault();    
        }   
    }
    
    public badBoyAlert(color: string) {       
        setTimeout(() => {
            this.message = true;
            this.renderer.setStyle(this.ref.nativeElement, 'color', color);
        }, 2000)
    }

    /* ejemplo appInput="point25" */
        
}