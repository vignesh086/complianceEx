import { type SVGProps } from "react";

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      stroke="currentColor"
      className="h-6 w-6"
      {...props}
    />
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75 5.25 6v5.25c0 4.5 3 7.5 6.75 9 3.75-1.5 6.75-4.5 6.75-9V6L12 3.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 1.75 1.75L14.75 10" />
    </Icon>
  );
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75h6M9 15.75h4.5M9 9.75h6M6.75 3.75h7.19a1.5 1.5 0 0 1 1.06.44l3.31 3.31a1.5 1.5 0 0 1 .44 1.06v11.19a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5Z"
      />
    </Icon>
  );
}

export function RadarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path strokeLinecap="round" d="M12 12 19.5 7.5" />
      <path strokeLinecap="round" d="M12 3.75a8.25 8.25 0 1 1-8.25 8.25" />
      <path strokeLinecap="round" d="M12 7.5a4.5 4.5 0 1 1-4.5 4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function GraduationCapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 9.75 7.5-3.75 7.5 3.75-7.5 3.75-7.5-3.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 11.5v4.15c0 .9 2.02 2.85 4.5 2.85s4.5-1.95 4.5-2.85V11.5" />
    </Icon>
  );
}

export function ChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5h15" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 16.5v-4.5M12 16.5v-8M16.5 16.5v-6" />
    </Icon>
  );
}

export function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.85 23.85 0 0 0 5.454-1.31A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.312 6.022 23.85 23.85 0 0 0 5.454 1.31m5.715 0a24.25 24.25 0 0 1-5.715 0m5.715 0a3 3 0 1 1-5.715 0"
      />
    </Icon>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </Icon>
  );
}
