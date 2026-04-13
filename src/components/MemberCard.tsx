import { Phone, MapPin, Hash } from 'lucide-react';
import { Member } from '../types';
import { getAvatarColors, getInitials } from '../utils/avatar';

interface MemberCardProps {
  member: Member;
  query: string;
}

function highlight(text: string | null | undefined, query: string): React.ReactNode {
  if (!text) return '';
  const strText = String(text);
  if (!query.trim()) return strText;
  const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = strText.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 text-yellow-900 rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function MemberCard({ member, query }: MemberCardProps) {
  const safeName = member.name || 'Unknown';
  const { bg, text } = getAvatarColors(safeName);
  const initials = getInitials(safeName);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="flex items-start gap-4 p-5">
        {member.image ? (
          <img
            src={`/images/${member.image}`}
            alt={safeName}
            className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border border-gray-100 shadow-sm"
          />
        ) : (
          <div
            className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center text-xl font-bold select-none"
            style={{ backgroundColor: bg, color: text }}
          >
            {initials}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 leading-tight mb-1 truncate">
            {highlight(safeName, query)}
          </h3>

          <div className="flex items-center gap-1.5 text-sm text-blue-600 font-medium mb-3">
            <Hash className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{highlight(member.enrollmentNo || '', query)}</span>
          </div>

          <div className="space-y-1.5">
            {member.phone && String(member.phone).toLowerCase() !== 'none' && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                <span className="truncate">{member.phone}</span>
              </div>
            )}
            {member.address && (
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gray-400 mt-0.5" />
                <span className="line-clamp-2 leading-snug">{member.address}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
