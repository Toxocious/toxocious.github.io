export const formatDate = (timestamp: number) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'America/Los_Angeles',
  }).format(new Date(timestamp));
};
