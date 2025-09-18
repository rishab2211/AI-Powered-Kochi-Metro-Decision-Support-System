export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-300/10">
      <div className="container mx-auto px-4 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Kochi Metro Decision Support Project. A conceptual demonstration.</p>
      </div>
    </footer>
  );
}