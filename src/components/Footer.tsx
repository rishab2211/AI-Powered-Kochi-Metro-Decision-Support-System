// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-8 bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kochi Metro Decision Support Project. All Rights Reserved.</p>
      </div>
    </footer>
  );
}