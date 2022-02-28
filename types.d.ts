declare global {
    namespace JSX {
      interface IntrinsicElements {
        'xx-element1': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>; // Normal web component
        'xx-element2': React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>; // Web component extended from input
      }
    }
  }