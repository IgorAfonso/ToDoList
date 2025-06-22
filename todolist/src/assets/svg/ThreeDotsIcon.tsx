import { SvgProps } from "@/types/SvgPropsInterface";

export default function ThreeDotsSVG(props: SvgProps) {
  return (
    <svg
      fill="#000000"
      height={props.height}
      width={props.width}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        className="cls-1"
        d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z"
      />
    </svg>
  );
}
