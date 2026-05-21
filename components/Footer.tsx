export default function Footer() {
  return (
    <footer className="py-8 px-6 mt-4 border-t border-p-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-p-sub">
          Designed &amp; built by{" "}
          <span className="font-semibold" style={{ color: "var(--accent)" }}>Charles Lai</span>
        </p>
        <p className="text-xs text-p-sub">MIT Class of 2029 · Cambridge, MA</p>
      </div>
    </footer>
  );
}
