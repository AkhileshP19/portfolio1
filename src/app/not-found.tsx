import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <p className="eyebrow">404 / Not found</p>
      <h1>This page isn’t in the dossier.</h1>
      <p>Explore the selected engineering work instead.</p>
      <Button
        className="button"
        nativeButton={false}
        render={<Link href="/#work" />}
      >
        Back to selected work
      </Button>
    </main>
  );
}
