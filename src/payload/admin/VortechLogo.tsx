import Image from 'next/image';

export function VortechLogo() {
  return (
    <div className="vortech-admin-logo" aria-label="Vortech Admin">
      <Image
        alt="Vortech"
        src="/assets/images/logo-vortech.png"
        width={208}
        height={72}
        priority
      />
      <span>Admin Console</span>
    </div>
  );
}
