const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Bilingual Names */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary uppercase">Urban Fitout Trading & Contracting</h2>
          <h2 className="text-lg font-bold text-secondary">اربان فيت اوت ترادينغ اند كونتراكتينغ</h2>
        </div>

        {/* Contact Bar - Matches PDF footer style */}
       {/* Contact Bar - Updated with tel links */}
<div className="flex flex-col md:flex-row justify-center items-center gap-4 text-primary font-bold text-lg border-y border-gray-100 py-4">
  <a href="tel:+97466266368" className="hover:underline">+974 6626 6368</a>
  <span className="hidden md:block text-gray-300">|</span>
  <a href="tel:+97466884629" className="hover:underline">+974 6688 4629</a>
  <span className="hidden md:block text-gray-300">|</span>
  <a href="mailto:info@uftcqa.com" className="hover:underline">info@uftcqa.com</a>
</div>

        <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest">
          Engineering Your Dreams Into Reality — Doha, Qatar
        </p>
      </div>
    </footer>
  );
};

export default Footer;