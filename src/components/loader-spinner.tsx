export function LoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-t-transparent border-b-transparent border-r-transparent border-primary rounded-full animate-spin"></div>
    </div>
  );
}
