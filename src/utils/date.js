// Convert a unix timestamp to a formatted date according to options and current locale
function formatDate(timestamp, options = undefined) {
  return new Date(timestamp * 1000).toLocaleDateString(undefined, options);
}

// Convert a unix timestamp to a formatted time according to options and current locale
function formatTime(timestamp, options = undefined) {
  return new Date(timestamp * 1000).toLocaleTimeString(undefined, options);
}

export { formatDate, formatTime };
