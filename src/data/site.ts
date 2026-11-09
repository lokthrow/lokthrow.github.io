type Link = { label: string, href: string };

type Site = {
  name: string;
  role: string;
  email: string;
  links: Link[];
};

export const site: Site = {
  name: 'Alejandro Muñoz',
  role: 'Desarrollador de apps con React Native',
  email: 'hola@mirabolsa.es',
  links: [],
};
