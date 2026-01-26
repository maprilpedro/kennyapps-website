import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Kenny Apps",
  description: "Terms of service for Kenny Advisor and other Kenny Apps products.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-[var(--accent)] hover:underline mb-8 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-[var(--text-secondary)] mb-6">
          Last updated: January 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            By downloading, installing, or using Kenny Advisor or any other Kenny
            Apps product, you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">License</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We grant you a limited, non-exclusive, non-transferable license to use
            our applications for personal, non-commercial purposes. This license
            does not include the right to modify, distribute, or create derivative
            works.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            You are responsible for maintaining the security of your device and any
            data stored within our applications. We recommend regular backups of
            your practice data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Our applications are provided &quot;as is&quot; without warranty of any kind.
            We do not guarantee that the apps will meet your specific requirements
            or that they will be uninterrupted or error-free.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We reserve the right to modify these terms at any time. Continued use
            of our applications after changes constitutes acceptance of the new
            terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            If you have questions about these Terms of Service, please contact us
            at legal@kennyapps.com.
          </p>
        </section>
      </div>
    </main>
  );
}
