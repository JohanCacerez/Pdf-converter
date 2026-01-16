import Sidebar from "../../organisms/Sidebar";

export default function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "240px" }}>
        <Sidebar />
      </aside>

      <main style={{ flex: 1 }}>{/* contenido */}</main>
    </div>
  );
}
