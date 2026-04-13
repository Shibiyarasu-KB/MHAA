export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-gray-400">Member Directory</p>
        <p className="text-xs text-gray-300">{new Date().getFullYear()} &mdash; All rights reserved</p>
      </div>
    </footer>
  );
}
