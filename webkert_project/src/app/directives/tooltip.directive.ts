import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText!: string;
  private tooltipElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltipElement = this.renderer.createElement('span');
    this.tooltipElement.textContent = this.tooltipText;
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
  }
}