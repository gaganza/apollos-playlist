export const millisecondsToViewableFormat = (input: number): string => {
  let totalHours,
    totalMinutes,
    totalSeconds,
    hours,
    minutes,
    seconds,
    result = '';

  totalSeconds = input / 1000;
  totalMinutes = totalSeconds / 60;
  totalHours = totalMinutes / 60;

  seconds = Math.floor(totalSeconds) % 60;
  minutes = Math.floor(totalMinutes) % 60;
  hours = Math.floor(totalHours) % 60;

  if (hours !== 0) {
    result += hours + ':';

    if (minutes.toString().length === 1) {
      minutes = '0' + minutes;
    }
  }

  result += minutes + ':';

  if (seconds.toString().length === 1) {
    seconds = '0' + seconds;
  }

  result += seconds;

  return result;
};
