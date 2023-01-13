import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'tf-icons',
  styleUrl: 'tf-icons.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class TfIcons {
  @Prop() iconName: string;
  @Prop() pointer: boolean;
  render() {
    return <img src={getAssetPath('../../assets/' + this.iconName + '.svg')} alt={this.iconName} style={this.pointer &&{ cursor : 'pointer'}}/>;
  }
}
