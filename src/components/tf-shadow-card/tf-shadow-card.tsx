import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tf-shadow-card',
  styleUrl: 'tf-shadow-card.css',
  shadow: true,
})
export class TfShadowCard {
  @Prop() variant: string = 'sh1';
  render() {
    return (
      <div class={this.variant}>
        <slot></slot>
      </div>
    );
  }
}
