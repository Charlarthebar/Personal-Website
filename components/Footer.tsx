export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-bg-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-text-muted text-sm font-mono">
          Designed &amp; built by{" "}
          <span className="text-accent-blue font-semibold">Charles Lai</span>
        </p>
        <p className="text-text-muted text-xs">
          MIT Class of 2029 &nbsp;·&nbsp; Cambridge, MA
        </p>
      </div>
    </footer>
  );
}
