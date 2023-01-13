import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tf-paragraph',
  styleUrl: 'tf-paragraph.css',
  shadow: true,
})
export class TfParagraph {
  @Prop() variant: string;
  @Prop() color: string;
  @Prop() component: string;
  render() {
    const {color, variant , component} = this
    return component === 'p' ? (
      <p style={{color}}  class={variant ? variant : 'p1'}>
        <slot></slot>
      </p> ) 
      : component === 'span' ? (
      <span style={{color}}  class={variant ? variant : 'p1'}>
        <slot></slot>
      </span>) 
      : (
      <h1 style={{color}}  class={variant ? variant : 'p1'}>
        <slot></slot>
      </h1>
      )
  }
}
