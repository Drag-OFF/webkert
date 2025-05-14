import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } as any;
    const mockRenderer2 = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle', 'addClass', 'removeClass', 'setAttribute', 'removeAttribute', 'setProperty', 'setValue', 'listen', 'selectRootElement', 'createElement', 'createComment', 'createText', 'appendChild', 'insertBefore', 'removeChild', 'parentNode', 'nextSibling']);
    const directive = new HighlightDirective(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
