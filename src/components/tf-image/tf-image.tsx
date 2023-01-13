import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'tf-image',
  styleUrl: 'tf-image.css',
  shadow: true,
})
export class TfImage {
  @Prop() imageName: string;

  render() {
    return <img class="image" src={getAssetPath('../../assets/' + this.imageName + '.png')} alt={this.imageName} />;
  }
}
