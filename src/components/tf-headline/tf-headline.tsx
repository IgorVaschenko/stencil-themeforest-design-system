import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tf-headline',
  styleUrl: 'tf-headline.css',
  shadow: true,
})
export class TfHeadline {
  @Prop() variant: string;
  @Prop() component: string;
  @Prop() color: string;
  render() {
    const {color, variant, component} = this
    return component === 'p' ? (
      <p style={{color}}  class={variant ? variant : 'h1'}>
        <slot></slot>
      </p> ) 
      : component === 'span' ? (
      <span style={{color}}  class={variant ? variant : 'h1'}>
        <slot></slot>
      </span>) 
      : (
      <h1 style={{color}}  class={variant ? variant : 'h1'}>
        <slot></slot>
      </h1>
      )
  }
}
