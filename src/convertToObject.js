'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const lines = sourceString.split(';');

  for (let line of lines) {
    line = line.trim();

    if (!line) {
      continue;
    }

    const [key, value] = line.split(':');

    if (!key || value === undefined) {
      continue;
    }

    const cleanKey = key.trim();
    const cleanValue = value.trim();

    result[cleanKey] = cleanValue;
  }

  return result;
}

module.exports = convertToObject;
