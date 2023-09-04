import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {

  carddigitsMock: string = '0000 0000 0000 0000';
  mmMock: string = '00';
  yyMock: string = '01';
  cvcMock: string = '';
  nameMock: string = 'Mr. Cardholder';

  constructor() { }

  ngOnInit(): void {
    this.setupInputValueCopy();
    this.setupCVCToggler();
  }

  onlyNumberKey(event: any): boolean {
    const ASCIICode = event.which ? event.which : event.keyCode;
    return ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57);
  }

  formatCardNumber(event: any): void {
    let inputElement: HTMLInputElement = event.target as HTMLInputElement;
    let val: string = inputElement.value;
    let newval: string = '';
    val = val.replace(/\s/g, '');
    for (let i = 0; i < val.length; i++) {
      if (i % 4 === 0 && i > 0) newval = newval.concat(' ');
      newval = newval.concat(val[i]);
    }
    inputElement.value = newval;
  }

  setupInputValueCopy(): void {
    const bounds = document.querySelectorAll("[data-bound]");
    for (let i = 0; i < bounds.length; i++) {
      const targetId = bounds[i].getAttribute("data-bound");
      const defValue = bounds[i].getAttribute("data-def");
      const targetEl = document.getElementById(targetId);
      bounds[i].addEventListener("blur", () => (targetEl.innerText = (bounds[i] as HTMLInputElement).value || defValue));
    }
  }

  setupCVCToggler(): void {
    const cvc_toggler = document.getElementById("cvc_toggler");
    cvc_toggler?.addEventListener("click", () => {
      const target = cvc_toggler.getAttribute("data-target");
      const el = document.getElementById(target) as HTMLInputElement; // Cast to HTMLInputElement
      el?.setAttribute("type", el.type === "text" ? "password" : "text");
    });
  }
}