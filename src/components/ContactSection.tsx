import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
    const handleContactClick = () => {
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=pongsapakkhonghae@gmail.com",
            "_blank"
        );
    };

    return (
        <section className="py-24 px-6 md:px-12 lg:px-16 border-t border-border bg-card">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                        Ready to Evolve?
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-lg">
                        Join the lab. Start the conversation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Button
                        variant="hero"
                        size="xl"
                        onClick={handleContactClick}
                        className="group"
                    >
                        CONTACT US
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
