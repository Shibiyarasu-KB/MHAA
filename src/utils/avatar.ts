const COLORS = [
  ['#1e40af', '#dbeafe'],
  ['#065f46', '#d1fae5'],
  ['#92400e', '#fef3c7'],
  ['#9f1239', '#ffe4e6'],
  ['#1e3a5f', '#e0f2fe'],
  ['#4c1d95', '#ede9fe'],
  ['#0f766e', '#ccfbf1'],
  ['#7c2d12', '#ffedd5'],
  ['#1d4ed8', '#bfdbfe'],
  ['#166534', '#dcfce7'],
];

export function getAvatarColors(name: string): { bg: string; text: string } {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % COLORS.length;
  return { bg: COLORS[index][1], text: COLORS[index][0] };
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}
