import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'tf-switch',
  styleUrl: 'tf-switch.css',
  shadow: true,
})
export class TfSwitch {
  @Prop() variant: string = 'desktop';
  @State() firstButton = true;
  @State() secondButton = false;

  getSwitchClass(numOfButton: string) {
    switch (numOfButton) {
      case 'first':
        if (this.variant === 'desktop') return this.firstButton ? `switch pointer` : `switch`;
        return this.firstButton ? `switch_mobile pointer` : `switch_mobile`;
      default:
        if (this.variant === 'desktop') return this.secondButton ? `switch pointer` : `switch`;
        return this.secondButton ? `switch_mobile pointer` : `switch_mobile`;
    }
  }

  handleClick(numOfButton: string) {
    if (numOfButton === 'first') {
      this.firstButton = true;
      this.secondButton = false;
    } else {
      this.firstButton = false;
      this.secondButton = true;
    }
  }

  render() {
    return (
      <div class={this.variant === 'desktop' ? 'container' : 'container_mobile'}>
        <button class={this.getSwitchClass('first')} onClick={this.handleClick.bind(this, 'first')}>
          <tf-headline variant="h7">Montly</tf-headline>
        </button>
        <button class={this.getSwitchClass('second')} onClick={this.handleClick.bind(this, 'second')}>
          <tf-headline variant="h7">Yearly</tf-headline>
        </button>
      </div>
    );
  }
}
