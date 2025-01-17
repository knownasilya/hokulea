import { hbs } from 'ember-cli-htmlbars';

import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Buttons/Accent',
  parameters: {
    options: {
      showPanel: true,
      isToolshown: true
    }
  }
};

export const Default = () => ({
  template: hbs`
      <AccentButton {{on "click" (fn this.invoke)}}>Accent Button</AccentButton>
      <AccentButton disabled={{true}}>Disabled Accent Button</AccentButton>
    `,
  context: {
    invoke: action('button invoked')
  }
});

Default.story = {
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Fq29S0hD3i38bAjYz3wWwy/Components?node-id=404%3A152'
    }
  }
};

export const Accessibility = () => ({
  template: hbs`
      <AccentButton aria-label="Go Tomster!">
        <span aria-hidden="true">🐹</span>
      </AccentButton>
    `
});

Accessibility.story = {
  name: 'A11y'
};

export const Sizing = () => ({
  template: hbs`
      <AccentButton {{style fontSize="80%"}}>80% Font Size</AccentButton>
      <AccentButton>Normal</AccentButton>
      <AccentButton {{style fontSize="120%"}}>120% Font Size</AccentButton>
      <AccentButton {{style fontSize="150%"}}>150% Font Size</AccentButton>
    `
});

export const Builder = () => ({
  template: hbs`
    <AccentButton {{on "click" (fn this.invoke)}} as |b|>
      <b.Prefix>Prefix</b.Prefix>
      <b.Prefix>Prefix</b.Prefix>
      <b.Affix>affix</b.Affix>
      <b.Affix>affix</b.Affix>
      <b.Content>Accent Button</b.Content>
      <b.Affix>affix</b.Affix>
      <b.Affix>affix</b.Affix>
      <b.Suffix>Suffix</b.Suffix>
      <b.Suffix>Suffix</b.Suffix>
    </AccentButton>

    <AccentButton disabled={{true}} as |b|>
      <b.Prefix>Prefix</b.Prefix>
      <b.Prefix>Prefix</b.Prefix>
      <b.Affix>affix</b.Affix>
      <b.Affix>affix</b.Affix>
      <b.Content>Disabled</b.Content>
      <b.Affix>affix</b.Affix>
      <b.Affix>affix</b.Affix>
      <b.Suffix>Suffix</b.Suffix>
      <b.Suffix>Suffix</b.Suffix>
    </AccentButton>
    `,
  context: {
    invoke: action('button invoked')
  }
});
