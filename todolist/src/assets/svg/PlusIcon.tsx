import { SvgProps } from "@/types/SvgPropsInterface";

export default function PlusSignalSvg(props: SvgProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_429_10970)">
        <circle
          cx="12"
          cy="11.999"
          r="9"
          stroke="#FFFFFF"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 9V15"
          stroke="#FFFFFF"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 12H15"
          stroke="#FFFFFF"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_10970">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
