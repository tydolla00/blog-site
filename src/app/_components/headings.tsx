const H1 = ({ id, text }: HeaderProps) => (
  <h1 className="text-3xl font-bold text-white" id={id}>
    {text}
  </h1>
);
const H2 = ({ id, text }: HeaderProps) => (
  <h2 className="text-2xl font-semibold text-white" id={id}>
    {text}
  </h2>
);
const H3 = ({ id, text }: HeaderProps) => (
  <h3 className="text-xl font-bold text-white" id={id}>
    {text}
  </h3>
);
const H4 = ({ id, text }: HeaderProps) => (
  <h4 className="text-white" id={id}>
    {text}
  </h4>
);
const H5 = ({ id, text }: HeaderProps) => (
  <h5 className="" id={id}>
    {text}
  </h5>
);
const H6 = ({ id, text }: HeaderProps) => (
  <h6 className="" id={id}>
    {text}
  </h6>
);
export const Header = { H1, H2, H3, H4, H5, H6 };

type HeaderProps = { id?: string; text: string };
