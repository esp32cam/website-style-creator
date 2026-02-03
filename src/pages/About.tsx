import { motion } from "framer-motion";
import Header from "@/components/Header";

const About = () => {
    const sections = [
        {
            title: "For Organizations: The Seekers",
            headline: "Unlock Cross-Domain Intelligence.",
            description: "We bridge the gap between isolated sciences to solve high-stakes challenges in Venture Capital, Law, Forensics, and Medical Innovation. By converging Satellite Data Science, Quantitative Finance, and Bioinformatics, we deliver \"Alpha\" that traditional specialists cannot see.",
            bullets: [
                { title: "Forensic & Legal Precision", text: "Deploy satellite geospatial analysis to verify evidence and timelines with scientific accuracy." },
                { title: "VC & Financial Alpha", text: "Utilize bio-inspired algorithms and quantitative rigor to de-risk investments in complex medical and tech portfolios." },
                { title: "IP-Grade Solutions", text: "All models developed are treated as proprietary assets, secured and maintained in a perpetual state of evolution." }
            ]
        },
        {
            title: "For Researchers: The Solvers",
            headline: "Escape the Academic Silo.",
            description: "Perpetual Beta Lab is the sandbox for polymaths. We reject the boundaries between disciplines. Here, a FinTech Engineer might apply trading algorithms to DNA sequencing, or a Satellite Data Scientist might solve a crime scene puzzle. We don't just publish papers; we build engines.",
            bullets: [
                { title: "Radical Interdisciplinary Work", text: "Solve problems that require a fusion of biology, physics, and finance." },
                { title: "Skin in the Game", text: "Move beyond hourly consulting. Earn rewards based on the measurable impact and success of the solutions you engineer." },
                { title: "The \"Beta\" Reputation", text: "Build a verifiable track record by tackling the edge-cases that standard institutions deem \"too experimental.\"" }
            ]
        },
        {
            title: "For The Network: The Engine",
            headline: "Fuel the Infinite Loop.",
            description: "Join the infrastructure of continuous experimentation. We are building a living knowledge base where medical data informs financial models, and forensic logic sharpens AI innovation.",
            bullets: [
                { title: "Shared Intelligence", text: "Contribute datasets or compute power and gain access to the collective insights of our multi-disciplinary experiments." },
                { title: "Pre-Market Access", text: "Be the first to test and deploy the tools born from our \"Perpetual Beta\" state before they reach the wider market." },
                { title: "Ecosystem Growth", text: "Earn value as the network expands into new territories of science and industry." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <Header />

            <main className="pt-32 pb-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
                <div className="space-y-32">
                    {sections.map((section, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16 items-start"
                        >
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">
                                    {section.title}
                                </h2>

                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {section.headline}
                                    </h3>
                                    <p className="text-lg text-zinc-400 leading-relaxed">
                                        {section.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 mt-8">
                                    {section.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-zinc-400">
                                            <span className="text-white mt-1.5 text-xs">▸</span>
                                            <span>
                                                <strong className="text-zinc-200 font-medium">{bullet.title}:</strong> {bullet.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Negative space for future graphics */}
                            <div className="hidden md:block"></div>
                        </motion.section>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default About;
