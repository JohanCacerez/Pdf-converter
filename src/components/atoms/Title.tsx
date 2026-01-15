type titleprops = {
  title: string;
};

export default function Title({ title }: titleprops) {
  return (
    <div className="m-4">
      <h1 className=" text-2xl font-bold uppercase">{title}</h1>
    </div>
  );
}
