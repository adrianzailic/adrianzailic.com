import { parseISO, format } from 'date-fns'
import { useState, useEffect } from 'react';

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(format(parseISO(dateString), 'LLLL	d, yyyy'));
  }, []);
  
  return <time dateTime={dateString}>{date}</time>
}

export default DateFormatter
