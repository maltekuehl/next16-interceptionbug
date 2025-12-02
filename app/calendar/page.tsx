import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/calendar/2025-11-20">
        Click me to open intercepted modal.!!!
      </Link>
    </div>
  );
}
