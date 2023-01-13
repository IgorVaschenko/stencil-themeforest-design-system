import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-shadow-btn',
  styleUrl: 'tf-shadow-btn.css',
  shadow: true,
})
export class TfShadowBtn {
  render() {
    return (
      <button class="shadow">
        <slot></slot>
      </button>
    );
  }
}
