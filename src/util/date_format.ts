export const formatDate = (date: Date) => {
  return new Date(date).toDateString().split(' ').splice(1).join(' ');
};
