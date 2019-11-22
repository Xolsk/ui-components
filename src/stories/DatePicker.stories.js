import React from 'react';
import { storiesOf } from '@storybook/react';

import DatePicker from 'components/DatePicker';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Theme from 'components/Theme';

const period = [
  { value: 'custom', label: 'Custom' },
  { value: 'today', label: 'Today' },
  { value: 'yesterday', label: 'Yesterday' },
  { value: 'last_7_days', label: 'Last 7 days' },
  { value: 'last_28_days', label: 'Last 28 days' },
  { value: 'current_month', label: 'So far this month' },
  { value: 'last_month', label: 'Last month' },
  { value: 'year_to_date', label: 'So far this year' },
  { value: 'previous_year', label: 'Previous year' },
];

storiesOf('DatePicker', module)
  .addParameters({
    jest: ['DatePicker'],
  })
  .add('basic', () => (
    <Theme>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full"></Cell>
        <Cell medium={12} large={12}>
          <DatePicker />
        </Cell>
      </Grid>
    </Theme>
  ))
  .add('with selector', () => (
    <Theme>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full"></Cell>
        <Cell medium={12} large={12}>
          <DatePicker
            periodOptions={period}
            periodDefault={{ value: 'last_7_days', label: 'Last 7 days' }}
          />
        </Cell>
      </Grid>
    </Theme>
  ));
