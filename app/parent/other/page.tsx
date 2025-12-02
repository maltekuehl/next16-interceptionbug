import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/parent/child/test/" prefetch={false}>
        Click me
      </Link>
    </div>
  );
}
