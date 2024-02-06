const Section = ({ isPrimary, isScreenHeight, children }) => {
  return (
    <section
      className={`${isScreenHeight && "h-screen"} ${isPrimary ? "bg-primary" : "bg-secondary"} relative py-8 sm:py-10`}
    >
      <div className="mx-auto flex w-10/12 max-w-[1400px] flex-col gap-3 md:gap-5">
        {children}
      </div>
    </section>
  );
};

export default Section;
