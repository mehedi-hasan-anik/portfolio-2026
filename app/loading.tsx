export default function Loading() {
  return (
    <div className="min-h-[100svh] flex items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Loading
        </span>
      </div>
    </div>
  );
}
