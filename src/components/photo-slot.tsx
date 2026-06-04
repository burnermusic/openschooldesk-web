import React from 'react';

// CSS-gradient scene placeholders. Replace with real photography later.

function SceneFamily() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="200" cy="280" rx="170" ry="14" fill="rgba(15, 23, 42, 0.10)" />
      <g fill="rgba(15, 23, 42, 0.42)">
        <circle cx="150" cy="110" r="30" />
        <path d="M105 280 Q105 175 150 162 Q195 175 195 280 Z" />
      </g>
      <g fill="rgba(15, 23, 42, 0.32)">
        <circle cx="250" cy="150" r="22" />
        <path d="M220 280 Q220 205 250 195 Q280 205 280 280 Z" />
      </g>
      <rect x="180" y="190" width="60" height="42" rx="4" fill="#fff" stroke="rgba(15, 23, 42, 0.18)" />
      <rect x="186" y="196" width="30" height="4" rx="1" fill="#4F46E5" />
      <rect x="186" y="204" width="42" height="3" rx="1" fill="#94A3B8" />
      <rect x="186" y="211" width="22" height="3" rx="1" fill="#94A3B8" />
      <rect x="186" y="218" width="36" height="3" rx="1" fill="#94A3B8" />
      <circle cx="350" cy="50" r="24" fill="#FDE68A" opacity="0.55" />
    </svg>
  );
}

function SceneSchool() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice">
      <circle cx="320" cy="60" r="36" fill="#FDE68A" opacity="0.7" />
      <circle cx="320" cy="60" r="22" fill="#FBBF24" opacity="0.55" />
      <path d="M0 240 Q200 220 400 245 L400 300 L0 300 Z" fill="rgba(79, 70, 229, 0.08)" />
      <g fill="rgba(15, 23, 42, 0.13)">
        <rect x="40" y="170" width="88" height="80" rx="3" />
        <rect x="140" y="135" width="120" height="115" rx="3" fill="rgba(15, 23, 42, 0.16)" />
        <rect x="272" y="180" width="96" height="70" rx="3" />
      </g>
      <g fill="rgba(255,255,255,0.6)">
        {[0,1,2,3].map(i => <rect key={`a${i}`} x={56 + (i%2)*22} y={184 + Math.floor(i/2)*22} width="14" height="14" />)}
        {[0,1,2,3,4,5].map(i => <rect key={`b${i}`} x={155 + (i%3)*22} y={150 + Math.floor(i/3)*22} width="15" height="15" />)}
        {[0,1,2,3].map(i => <rect key={`c${i}`} x={285 + (i%2)*22} y={194 + Math.floor(i/2)*22} width="14" height="14" />)}
      </g>
      <rect x="197" y="105" width="2.5" height="32" fill="rgba(15,23,42,0.5)" />
      <path d="M199.5 105 L222 110 L199.5 116 Z" fill="#4F46E5" />
    </svg>
  );
}

function SceneClassroom() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect x="40" y="60" width="320" height="100" rx="4" fill="rgba(15, 23, 42, 0.18)" />
      <text x="60" y="100" fontFamily="Inter" fontSize="18" fill="rgba(255,255,255,0.7)">Mathe · Klasse 7</text>
      <text x="60" y="128" fontFamily="Inter" fontSize="12" fill="rgba(255,255,255,0.45)">x² + 4x + 4 = (x+2)²</text>
      <g fill="rgba(79, 70, 229, 0.18)">
        {[0,1,2,3].map(i => <rect key={i} x={50 + i*84} y="220" width="64" height="40" rx="4" />)}
      </g>
      <g fill="rgba(15,23,42,0.35)">
        {[0,1,2,3].map(i => <circle key={i} cx={82 + i*84} cy="210" r="8" />)}
      </g>
    </svg>
  );
}

function SceneHallway() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <polygon points="0,0 400,0 280,140 120,140" fill="rgba(79, 70, 229, 0.10)" />
      <polygon points="0,300 400,300 280,160 120,160" fill="rgba(79, 70, 229, 0.05)" />
      <polygon points="0,0 0,300 120,160 120,140" fill="rgba(15, 23, 42, 0.08)" />
      <polygon points="400,0 400,300 280,160 280,140" fill="rgba(15, 23, 42, 0.06)" />
      <rect x="125" y="142" width="150" height="16" fill="rgba(79, 70, 229, 0.25)" />
      <g fill="rgba(15, 23, 42, 0.20)">
        <rect x="20" y="180" width="32" height="80" rx="2" />
        <rect x="55" y="180" width="32" height="80" rx="2" />
        <rect x="313" y="180" width="32" height="80" rx="2" />
        <rect x="348" y="180" width="32" height="80" rx="2" />
      </g>
    </svg>
  );
}

function SceneStudents() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="200" cy="280" rx="170" ry="14" fill="rgba(15, 23, 42, 0.10)" />
      <g fill="rgba(15, 23, 42, 0.40)">
        <circle cx="140" cy="120" r="28" />
        <path d="M100 280 Q100 180 140 170 Q180 180 180 280 Z" />
      </g>
      <g fill="rgba(15, 23, 42, 0.32)">
        <circle cx="265" cy="130" r="26" />
        <path d="M230 280 Q230 195 265 185 Q300 195 300 280 Z" />
      </g>
      <rect x="170" y="220" width="80" height="50" rx="4" fill="rgba(79, 70, 229, 0.55)" />
      <rect x="155" y="265" width="110" height="8" rx="2" fill="rgba(15,23,42,0.55)" />
    </svg>
  );
}

function SceneDesk() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect x="60" y="80" width="220" height="160" rx="6" fill="#fff" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1" />
      <g stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1">
        {[100, 120, 140, 160, 180, 200].map(y => <line key={y} x1="80" y1={y} x2="260" y2={y} />)}
      </g>
      <line x1="80" y1="100" x2="180" y2="100" stroke="#4F46E5" strokeWidth="2.5" />
      <line x1="80" y1="120" x2="220" y2="120" stroke="#4F46E5" strokeWidth="2.5" />
      <rect x="298" y="90" width="6" height="120" rx="2" fill="#FBBF24" transform="rotate(8 300 150)" />
      <polygon points="297,210 311,212 304,220" fill="rgba(15,23,42,0.7)" transform="rotate(8 304 215)" />
      <circle cx="330" cy="200" r="22" fill="#fff" stroke="rgba(15, 23, 42, 0.18)" strokeWidth="1.5" />
      <ellipse cx="330" cy="200" rx="16" ry="4" fill="#7C2D12" />
    </svg>
  );
}

function SceneLeadership() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="200" cy="200" rx="160" ry="32" fill="rgba(79, 70, 229, 0.18)" />
      <ellipse cx="200" cy="195" rx="160" ry="28" fill="rgba(255,255,255,0.6)" />
      <g fill="rgba(15, 23, 42, 0.35)">
        <circle cx="85"  cy="155" r="18" /><rect x="65"  y="170" width="40" height="40" rx="3" />
        <circle cx="155" cy="135" r="18" /><rect x="135" y="150" width="40" height="40" rx="3" />
        <circle cx="245" cy="135" r="18" /><rect x="225" y="150" width="40" height="40" rx="3" />
        <circle cx="315" cy="155" r="18" /><rect x="295" y="170" width="40" height="40" rx="3" />
      </g>
      <rect x="180" y="200" width="40" height="8" fill="rgba(15,23,42,0.30)" />
    </svg>
  );
}

function ScenePhone() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect x="155" y="40" width="90" height="220" rx="14" fill="#0F172A" />
      <rect x="160" y="60" width="80" height="190" rx="6" fill="#fff" />
      <rect x="180" y="56" width="40" height="6" rx="3" fill="#0F172A" />
      <rect x="168" y="70" width="64" height="10" rx="2" fill="rgba(79, 70, 229, 0.18)" />
      <rect x="168" y="90" width="64" height="32" rx="4" fill="#EEF2FF" />
      <rect x="172" y="98" width="34" height="4" rx="1" fill="#4F46E5" />
      <rect x="172" y="108" width="24" height="3" rx="1" fill="#94A3B8" />
      <rect x="168" y="128" width="64" height="32" rx="4" fill="#FDF6EC" />
      <rect x="172" y="136" width="34" height="4" rx="1" fill="#B45309" />
      <rect x="172" y="146" width="24" height="3" rx="1" fill="#94A3B8" />
      <rect x="168" y="166" width="64" height="32" rx="4" fill="#ECFDF5" />
      <rect x="172" y="174" width="34" height="4" rx="1" fill="#059669" />
      <circle cx="200" cy="240" r="3" fill="#94A3B8" />
    </svg>
  );
}

function SceneStack() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <g fill="rgba(79, 70, 229, 0.18)" stroke="rgba(129, 140, 248, 0.6)" strokeWidth="1">
        {[0, 1, 2, 3, 4].map(i => <rect key={i} x="110" y={50 + i*40} width="180" height="30" rx="4" />)}
      </g>
      <g fill="#818CF8">
        {[0, 1, 2, 3, 4].map(i => <circle key={i} cx="125" cy={65 + i*40} r="3" />)}
      </g>
      <g fontFamily="SF Mono, monospace" fontSize="11" fill="rgba(199, 210, 254, 0.85)">
        <text x="140" y="70">Proxmox</text>
        <text x="140" y="110">OPNsense</text>
        <text x="140" y="150">UCS@school</text>
        <text x="140" y="190">Nextcloud · Moodle</text>
        <text x="140" y="230">Veyon · opsi</text>
      </g>
    </svg>
  );
}

type SceneKey = 'school' | 'classroom' | 'hallway' | 'students' | 'desk' | 'leadership' | 'phone' | 'family' | 'stack';

const scenes: Record<SceneKey, { Scene: React.FC; bg: string; label: string }> = {
  school:     { Scene: SceneSchool,     bg: 'scene-school',     label: 'Schulgebäude · 4:3' },
  classroom:  { Scene: SceneClassroom,  bg: 'scene-classroom',  label: 'Klassenraum · 16:9' },
  hallway:    { Scene: SceneHallway,    bg: 'scene-hallway',    label: 'Flur · 4:3' },
  students:   { Scene: SceneStudents,   bg: 'scene-students',   label: 'Schülergruppe · 4:3' },
  desk:       { Scene: SceneDesk,       bg: 'scene-desk',       label: 'Lehrer-Schreibtisch · 4:3' },
  leadership: { Scene: SceneLeadership, bg: 'scene-leadership', label: 'Konferenz · 16:9' },
  phone:      { Scene: ScenePhone,      bg: 'scene-phone',      label: 'App-Mockup · 9:16' },
  family:     { Scene: SceneFamily,     bg: 'scene-leadership', label: 'Eltern & Kind · 4:3' },
  stack:      { Scene: SceneStack,      bg: 'scene-stack',      label: 'Stack-Architektur' },
};

interface PhotoSlotProps {
  variant?: SceneKey;
  aspect?: string;
  label?: string;
  className?: string;
  showMeta?: boolean;
}

export const PhotoSlot: React.FC<PhotoSlotProps> = ({
  variant = 'school',
  aspect = 'aspect-4-3',
  label,
  className = '',
  showMeta = true,
}) => {
  const scene = scenes[variant] ?? scenes.school;
  const { Scene } = scene;
  return (
    <div className={`photo-slot ${scene.bg} ${aspect} ${className}`}>
      <div className="scene-wrap">
        <Scene />
      </div>
      {showMeta && (
        <span className="meta">
          <span className="material-symbols-outlined" aria-hidden="true">image</span>
          {label ?? scene.label}
        </span>
      )}
    </div>
  );
};
