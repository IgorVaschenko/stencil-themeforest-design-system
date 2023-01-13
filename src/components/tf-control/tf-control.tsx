import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tf-control',
  styleUrl: 'tf-control.css',
  shadow: true,
}) 
export class TfControl {
  @Prop() variant: string = 'desktop';
  @Prop() direction: string;
  @Prop() disabled: boolean = false;
  render() {
    const desktop_icon_version = this.variant === 'desktop' ? '' : '_mobile';
    const disabled_icon_version = this.disabled ? '_disabled' : '';

    return (
      <div class={this.variant} style={this.disabled && {pointerEvents:'none'}} onClick={()=>console.log('click')}>
        <tf-icons  iconName={`icon_arrow_${this.direction}${desktop_icon_version}${disabled_icon_version}`}></tf-icons>
      </div>
    );
  }
}
