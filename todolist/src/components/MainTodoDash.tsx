import ColumnHeader from "./MainTodoDashComponents/MainTodoDashColumnHeader";
import ColumComponent from "./MainTodoDashComponents/MainTodoDashColumns";
import MainTodoDashHeader from "./MainTodoDashComponents/MainTodoDashHeader";

export default function MainTodoDash() {
  const columnsNames = [
    {
      id: 0,
      title: "Não iniciado",
    },
    {
      id: 1,
      title: "Em Progresso",
    },
    {
      id: 2,
      title: "Completo",
    },
  ];

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-row w-full h-[10%]">
        <MainTodoDashHeader />
      </div>
      <div className="flex flex-row justify-between w-full">
        {columnsNames.map((column) => (
          <div
            key={column.id}
            className="w-full h-full mx-1 flex flex-col items-center gap-2"
          >
            <ColumnHeader key={column.id} id={column.id} text={column.title} />
            <ColumComponent key={column.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
