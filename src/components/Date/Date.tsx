import { Timestamp } from 'firebase/firestore';
import { DateTime, DateTimeFormatOptions } from 'luxon';

type DateProps = {
  timestamp: Timestamp;
  format?: DateTimeFormatOptions;
};

export function Date({ timestamp, format = DateTime.DATE_SHORT }: DateProps) {
  const finalDate = DateTime.fromSeconds(timestamp.seconds, {
    locale: 'en',
  }).toLocaleString(format);

  return <>{finalDate}</>;
}
