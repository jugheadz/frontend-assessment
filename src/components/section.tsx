import clsx from "clsx";

const Section = ({
  classNames,
  children,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <section className={clsx(classNames && classNames)}>{children}</section>
  );
};

export default Section;
