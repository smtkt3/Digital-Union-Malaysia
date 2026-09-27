type BrandLockupProps = {
  className: string;
  markClassName: string;
  section?: "IT Solutions" | "Global Trade & Advisory";
  href?: string;
  ariaLabel?: string;
};

export default function BrandLockup({
  className,
  markClassName,
  section,
  href = "/",
  ariaLabel = "Digital Union Malaysia home"
}: BrandLockupProps) {
  return (
    <a className={className} href={href} aria-label={ariaLabel} data-brand-lockup="">
      <span className={markClassName} aria-hidden="true">↯</span>
      <span>
        <strong>Digital Union</strong>
        <small>Malaysia</small>
        {section && <em>{section}</em>}
      </span>
    </a>
  );
}
