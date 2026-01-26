import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Kenny Apps",
  description: "Privacy policy for Kenny Practice and other Kenny Apps products.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-[var(--accent)] hover:underline mb-8 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-[var(--text-secondary)] mb-6">
          Last updated: January 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Kenny Apps (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how Kenny Practice and our other
            applications handle your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Kenny Practice is designed with privacy in mind. The app stores your
            practice preferences and session history locally on your device. We do
            not collect, transmit, or store any personal data on external servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">iCloud Sync</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            If you enable iCloud sync, your practice data will be synchronized
            across your devices through Apple&apos;s iCloud service. This data is
            encrypted and handled according to Apple&apos;s privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We may collect anonymous usage statistics to improve our apps. This
            data cannot be used to identify you personally and includes only
            aggregated information about app usage patterns.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at
            privacy@kennyapps.com.
          </p>
        </section>
      </div>
    </main>
  );
}
