import React, { memo, useMemo } from 'react';
import { withRenderMetrics } from '../components/RenderMetric';
import classNames from 'classnames';
import { SectionConfiguration } from '@/models/section';

type PageConfiguration = {
  order: number;
  parentFormId: string;
  sections: SectionConfiguration[];
}

type DynamicFormProps = {
  title: string;
  collapsible?: boolean;
  allowClearForm?: boolean;
  pages: PageConfiguration[];
  
};

function DynamicForm(props: DynamicFormProps) {
  const joinedClassNames = useMemo(() => ({
    formContainer: classNames('form-container'),
    heading: classNames('form-heading', 'heading-400'),
    formBody: classNames('form-body')
  }), [])
  return (
    <form className={joinedClassNames.formContainer}>
      <h1 className={joinedClassNames.heading}>{props.title}</h1>
      <section className={joinedClassNames.formBody}>

      </section>
    </form>
  );
}

export const FormView = withRenderMetrics(memo(DynamicForm), 'FormView');
