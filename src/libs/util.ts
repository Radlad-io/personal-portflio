const slugify = (input: string) => {
  return input.replace(/\s+/g, "_").toLowerCase();
};

export default slugify;
