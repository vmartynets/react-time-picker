import { ClockProps } from "react-clock";

declare module "react-time-picker" {
  type Detail = "hour" | "minute" | "second";

  export default function TimePicker(props: TimePickerProps): React.Component;

  export interface TimePickerProps extends ClockProps {
    amPmAriaLabel?: string;
    calendarClassName?: string | string[];
    calendarIcon?: React.ReactElement;
    className?: string | string[];
    clearAriaLabel?: string;
    clearIcon?: React.ReactElement;
    clockAriaLabel?: string;
    disabled?: boolean;
    format?: string;
    hourAriaLabel?: string;
    isOpen?: boolean;
    maxDetail?: Detail
    minuteAriaLabel?: string;
    name?: string;
    nativeInputAriaLabel?: string;
    required?: boolean;
    secondAriaLabel?: string;
    showLeadingZeros?: boolean;
  }
}
