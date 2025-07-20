"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Database, ExternalLink, Github, Search, Filter } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const projects = [
  {
    id: "wazuh-ksc-integration",
    title: "Wazuh SIEM Integration with Kaspersky Security Center (KSC)",
    period: "Jul 2025 - Aug 2025",
    description: [
      "Deployed and configured Wazuh SIEM with a complete security monitoring stack on Linux servers.",
      "Integrated endpoint logs from Windows, Linux, and pfSense, enhancing visibility with custom detection rules.",
      "Connected Wazuh alerts to KSC for centralized event management and automated endpoint responses."
    ],
    technologies: ["Wazuh", "Kaspersky Security Center", "SIEM", "Linux", "Log Monitoring", "IDS/IPS"],
    category: "siem",
    icon: <Shield className="h-10 w-10 text-primary" />,
    image: "/images/wazuh-ksc.png",
    longDescription:
      "This project focused on deploying Wazuh SIEM and integrating it with Kaspersky Security Center (KSC) to create a robust endpoint monitoring solution. The setup included Wazuh Manager, Filebeat, Elasticsearch, and Kibana, with centralized log collection from diverse systems like Windows, Linux, and pfSense. The project involved creating custom rules for file integrity monitoring, intrusion detection, and vulnerability assessment, alongside automated response triggers via KSC integration to ensure rapid containment of security incidents.",
    features: [
      "Centralized log aggregation from multiple platforms",
      "Custom rule creation for threat detection",
      "Real-time file integrity monitoring",
      "Automated response actions via KSC",
      "Dashboard visualization through Kibana"
    ],
    architecture: [
      "Data Collection Layer: Filebeat agents on endpoints and network devices",
      "Processing Layer: Wazuh Manager for parsing and analysis",
      "Analysis Layer: Custom Wazuh detection rules",
      "Response Layer: Automated KSC response triggers",
      "Presentation Layer: Kibana dashboards and alerting"
    ],
    github: "https://github.com/anashashme/Wazuh-Kaspersky-Integration",
  },
  {
    id: "qradar-siem-integration",
    title: "IBM QRadar SIEM Deployment & Advanced Log Source Integration",
    period: "May 2025 - Jun 2025",
    description: [
      "Deployed IBM QRadar SIEM with perpetual licensing, performing installation, patching, and system optimization.",
      "Integrated log sources including Windows, Linux, SQL Server, and pfSense via WinCollect, RSyslog, and NetFlow.",
      "Enhanced offense correlation through custom rules, reference sets, DSMs, and automated reports."
    ],
    technologies: ["IBM QRadar", "SIEM", "Log Integration", "Offense Correlation", "NetFlow", "RSyslog", "WinCollect"],
    category: "siem",
    icon: <Database className="h-10 w-10 text-primary" />,
    image: "/images/qradar-integration.png",
    longDescription:
      "This project involved a full-scale deployment of IBM QRadar SIEM in a professional lab environment. Tasks included system installation, licensing, patching, and configuration of backup mechanisms. A wide range of log sources such as Windows servers, Linux endpoints, SQL databases, and pfSense firewalls were onboarded using multiple collection methods like WinCollect, RSyslog, and NetFlow exporters. The project emphasized creating custom DSM mappings, offense correlation rules, and comprehensive reporting structures to improve threat visibility and response efficiency.",
    features: [
      "Full-stack QRadar SIEM deployment",
      "Multi-source log integration (Windows, Linux, SQL, pfSense)",
      "Advanced offense correlation rules",
      "Reference set and DSM customization",
      "Automated report generation and alerting"
    ],
    architecture: [
      "Data Collection Layer: WinCollect, RSyslog, NetFlow exporters",
      "Processing Layer: QRadar event pipeline and DSM normalization",
      "Analysis Layer: Custom correlation rules and offenses",
      "Response Layer: Offense notifications and automated reports",
      "Presentation Layer: QRadar dashboards and reports"
    ],
    github: "https://github.com/anashashme/QRadar-LogSource-Integration",
  },
  {
    id: "network-vigilance",
    title: "Network Vigilance: AI-Powered Multi-layered APT Protection",
    period: "Oct 2024 - May 2025",
    description: [
      "Developed a real-time Advanced Persistent Threats (APTs) defense system using Flask, ensuring immediate threat detection and blocking.",
      "Combined supervised & unsupervised learning models [Multi-Layered], delivering highly accurate threat identification.",
      "Created an automated blocking mechanism, neutralizing threats the moment they are detected.",
    ],
    technologies: ["Python", "Flask", "Machine Learning", "Cybersecurity", "APT Detection"],
    category: "security",
    icon: <Shield className="h-10 w-10 text-primary" />,
    image: "/images/network-vigilance.png",
    longDescription:
      "Network Vigilance is an advanced cybersecurity solution designed to detect and prevent Advanced Persistent Threats (APTs) using a multi-layered approach powered by artificial intelligence. The system combines supervised and unsupervised machine learning models to identify anomalous network behavior, suspicious file activities, and potential data exfiltration attempts in real-time. By leveraging Flask for the backend and implementing a responsive dashboard, Network Vigilance provides security teams with immediate alerts and automated response capabilities to neutralize threats before they can cause damage.",
    features: [
      "Real-time network traffic analysis",
      "Multi-layered detection approach",
      "Automated threat blocking",
      "Interactive security dashboard",
      "Detailed threat intelligence reports",
    ],
    architecture: [
      "Data Collection Layer: Network sensors and endpoint agents",
      "Processing Layer: Feature extraction and preprocessing",
      "Analysis Layer: ML models for anomaly detection",
      "Response Layer: Automated blocking mechanisms",
      "Presentation Layer: Security dashboard and alerts",
    ],
    github: "https://github.com/anashashme/NetworkVigilance",
  },
  {
    id: "memory-forensics",
    title: "Windows Memory Forensics (Volatility)",
    period: "Mar 2024 - May 2024",
    description: [
      "Analyzed memory dump to identify and recover artifacts such as running processes, network connections, registry hives, and user activity.",
      "Used Volatility plugins to perform in-depth analysis of memory images, including identifying hidden processes, rootkits, and malware.",
      "Generated detailed reports documenting findings.",
    ],
    technologies: ["Volatility", "Memory Forensics", "Digital Forensics", "Malware Analysis"],
    category: "forensics",
    icon: <Database className="h-10 w-10 text-primary" />,
    image: "/images/memory-forensics.png",
    longDescription:
      "This project focused on advanced Windows memory forensics techniques using the Volatility framework. By analyzing memory dumps from compromised systems, I was able to recover critical artifacts that helped identify malicious activities and understand the attack vectors used. The project involved developing custom analysis workflows and scripts to automate the forensic process, making it more efficient and thorough. The findings were documented in detailed reports that provided actionable intelligence for incident response teams.",
    features: [
      "Process and thread analysis",
      "Network connection recovery",
      "Registry hive extraction",
      "Malware detection and analysis",
      "User activity timeline reconstruction",
    ],
    methodology: [
      "Memory acquisition from target systems",
      "Initial triage using basic Volatility plugins",  
      "Deep analysis of suspicious processes and artifacts",
      "Malware behavior analysis",
      "Timeline reconstruction and documentation",
    ],
    github: "https://github.com/anashashme/Windows-Memory-Forensics-Using-Linux",
  },
  
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "security", name: "Security" },
  { id: "forensics", name: "Forensics" },
  { id: "development", name: "Development" },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter((project) => {
    // Filter by category
    const categoryMatch = activeCategory === "all" || project.category === activeCategory

    // Filter by search query
    const searchMatch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    return categoryMatch && searchMatch
  })

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden bg-red-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 p-2 rounded-full mb-4"
            >
              <Shield className="h-6 w-6 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary/30 rounded-full mt-4 mb-8" />
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="rounded-full"
                >
                  {activeCategory === category.id && <Filter className="mr-2 h-4 w-4" />}
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 rounded-full"
              />
            </div>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 50,
                  }}
                  whileHover={{
                    y: -15,
                    boxShadow: "0 20px 30px -10px rgba(var(--primary), 0.2)",
                  }}
                  className="transition-all duration-500 card-hover-effect"
                >
                  <Card className="border-primary/20 shadow-lg overflow-hidden h-full flex flex-col group">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      <div className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {project.period}
                      </div>
                    </div>

                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        {project.icon}
                      </div>
                      <div className="space-y-1">
                        <CardTitle>{project.title}</CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        {project.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="px-2 py-1 text-xs bg-primary/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="border-t border-primary/10 pt-4 flex gap-4">
                      <Button variant="default" className="w-full gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 py-16 text-center">
                <div className="mb-4 text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto opacity-20" />
                </div>
                <h3 className="text-xl font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
