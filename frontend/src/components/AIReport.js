export default function AIReport({ report }) {
  if (!report) return null;

  // Simple markdown parser for basic formatting
  const parseMarkdown = (text) => {
    // Escape HTML to prevent XSS (basic)
    let html = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    // Replace ### Headings
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold text-gray-200 mt-6 mb-2">$1</h3>');
    // Replace **bold** text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-100 font-semibold">$1</strong>');
    
    return html;
  };

  return (
    <div className="mt-12 glass-panel rounded-2xl p-8 glow-hover">
      <div className="flex items-center gap-3 mb-8 border-b border-[var(--glass-border)] pb-4">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          AI Threat Analysis Report
        </h2>
      </div>

      <div 
        className="prose prose-invert max-w-none font-sans text-[15px] leading-relaxed whitespace-pre-wrap text-gray-300"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(report) }}
      />
    </div>
  );
}