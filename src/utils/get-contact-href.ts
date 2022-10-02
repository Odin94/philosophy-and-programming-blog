const getContactHref = (name: string, contact: string) => {
  const hrefs: { [key: string]: string } = {
    github: `https://github.com/${contact}`,
  };

  return hrefs[name] ?? contact;
};

export default getContactHref;
