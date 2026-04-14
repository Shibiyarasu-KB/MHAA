
interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="w-full px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo1.jpg" alt="MHAA Logo" className="w-9 h-9 object-contain rounded-full" />
            <span className="text-sm font-black text-gray-900 tracking-tight uppercase">MHAA Directory</span>
          </div>


        </div>
      </div>
    </header>
  );
}
