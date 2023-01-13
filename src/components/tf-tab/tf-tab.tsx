import { Component, Prop, h, State } from '@stencil/core';
import { getPeriod } from '../../utils/utils';

@Component({
  tag: 'tf-tab',
  styleUrl: 'tf-tab.css',
  shadow: true,
})
export class TfTab {
  @Prop() variant: string = 'small';
  @State() firstButton = true;
  @State() secondButton = false;

  private getClassButton(numOfButton: string) {
    switch (numOfButton) {
      case 'first':
        if (this.variant === 'small') return this.firstButton ? `${this.variant} pointer` : `${this.variant}`;
        return this.firstButton ? `toggle ${this.variant} pointer` : `toggle ${this.variant}`;
      default:
        if (this.variant === 'small') return this.secondButton ? `${this.variant} pointer` : `${this.variant}`;
        return this.secondButton ? `toggle ${this.variant} pointer` : `toggle ${this.variant}`;
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
    return numOfButton
  }
  render() {
    const period = getPeriod(this.variant);
    return (
      <div class="row">
        <button class={this.getClassButton('first')} onClick={this.handleClick.bind(this, 'first')}>
          <tf-headline variant="h7">{period[0]}</tf-headline>
        </button>
        <button class={this.getClassButton('second')} onClick={this.handleClick.bind(this, 'second')}>
          <tf-headline variant="h7">{period[1]}</tf-headline>
        </button>
      </div>
    );
  }
}
