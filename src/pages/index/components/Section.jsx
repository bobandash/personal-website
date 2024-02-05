const Section = ({ isPrimary, isScreenHeight, children }) => {
  return (
    <section
      className={`${isScreenHeight && "min-h-screen"} ${isPrimary ? "bg-primary" : "bg-secondary"} relative py-8 sm:py-10`}
    >
      <div className="mx-auto flex w-10/12 max-w-[1200px] flex-col gap-2 sm:gap-4 lg:gap-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
