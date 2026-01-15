import Title from "../atoms/Title";
import Button from "../atoms/Button";

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
        <Button onClick={action}>Hello</Button>
      </div>
    </section>
  );
}
