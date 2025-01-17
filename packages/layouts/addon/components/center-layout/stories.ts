import { hbs } from 'ember-cli-htmlbars';

import { boolean, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/Layouts/Center',
  parameters: {
    options: {
      showPanel: true,
      isToolshown: true
    }
  }
};

export const Default = () => ({
  template: hbs`
      <CenterLayout @intrinsic={{this.intrinsic}} @text={{this.text}}>
        <p>Hello text</p>
      </CenterLayout>`,
  context: {
    get intrinsic() {
      return boolean('intrinsic', false);
    },

    get text() {
      return boolean('text', false);
    }
  }
});

Default.story = {
  decorators: [withKnobs]
};
