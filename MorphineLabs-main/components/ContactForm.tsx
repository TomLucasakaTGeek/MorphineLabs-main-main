import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight } from "lucide-react";

const formSchema = z.object({
  first_name: z.string().min(2, { message: "First name must be at least 2 characters." }),
  last_name: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company_name: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  info: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export interface ContactFormProps {
  className?: string;
  isSection?: boolean;
}

export function ContactForm({ className = "", isSection = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      company_name: "",
      info: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      console.log("Submitting form data:", data);
      
      // Use XMLHttpRequest for more direct debugging
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/contact", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          console.log("XHR Status:", xhr.status);
          console.log("XHR Response:", xhr.responseText);
          
          try {
            const response = JSON.parse(xhr.responseText);
            
            if (xhr.status >= 200 && xhr.status < 300) {
              toast({
                title: "Success!",
                description: "Your message has been sent. We'll get back to you soon.",
              });
              // Store the submitted data for display and set submitted state
              setSubmittedData(data);
              setIsSubmitted(true);
            } else {
              toast({
                title: "Something went wrong.",
                description: response.message || "Your message couldn't be sent. Please try again later.",
                variant: "destructive",
              });
            }
          } catch (error) {
            console.error("Error parsing response:", error);
            toast({
              title: "Error",
              description: "Failed to process server response. Please try again.",
              variant: "destructive",
            });
          }
          
          setIsSubmitting(false);
        }
      };
      
      xhr.onerror = function() {
        console.error("XHR Error:", xhr.statusText);
        toast({
          title: "Error",
          description: "A network error occurred. Please check your connection and try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      };
      
      xhr.send(JSON.stringify(data));
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "An error occurred while submitting the form. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    form.reset();
  };

  // Success message component after form submission
  if (isSubmitted && submittedData) {
    return (
      <div className={`max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-sm ${className}`} id={isSection ? "contact" : undefined}>
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="h-16 w-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-foreground dark:text-white">Thank You!</h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-md mb-6">
            We&apos;ve received your message and will get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <Button 
            variant="outline" 
            className="w-full dark:border-slate-700 dark:hover:bg-slate-700"
            onClick={handleReset}
          >
            Submit Another Message
          </Button>
          <Button 
            className="w-full bg-lime-400 hover:bg-lime-500 dark:bg-lime-600 dark:hover:bg-lime-700 text-black dark:text-white font-semibold"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Home <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-sm ${className}`} id={isSection ? "contact" : undefined}>
      {!isSection && <h2 className="text-2xl font-bold mb-6">Contact Us</h2>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="name@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="info"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    className="resize-none min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-lime-400 hover:bg-lime-500 dark:bg-lime-600 dark:hover:bg-lime-700 text-black dark:text-white font-semibold" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
