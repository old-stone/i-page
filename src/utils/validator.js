export const validateUrl = url =>
  /https?:\/\/(www\.)?(?:localhost|[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*))/g.test(
    url
  );
