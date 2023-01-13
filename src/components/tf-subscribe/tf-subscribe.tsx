import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tf-subscribe',
  styleUrl: 'tf-subscribe.css',
  shadow: true,
})
export class TfSubscribe {
  @Prop() variant: string;
  @Prop() theme: string;
  render() {
    const { variant, theme } = this;
    return (
      <div class={`${variant}_${theme}`}>
        <div class='container'>
          <tf-headline variant={variant === 'desctop' ?'h2' : 'h3'}>Subscribe to our newsletter</tf-headline>
          {variant === 'desktop' && <tf-paragraph variant='p1'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</tf-paragraph>}
        </div>
        <div>
          <tf-button variant='outlined' text='Subscribe'></tf-button>
          <slot></slot>
        </div>
      </div>
    );
  }
}
