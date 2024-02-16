import type { NavigationProps } from '@molecules/Navigation/Navigation.types';

export const navigation: NavigationProps = {
  links: [
    {
      url: '#about-me',
      ariaLabel: 'go to about me section',
      label: 'about me',
      openInNewTab: false,
    },
    {
      url: '#experience',
      ariaLabel: 'go to experience section',
      label: 'experience',
      openInNewTab: false,
    },
    {
      url: '#tech',
      ariaLabel: 'go to tech section',
      label: 'tech',
      openInNewTab: false,
    },
    {
      url: '#no-tech',
      ariaLabel: 'go to no-tech section',
      label: 'no-tech',
      openInNewTab: false,
    },
    {
      url: '#projects',
      ariaLabel: 'go to projects section',
      label: 'projects',
      openInNewTab: false,
    },
    {
      url: '#hobbies',
      ariaLabel: 'go to hobbies section',
      label: 'hobbies',
      openInNewTab: false,
    },
    {
      url: '#contact',
      ariaLabel: 'go to contact section',
      label: 'contact',
      openInNewTab: false,
    },
  ],
};
