import { PageConfiguration } from '@/types/page.config';

export const pages: PageConfiguration[] = [
  {
    title: 'Mobile Plans',
    order: 1,
    parentFormId: 'mobile-plans',
    collapsibleHeading: 'Mobile Line 1',
    collapsibleSideHeading: '$39.99',
    sections: [
      {
        id: 'plan-options',
        subgroups: [
          {
            maxWidth: '100%',
            interactables: [
              {
                kind: 'badge-selection',
                props: {
                  heading: 'Plan Options',
                  headingClassNames: ['body-bold-300', 'color-shade-900'],
                  active: 'basic',
                  items: [
                    {
                      withIcon: true,
                      key: 'basic',
                      children: 'Basic',
                      scale: 100,
                    },
                    {
                      withIcon: true,
                      key: 'standard',
                      children: 'Standard',
                      scale: 100,
                    },
                    {
                      withIcon: true,
                      key: 'deluxe',
                      children: 'Deluxe',
                      scale: 100,
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        subheading: 'Device Options',
        id: 'device-options',
        subgroups: [
          {
            maxWidth: '100%',
            interactables: [
              {
                kind: 'select-interactable',
                props: {
                  required: true,
                  label: 'Select Manufacturer',
                  active: 'Apple',
                  items: [
                    {
                      key: 'Apple',
                      text: 'Apple',
                      value: 'Apple',
                    },
                    {
                      key: 'Android',
                      text: 'Android',
                      value: 'Android',
                    },
                    {
                      key: 'Google',
                      text: 'Google',
                      value: 'Google',
                    },
                    {
                      key: 'Samsung',
                      text: 'Samsung',
                      value: 'Samsung',
                    },
                    {
                      key: 'Linux',
                      text: 'Linux',
                      value: 'Linux',
                    },
                  ],
                },
              },
              {
                kind: 'select-interactable',
                props: {
                  required: true,
                  label: 'Select Model Phone',
                  active: 'iPhone 13 Max',
                  items: [
                    {
                      key: 'iPhone 13 Max',
                      text: 'iPhone 13 Max',
                      value: 'iPhone 13 Max',
                    },
                    {
                      key: 'iPhone 13 Pro',
                      text: 'iPhone 13 Pro',
                      value: 'iPhone 13 Pro',
                    },
                    {
                      key: 'Samsung Z Flip',
                      text: 'Samsung Z Flip',
                      value: 'Samsung Z Flip',
                    },
                    {
                      key: 'Ubuntu Linux F7',
                      text: 'Ubuntu Linux F7',
                      value: 'Ubuntu Linux F7',
                    },
                    {
                      key: 'Android',
                      text: 'Android',
                      value: 'Android',
                    },
                  ],
                },
              },
              {
                kind: 'color-picker-interactable',
                props: {
                  label: 'Color ',
                  items: [
                    {
                      color: {
                        name: 'Red',
                        hex: '#ee0000',
                      },
                      key: 'red',
                    },
                    {
                      color: {
                        name: 'Black',
                        hex: '#000000',
                      },
                      key: 'black',
                    },
                    {
                      color: {
                        hex: '#17e157',
                        name: 'Green',
                      },
                      key: 'green',
                    },
                    {
                      color: {
                        name: 'Purple',
                        hex: '#e608e2',
                      },
                      key: 'purple',
                    },
                  ],
                },
              },
            ],
          },
          {
            maxWidth: '90%',
            interactables: [
              {
                kind: 'badge-selection',
                props: {
                  heading: 'Storage',
                  headingClassNames: ['body-normal-200', 'color-shade-900'],
                  active: '128GB',
                  items: [
                    {
                      children: '128GB',
                      key: '128GB',
                      withIcon: true,
                      scale: 100,
                    },
                    {
                      children: '256GB',
                      key: '256GB',
                      withIcon: true,
                      scale: 100,
                    },
                    {
                      children: '512GB',
                      key: '512GB',
                      withIcon: true,
                      scale: 100,
                    },
                    {
                      children: '1TB',
                      key: '1TB',
                      withIcon: true,
                      scale: 100,
                    },
                  ],
                },
              },
              {
                kind: 'badge-selection',
                props: {
                  heading: 'Payment Options',
                  headingClassNames: ['body-normal-200', 'color-shade-900'],
                  active: 'pay',
                  items: [
                    {
                      children: 'Pay In Full',
                      key: 'pay',
                      withIcon: true,
                      scale: 100,
                    },
                    {
                      children: 'Installments',
                      key: 'installments',
                      withIcon: true,
                      scale: 100,
                    },
                  ],
                },
              },
            ],
          },
          {
            interactables: [
              {
                kind: 'radio-button-group-interactable',
                props: {
                  label: 'Protection Plan',
                  active: 'accept',
                  items: [
                    {
                      key: 'accept',
                      label: 'Add Protection Plan',
                      value: 'accept',
                    },
                    {
                      key: 'decline',
                      label: 'Decline Protection Plan',
                      value: 'decline',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: 'trade-in-options',
        subheading: 'Trade In Options *',
        subgroups: [
          {
            interactables: [
              {
                kind: 'select-interactable',
                props: {
                  label: 'Carrier',
                  required: true,
                  active: 'verizon',
                  items: [
                    {
                      key: 'verizon',
                      text: 'Verizon',
                      value: 'verizon',
                    },
                    {
                      key: 'gv',
                      text: 'Google Voice',
                      value: 'gv',
                    },
                    {
                      key: 'att',
                      text: 'AT&T',
                      value: 'att',
                    },
                    {
                      key: 'spr',
                      text: 'Sprint',
                      value: 'spr',
                    },
                  ],
                },
              },
              {
                kind: 'input-interactable',
                props: {
                  label: 'EMEI Number *',
                  placeholder: 'Enter EMEI Number',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'device-condition',
        subgroups: [
          {
            maxWidth: '100%',
            interactables: [
              {
                kind: 'radio-table',
                props: {
                  items: [
                    {
                      width: '100%',
                      label: 'Is the device free of major physical damage?',
                      items: [
                        {
                          key: 'yes',
                          label: 'Yes',
                          value: 'yes',
                        },
                        {
                          key: 'no',
                          label: 'No',
                          value: 'no',
                        },
                      ],
                    },
                    {
                      width: '100%',
                      label: 'Does the device have a functional screen?',
                      items: [
                        {
                          key: 'yes',
                          label: 'Yes',
                          value: 'yes',
                        },
                        {
                          key: 'no',
                          label: 'No',
                          value: 'no',
                        },
                      ],
                    },
                    {
                      width: '100%',
                      label: 'Does the device power on?',
                      items: [
                        {
                          key: 'yes',
                          label: 'Yes',
                          value: 'yes',
                        },
                        {
                          key: 'no',
                          label: 'No',
                          value: 'no',
                        },
                      ],
                    },
                  ],
                  title: 'Device Condition Questions',
                },
              },
            ],
          },
        ],
      },
    ],
    footer: {
      duplicateFormText: 'Add Another Line',
      links: [
        {
          href: '#',
          scale: 200,
          target: '_self',
          children: 'Check Trade-In',
        },
        {
          href: '#',
          scale: 200,
          target: '_self',
          children: 'Send EMEI Instructions',
        },
      ],
    },
  },
];
