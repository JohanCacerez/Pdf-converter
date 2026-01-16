import Title from "../atoms/Title";
import IconButtonLink from "../molecules/IconButtonLink";

export default function Sidebar() {
  const action = () => {
    console.log("hello");
  };

  return (
    <section>
      <Title title="Pdf converter" />

      <IconButtonLink text="Convertir" icon="Trick" onClick={action} />

      <IconButtonLink text="Archivos" icon="Folder" onClick={action} />
    </section>
  );
}
