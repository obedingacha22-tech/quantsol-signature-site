import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPage = () => {
  return (
    <main>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Quantsol Consultants Limited — how we collect, use, and protect information submitted via our website."
        path="/privacy"
      />
      <section className="bg-navy pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Legal</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/60 text-lg mt-6 max-w-2xl">
              Last updated: July 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Who We Are</h2>
              <p>
                Quantsol Consultants Limited ("we", "us", "our") is a construction and real estate consultancy
                firm registered in Kenya, with offices at Sigona Suites 502B, Kikuyu Nderi Road, Kikuyu.
                This policy explains how we handle information you provide through our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p>When you use our contact form or reach out to us directly, we may collect:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number (optional)</li>
                <li>The contents of the message you send us</li>
              </ul>
              <p className="mt-3">
                We do not use tracking cookies, advertising trackers, or third-party analytics
                that build a personal profile of you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>We use the information you submit solely to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your enquiry or quote request</li>
                <li>Provide services you request from us</li>
                <li>Communicate with you about ongoing projects</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or trade your personal information.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. How We Share Information</h2>
              <p>
                We do not share your personal information with third parties, except where required by
                Kenyan law or where necessary to deliver a service you have specifically requested
                (for example, sharing project details with a client or contractor at your instruction).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Retention</h2>
              <p>
                We retain enquiry and project information for as long as necessary to provide services and
                to comply with our legal, tax, and professional record-keeping obligations. You may request
                deletion of your personal data at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>Under Kenya's Data Protection Act, 2019, you have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict certain processing</li>
                <li>Lodge a complaint with the Office of the Data Protection Commissioner</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect information submitted
                through this website. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
              <p>To exercise any of your rights or ask questions about this policy, contact us at:</p>
              <ul className="list-none pl-0 mt-2 space-y-1">
                <li>Email: <a href="mailto:info@quantsol.co.ke" className="text-accent hover:underline">info@quantsol.co.ke</a></li>
                <li>Phone: <a href="tel:0798770275" className="text-accent hover:underline">0798 770 275</a></li>
                <li>Post: P.O. BOX 755 - 00517, Uhuru Gardens, Nairobi, Kenya</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. The "Last updated" date at the top of this
                page indicates when it was most recently revised.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
