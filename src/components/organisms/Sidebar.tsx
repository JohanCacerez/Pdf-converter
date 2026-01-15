import Title from "../atoms/Title";
import IconButtonLink from "../molecules/IconButtonLink";

export default function Sidebar() {
  const action = () => {
    console.log("hello");
  };

  return (
    <section>
      <div>
        <Title title="Pdf converter" />
      </div>
      <div>
        <IconButtonLink text="Inicio" icon="House" onClick={action} />
      </div>
    </section>
  );
}
