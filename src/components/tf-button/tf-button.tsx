import { Component, Prop, h } from '@stencil/core';
import { getClasses } from '../../utils/utils';

@Component({
  tag: 'tf-button',
  styleUrl: 'tf-button.css',
  shadow: true,
})
export class TfButton {
  @Prop() variant: string = 'contained';
  @Prop() shadow: boolean = false;
  @Prop() text: string;
  @Prop() size: string;
  @Prop({ mutable: true }) icon: string;
  @Prop() disabled: boolean = false;
  @Prop() bold: boolean = false; 
  @Prop() color: string; 
  @Prop() width: string; 
  @Prop({ mutable: true }) iconHover: string;
  @Prop({ mutable: true }) iconDisabled: string;

  private getTypography(size: string, text: string, bold: boolean, color:string) {
    if (bold && !size) {
      return <tf-headline color={color} variant="h6">{text}</tf-headline>;
    } else if (!bold && !size) {
      return <tf-headline color={color} variant="h7">{text}</tf-headline>;
    }

    switch (size) {
      case 'sm_circle':
        return <tf-headline color={color} variant="h8">{text}</tf-headline>;
      case 'lg_circle':
      case 'lg-b':
      case 'md':
      case 'sm':
        return <tf-headline color={color} variant="h7">{text}</tf-headline>;
      default:
        return <tf-headline color={color} variant="h6">{text}</tf-headline>;
    }
  }

  private handleHover(variant: string, disabled: boolean, bold: boolean, icon: string | undefined) {
    if (variant === 'outlined' && !disabled && icon !== undefined) {
      this.icon = 'icon_play_circle_blue_32_hover';
      return;
    }
    if (variant !== 'text' || (disabled && icon !== undefined)) return;
    this.icon = bold ? 'icon_play_circle_blue_32' : 'icon_play_circle_blue_24';
  }
  private handleLive(variant: string, disabled: boolean, bold: boolean, icon: string | undefined) {
    if (variant === 'outlined' && !disabled && icon !== undefined) {
      this.icon = 'icon_play_circle_blue_32';
      return;
    }
    if (variant !== 'text' || (disabled && icon !== undefined)) return;
    this.icon = bold ? 'icon_play_circle_black_32' : 'icon_play_circle_black_24';
  }

  render() {
    const { variant, shadow, size, text, icon, disabled, bold, color, width } = this;
    return (
      <button
        disabled={disabled}
        style={width && {width : width}}
        class={getClasses(variant, shadow, size, disabled)}
        onMouseEnter={this.handleHover.bind(this, variant, disabled, bold, icon)}
        onMouseLeave={this.handleLive.bind(this, variant, disabled, bold, icon)}
      >
        <div class="flex">
          {icon && <tf-icons style={{marginRight: '10px'}} icon-name={icon}>{text}</tf-icons>}
          {text && this.getTypography(size, text, bold, color)}
        </div>
      </button>
    );
  }
}
