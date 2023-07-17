import { PageConfiguration } from '@/types/page.config';

export const pages: PageConfiguration[] = [
  {
    title: 'Wireless Plans',
    order: 1,
    parentFormId: 'wireless-plans',
    collapsibleHeading: 'Home Wifi Router 1',
    collapsibleSideHeading: '$89.99',
    sections: [
      {
        subheading: 'Wireless Options',
        id: 'wireless-options',
        subgroups: [
          {
            maxWidth: '90%',
            interactables: [
              {
                kind: 'badge-selection',
                props: {
                  heading: 'Upload Speed',
                  headingClassNames: ['body-normal-200', 'color-shade-900'],
                  active: '100GB',
                  items: [
                    {
                      children: '100GB',
                      key: '100GB',
                      withIcon: true,
                      scale: 100,
                    },
                    {
                      children: '200GB',
                      key: '200GB',
                      withIcon: true,
                      scale: 100,
                    },
                    {
                      children: '500GB',
                      key: '500GB',
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
                  label: 'Service Plan',
                  active: 'accept',
                  items: [
                    {
                      key: 'accept',
                      label: 'Add Service Plan Upgrade',
                      value: 'accept',
                    },
                    {
                      key: 'decline',
                      label: 'Decline Service Plan Upgrade',
                      value: 'decline',
                    },
                  ],
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
