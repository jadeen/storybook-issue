import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { TestComponent } from 'test';

const meta: Meta<TestComponent> = {
  title: 'Button',
  component: TestComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
  ],
  argTypes: {
    placeholder: { control: 'text' },
  }
};

export default meta;

type Story = StoryObj<TestComponent>;

export const Primary: Story = {
  render: () => ({
    props: {
      placeholder: 'Test'
    },
  }),
};