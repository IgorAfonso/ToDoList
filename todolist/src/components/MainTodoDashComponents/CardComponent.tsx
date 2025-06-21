import { CardContent } from "@/types/CardComponent";

export default function CardComponent(props: CardContent) {
  return (
    <div
      className="bg-white flex flex-col rounded-sm p-4"
      onClick={props.teste}
    >
      <h2 className="py-2">{props.title}</h2>
      <p className="text-[50%]">{props.content}</p>
    </div>
  );
}
