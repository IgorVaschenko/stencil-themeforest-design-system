import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tf-tag',
  styleUrl: 'tf-tag.css',
  shadow: true,
})
export class TfTag {
  @Prop() disabled: boolean = false;
  @Prop() pointer: boolean = false;
  render() { 
    return (
      <button class={this.disabled ? 'disabled' : this.pointer ? 'pointer' : 'tag'}>
        <slot></slot>
      </button>
    );
  }
}
