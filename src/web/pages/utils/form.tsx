import { Interactable } from '@/types/interactable';
import { SectionConfiguration } from '@/types/section.config';
import { SubGroup } from '@/types/subgroup';
import { BadgeSelection } from '@/web/components/BadgeSelection/BadgeSelection';
import { ColorPicker } from '@/web/components/ColorPicker/ColorPicker';
import { Divider } from '@/web/components/Divider';
import { Input } from '@/web/components/Input/Input';
import { RadioButtonGroup } from '@/web/components/RadioButtonGroup/RadioButtonGroup';
import { RadioButtonTable } from '@/web/components/RadioButtonTable/RadioButtonTable';
import { Select } from '@/web/components/SelectInput/SelectInput';
import classNames from 'classnames';
import React, { ComponentType } from 'react';

const InteractableElementDictionary: Record<Interactable['kind'], ComponentType<any>> = {
  'badge-selection': BadgeSelection,
  'color-picker-interactable': ColorPicker,
  'input-interactable': Input,
  'radio-button-group-interactable': RadioButtonGroup,
  'select-interactable': Select,
  'radio-table': RadioButtonTable,
};

function mapSubgroupsToJsx(subgroup: SubGroup) {
  const { interactables, height, maxWidth } = subgroup;
  return (
    <div className="interactable-subgroup" style={{ height, maxWidth }}>
      {interactables.map((formGrp) => {
        const { kind, props } = formGrp;
        const Component = InteractableElementDictionary[kind];
        return <Component {...props} />;
      })}
    </div>
  );
}

function buildSection(section: SectionConfiguration) {
  const { id, subgroups, subheading, subtext } = section;
  const joinedClassNames = {
    section: 'form-subsection',
    heading: classNames('heading-200', 'section-heading'),
    subtext: classNames('body-normal-100', 'color-scale-400', 'mt-200'),
  };
  return (
    <React.Fragment>
      <div className={joinedClassNames.section} id={id}>
        {subheading && <h1 className={joinedClassNames.heading}>{subheading}</h1>}
        {subtext && <p className={joinedClassNames.subtext}>{subtext}</p>}
        {subgroups.map(mapSubgroupsToJsx)}
      </div>
      <Divider />
    </React.Fragment>
  );
}

export function translateSectionsJsx(sections: SectionConfiguration[]) {
  let formJsxArray = [];
  for (const section of sections) {
    formJsxArray.push(buildSection(section));
  }
  return formJsxArray;
}
