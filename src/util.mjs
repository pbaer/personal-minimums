export const oneHourInMs = 60 * 60 * 1000;
export const oneDayInMs = 24 * oneHourInMs;
export const oneYearInMs = 365 * oneDayInMs;

export const toPaddedString = (number, length) => {
    return String(number).padStart(length, '0');
};
