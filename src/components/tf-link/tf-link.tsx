import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'tf-link',
  styleUrl: 'tf-link.css',
  shadow: true,
})
export class TfLink {
  @Prop() variant: string;
  @Prop() text: string;
  @Prop() href: string;
  @Prop() target: string;
  @Prop() active: boolean = false;
  @Prop() disabled: boolean = false;
  @State() isHover = false;
  private handleHover(variant: string) {
    this.isHover = variant === 'arrow';
  }
  private handleLive() {
    this.isHover = false;
  }
  render() {
    const { variant, text, href, disabled, target } = this;
    return (
      <div class="container">
        <a
          href={href}
          target={target}
          class={`${variant}${disabled ? ' disabled' : ''}`}
          onMouseEnter={this.handleHover.bind(this, variant)}
          onMouseLeave={this.handleLive.bind(this, variant)}
        >
          <tf-headline variant="h7">
           <slot></slot> {text} 
          </tf-headline>
        </a>
        {variant === 'arrow' && !disabled && <tf-icons iconName={this.isHover ? 'icon_arrow_right_secondary' : 'icon_arrow_right_blue'} />}
        {variant === 'arrow' && disabled && <tf-icons iconName="icon_arrow_right_grey" />}
        {variant === 'menu' && <tf-icons iconName="icon_arrow_right_white" />}
      </div>
    );
  }
}
