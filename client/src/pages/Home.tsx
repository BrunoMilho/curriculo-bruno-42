// import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useRef } from "react";
import resumeData from "@/data/resume.json";

interface ResumeData {
  footer?: {
    location: string;
    date: string;
  };
  [key: string]: any;
}

/**
 * Design Philosophy: Professional & Elegant
 * - Clean, minimal layout with strategic use of whitespace
 * - Professional color palette: Deep blue primary with neutral accents
 * - Print-optimized for PDF export
 * - Single-page format with clear visual hierarchy
 */

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const data = resumeData as ResumeData;

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-8 md:py-12">
      {/* Fixed Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="fixed top-6 right-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium z-50 print:hidden"
      >
        <Download className="w-4 h-4" />
        Baixar PDF
      </button>

      <div className="max-w-4xl mx-auto px-4">

        {/* Resume Content */}
        <div
          ref={resumeRef}
          className="bg-white rounded-lg shadow-xl overflow-hidden print:shadow-none print:rounded-none"
        >
          {/* Header Section */}
          <div className="resume-header bg-gradient-to-r from-primary to-primary/80 text-white px-8 md:px-12 pt-8 pb-8">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              {/* Photo */}
              {resumeData.personal.photo && (
                <div className="flex-shrink-0">
                  <img
                    src={resumeData.personal.photo}
                    alt={resumeData.personal.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              )}
              {/* Text Content */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {resumeData.personal.name}
                </h1>
                <p className="resume-title text-primary-foreground/90 text-lg md:text-xl mb-6">
                  {resumeData.personal.title}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="resume-contact text-primary-foreground/85 justify-center md:justify-start">
              <div className="resume-contact-item">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${resumeData.personal.email}`} className="hover:underline">
                  {resumeData.personal.email}
                </a>
              </div>
              <div className="resume-contact-item">
                <Phone className="w-4 h-4" />
                <span>{resumeData.personal.phone}</span>
              </div>
              <div className="resume-contact-item">
                <MapPin className="w-4 h-4" />
                <span>{resumeData.personal.location}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-8 md:px-12 py-8">
            {/* Summary */}
            <section className="resume-section">
              <h2 className="text-2xl font-bold text-primary mb-4">Resumo Profissional</h2>
              <p className="text-foreground/80 leading-relaxed">
                {resumeData.summary}
              </p>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h2 className="text-2xl font-bold text-primary mb-6">Experiência Profissional</h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="border-l-4 border-primary/30 pl-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {exp.companies.join(" • ")}
                    </div>
                    <p className="text-foreground/75">{exp.highlights}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="resume-section">
              <h2 className="text-2xl font-bold text-primary mb-4">Competências</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {resumeData.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-lg border border-primary/10"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="resume-section">
              <h2 className="text-2xl font-bold text-primary mb-4">Certificações</h2>
              <ul className="space-y-2">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Education */}
            <section className="resume-section">
              <h2 className="text-2xl font-bold text-primary mb-4">Formação Acadêmica</h2>
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="font-bold text-foreground mb-1">{edu.level}</h3>
                  <p className="text-foreground/75">{edu.fields.join(", ")}</p>
                </div>
              ))}
            </section>

            {/* Training */}
            <section className="resume-section">
              <h2 className="text-2xl font-bold text-primary mb-4">Formação em Andamento</h2>
              <p className="text-foreground/80 mb-4">
                {resumeData.training.current}
              </p>
            </section>

            {/* Projects */}
            <section className="resume-section">
              <h2 className="text-2xl font-bold text-primary mb-4">Projetos Relevantes</h2>
              <div className="space-y-4">
                {resumeData.projects.map((project, idx) => (
                  <div key={idx} className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-foreground">{project.name}</h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-foreground/75 text-sm">{project.description}</p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline mt-2 inline-block"
                      >
                        {project.url}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <div className="pt-8 mt-8 border-t-2 border-primary/20 text-center text-sm text-muted-foreground">
              <p>
                {resumeData.footer.location}, {resumeData.footer.date}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 8mm;
          }
          body {
            background: white;
            padding: 0;
            margin: 0;
            font-size: 13px !important;
            line-height: 1.3 !important;
          }
          .max-w-4xl {
            max-width: 100%;
          }
          button {
            display: none;
          }
          .resume-section {
            page-break-inside: avoid;
            margin-bottom: 0.5rem !important;
          }
          .resume-section h2 {
            margin-bottom: 0.25rem !important;
            font-size: 1.25rem !important;
          }
          .resume-header {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          .resume-header img {
            width: 5.5rem !important;
            height: 5.5rem !important;
          }
          .resume-header h1 {
            font-size: 2rem !important;
            margin-bottom: 0 !important;
          }
          .resume-title {
            font-size: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          /* Force compress generic spacing utility classes on print */
          .py-8 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
          .pt-8 { padding-top: 0.25rem !important; }
          .mt-8 { margin-top: 0.25rem !important; }
          .mb-6 { margin-bottom: 0.5rem !important; }
          .mb-4 { margin-bottom: 0.25rem !important; }
          .gap-8 { gap: 1rem !important; }
          .space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem !important; }
          .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.25rem !important; }
          .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.15rem !important; }
          .p-4 { padding: 0.5rem !important; }
        }
      `}</style>
    </div>
  );
}
