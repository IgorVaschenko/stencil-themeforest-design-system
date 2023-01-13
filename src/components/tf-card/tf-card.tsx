import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tf-card',
  styleUrl: 'tf-card.css',
  shadow: true,
})
export class TfCard {
  @Prop() view: string;
  @Prop() variant: string;
  @Prop() title: string;
  @Prop() subtitle: string;
  @Prop() icon: string;
  @Prop() position: string;
  @Prop() image: string;
  @Prop() date: string;
  @Prop({ mutable: true }) solutions: string[];
  @Prop() cost: string;
  @Prop() width: string;
  @Prop() solution: boolean = false;


  getServiceCard({ icon, view, variant, title, subtitle }) {
    return (
      view === 'services' && (
        <tf-shadow-card variant="sh2">
          <div class={view} style={this.width && { width: `${this.width}` }}>
            <div class={variant}>
              <div class={`${variant}_icon`}>
                <tf-icons icon-name={icon}></tf-icons>
              </div>
              <div class={`${variant}_title`}>
                <tf-headline variant="h5">{title}</tf-headline>
              </div>
              <div class={`${variant}_subtitle`}>
                <tf-paragraph variant="p3">{subtitle}</tf-paragraph>
              </div>
              <div class={`${variant}_link`}>
                <slot></slot>
              </div>
            </div>
          </div>
        </tf-shadow-card>
      )
    );
  }
  getServiceMobileCard({ icon, view, variant, title, subtitle }) {
    return (
      view === 'services_mobile' && (
        <tf-shadow-card variant={variant === 'right_text_mob' ? 'sh2' : ''}>
          <div class={`${view}_${variant}`} style={this.width && { width: `${this.width}` }}>
            <div class={variant}>
              <div class={`${view}_${variant}_icon`}>
                <tf-icons icon-name={icon}></tf-icons>
              </div>
              <div class={`${view}_${variant}_title`}>
                <tf-headline variant="h5">{title}</tf-headline>
              </div>
              <div class={`${view}_${variant}_subtitle`}>
                <tf-paragraph variant="p3">{subtitle}</tf-paragraph>
              </div>
              <div class={`${view}_${variant}_link`}>
                <slot></slot>
              </div>
            </div>
          </div>
        </tf-shadow-card>
      )
    );
  }

  getPersonInfo(title: string, position: string, variant: string, view: string) {
    return (
      <div class="personInfo">
        <div class={`${view}_${variant}_title`}>
          <tf-headline variant={view === 'reviews' ? 'h6' : 'h7'}>{title}</tf-headline>
        </div>
        <div class={`${view}_${variant}_position`}>
          <tf-headline variant="h7-medium">{position}</tf-headline>
        </div>
      </div>
    );
  }
  getReviewCard({ view, variant, title, subtitle, position, image }) {
    return (
      view === 'reviews' && (
        <tf-shadow-card variant="sh2" style={this.width && { width: `${this.width}` }}>
          <div class={`${view}_${variant}`} style={this.width && { width: `${this.width}` }}>
            <div class={variant}>
              <div class="row">
                <div class={`${variant}_image`}>
                  <tf-image imageName={image}></tf-image>
                </div>
                {variant === 'inside' && this.getPersonInfo(title, position, variant, view)}
              </div>

              <div class={`${variant}_subtitle`}>
                <tf-paragraph variant="p2">{subtitle}</tf-paragraph>
              </div>
              {variant === 'outside' && this.getPersonInfo(title, position, variant, view)}
            </div>
          </div>
        </tf-shadow-card>
      )
    );
  }
  getReviewMobileCard({ view, variant, title, subtitle, position, image }) {
    return (
      view === 'reviews_mob' && (
        <tf-shadow-card variant="sh2">
          <div class={view} style={this.width && { width: `${this.width}` }}>
            <div class={`${view}_${variant}`}>
              <div class="row">
                <div class={`${view}_${variant}_image`}>
                  <tf-image imageName={image}></tf-image>
                </div>
                {variant === 'inside' && this.getPersonInfo(title, position, variant, view)}
              </div>
              <div class={`${view}_${variant}_subtitle`}>
                <tf-paragraph variant="p3">{subtitle}</tf-paragraph>
              </div>
              {variant === 'outside' && this.getPersonInfo(title, position, variant, view)}
            </div>
          </div>
        </tf-shadow-card>
      )
    );
  }

  getBlogCard({ view, variant, title, subtitle, date, image }) {
    return (
      ( (view === 'blog' || view === 'blog_mob') && (
        <div class={view} style={this.width && { width: `${this.width}` }}>
          <div class={`${view}_${variant}`}>
            <div class={variant === 'right_text' || variant === 'without_description' || variant === 'no_img' ? 'blog_horizontal' : ''}>
              {variant !== 'no_img' && (
                <div class={`${variant}_image`}>
                  <tf-image imageName={image}></tf-image>
                </div>
              )}
              <div class={variant === 'right_text' || variant === 'without_description' || variant === 'no_img' ? `blog_content_${variant}` : ''}>
                <div class={`${variant}_date`}>
                  <tf-paragraph variant="p3">{date}</tf-paragraph>
                </div>

                <div class={`${variant}_title`}>
                  <tf-headline variant={variant === 'right_text' || variant === 'without_description' ? 'h6' : 'h4'}>{title}</tf-headline>
                </div>

                {variant !== 'without_description' && (
                  <div class={`${variant}_subtitle`}>
                    <tf-paragraph variant={view === 'blog_mob' ? 'p3' : 'p2'}>{subtitle}</tf-paragraph>
                  </div>
                )}
                <div class={`${variant}_link`}>
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    );
  }

  getSolutionCard({ view, variant, title, subtitle, icon, solutions }) {
    return (
      view === 'solution' && (
        <tf-shadow-card variant="sh2">
          <div class={view} style={this.width && { width: `${this.width}` }}>
            <div class={`${view}_${variant}`}>
              <div>
                {variant !== 'no_icon' && (
                  <div class={`${variant}_icon`}>
                    <tf-icons icon-name={icon}></tf-icons>
                  </div>
                )}

                <div class={`${variant}_title`}>
                  <tf-headline variant="h4">{title}</tf-headline>
                </div>
                {variant !== 'stretched' && (
                  <div class={`${variant}_solutions`}>
                    {solutions.map((solution: string) => (
                      <div class={`${variant}_solution`}>
                        <tf-icons style={{ padding: '0 5px' }} icon-name={variant === 'no_icon' ? 'icon_checkmark_blue' : 'icon_circle_blue'}></tf-icons>
                        <tf-paragraph variant="p2">{solution}</tf-paragraph>
                      </div>
                    ))}
                  </div>
                )}

                {variant === 'stretched' && (
                  <div class={`${variant}_subtitle`}>
                    <tf-paragraph variant="p2">{subtitle}</tf-paragraph>
                  </div>
                )}
                <div class={`${variant}_link`}>
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
        </tf-shadow-card>
      )
    );
  }
  getSolutionMobileCard({ view, variant, title, subtitle, icon, solutions }) {
    return (
      view === 'solution_mobile' && (
        <tf-shadow-card variant="sh2">
          <div class={view} style={this.width && { width: `${this.width}` }}>
            <div class={`${view}_${variant}`}>
              <div>
                {variant !== 'no_icon' && (
                  <div class={`${view}_${variant}_icon`}>
                    <tf-icons icon-name={icon}></tf-icons>
                  </div>
                )}

                <div class={`${view}_${variant}_title`}>
                  <tf-headline variant="h4">{title}</tf-headline>
                </div>
                {variant !== 'stretched' && (
                  <div class={`${view}_${variant}_solutions`}>
                    {solutions.map((solution: string) => (
                      <div class={`${view}_${variant}_solution`}>
                        <tf-icons style={{ padding: '0 5px' }} icon-name={variant === 'no_icon' ? 'icon_checkmark_blue' : 'icon_circle_blue'}></tf-icons>
                        <tf-paragraph variant="p2">{solution}</tf-paragraph>
                      </div>
                    ))}
                  </div>
                )}

                {variant === 'stretched' && (
                  <div class={`${view}_${variant}_subtitle`}>
                    <tf-paragraph variant="p2">{subtitle}</tf-paragraph>
                  </div>
                )}
                <div class={`${view}_${variant}_link`}>
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
        </tf-shadow-card>
      )
    );
  }

  getTeamCard({ view, variant, title, position, image }) {
    return (
      view === 'team' && (
        <tf-shadow-card variant="sh2">
          <div class={view} style={this.width && { width: `${this.width}` }}>
            <div class={`${view}_${variant}`}>
              <div class={`${variant}_image`}>
                <tf-image imageName={image}></tf-image>
              </div>
              <div class="team_row">
                <div class={`${view}_${variant}_person`}>
                  <div class={`${variant}_title`}>
                    <tf-headline variant="h5">{title}</tf-headline>
                  </div>

                  <div class={`${variant}_position`}>
                    <tf-headline variant="h7-medium">{position}</tf-headline>
                  </div>
                </div>
                {variant === 'icon_links' && (
                  <div class={`${variant}_link`}>
                    <slot></slot>
                  </div>
                )}
              </div>
            </div>
          </div>
        </tf-shadow-card>
      )
    );
  }
  getTeamMobileCard({ view, variant, title, position, image }) {
    return (
      view === 'team_mobile' && (
        <tf-shadow-card variant="sh2">
          <div class={view} style={this.width && { width: `${this.width}` }}>
            <div class={`${view}_${variant}`}>
              <div class={`${view}_${variant}_image`}>
                <tf-image imageName={image}></tf-image>
              </div>
              <div class="team_mobile_row">
                <div class={`${view}_${variant}_person`}>
                  <div class={`${view}_${variant}_title`}>
                    <tf-headline variant={variant === 'vertical' ? 'h7' : 'h6'}>{title}</tf-headline>
                  </div>

                  <div class={`${view}_${variant}_position`}>
                    <tf-paragraph variant="p3">{position}</tf-paragraph>
                  </div>
                </div>
                {variant === 'icon_links' && (
                  <div class={`${view}_${variant}_link`}>
                    <slot></slot>
                  </div>
                )}
              </div>
            </div>
          </div>
        </tf-shadow-card>
      )
    );
  }

  getPriceCard({ view, variant, title, solutions, cost }) {
    return (
      view === 'price' && (
        <tf-shadow-card variant="sh2" >
          <div class={`${view}_${variant}`} style={this.width && { width: `${this.width}` }}>
            {variant === 'desktop'  && (
              <div>
                <div class={`${variant}_title`}>
                  <tf-headline variant="h4">{title}</tf-headline>
                </div>
                <div class="cost_tab">
                  <div class={`${variant}_cost`}>
                    <tf-headline variant="h3">{`${cost}`}</tf-headline>
                  </div>
                </div>
                <div class={`${variant}_button`}>
                  <slot></slot>
                </div>
                {this.solution && (
                  <div class={`${variant}_solutions`}>
                    {solutions.map((solution: string) => (
                      <div class={`${variant}_solution`}>
                        <tf-icons icon-name="icon_checkmark_blue"></tf-icons>
                        <tf-paragraph variant="p2">{solution}</tf-paragraph>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {variant === 'mobile' && (
              <div>
                <div class={`${variant}_title`}>
                  <tf-headline variant="h6">{title}</tf-headline>
                </div>
                <div class="cost_tab">
                  <div class={`${variant}_cost`}>
                    <tf-headline variant="h3">{`${cost}`}</tf-headline>
                  </div>
                  <div class={`${variant}_tab`}>
                    <tf-tab variant="small"></tf-tab>
                  </div>
                </div>
                <div class={`${variant}_button`}>
                  <slot></slot>
                </div>
                {variant === 'mobile' && (
                  <div class={`${variant}_solutions`}>
                    {solutions.map((solution: string) => (
                      <div class={`${variant}_solution`}>
                        <tf-icons icon-name="icon_checkmark_blue"></tf-icons>
                        <tf-paragraph variant="p2">{solution}</tf-paragraph>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </tf-shadow-card>
      )
    );
  }

  getVariantCard(view: string) {
    switch (view) {
      case 'services':
        return this.getServiceCard(this);
      case 'services_mobile':
        return this.getServiceMobileCard(this);
      case 'reviews':
        return this.getReviewCard(this);
      case 'reviews_mob':
        return this.getReviewMobileCard(this);
      case 'blog':
        return this.getBlogCard(this);
      case 'solution':
        return this.getSolutionCard(this);
      case 'solution_mobile':
        return this.getSolutionMobileCard(this);
      case 'team':
        return this.getTeamCard(this);
      case 'team_mobile':
        return this.getTeamMobileCard(this);
      case 'price':
        return this.getPriceCard(this);
      default:
        return;
    }
  }

  render() {
    if (this.solutions === undefined) {
      this.solutions = ['Unlimited team members', 'Individual support', 'Unlimited Individual data', 'Advanced permissions', 'Data history', 'Audit log', 'All functions included'];
    }
    return this.getVariantCard(this.view);
  }
}
