import Title from "../atoms/Title";
import IconButton from "../molecules/IconButton";

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
        <IconButton text="Convetir" icon="PDF" onClick={action} />
      </div>
    </section>
  );
}
