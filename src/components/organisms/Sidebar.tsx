import Title from "../atoms/Title";
import IconButtonLink from "../molecules/IconButtonLink";

import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <section>
      <Title title="Pdf converter" />

      <IconButtonLink
        text="Convertir"
        icon="Trick"
        onClick={() => navigate("/")}
      />

      <IconButtonLink
        text="Archivos"
        icon="Folder"
        onClick={() => navigate("/documents")}
      />

      <IconButtonLink
        text="Archivos"
        icon="Settings"
        onClick={() => navigate("/settings")}
      />
    </section>
  );
}
