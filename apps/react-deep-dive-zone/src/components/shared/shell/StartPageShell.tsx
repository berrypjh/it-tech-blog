type Props = { children: React.ReactNode };

export const StartPageShell = ({ children }: Props) => (
  <article className="mx-auto w-full max-w-[1200px] px-lg sm:px-xl lg:px-2xl py-xl lg:py-2xl">
    <div className="flex flex-col gap-2xl lg:gap-3xl">{children}</div>
  </article>
);
