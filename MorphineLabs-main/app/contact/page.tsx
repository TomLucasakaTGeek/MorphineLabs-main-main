import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Morphine Labs",
  description: "Get in touch with Morphine Labs for inquiries, partnerships, or support.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have questions or want to learn more about our services? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>
        <ContactForm className="mb-8" />
      </div>
    </div>
  );
}
