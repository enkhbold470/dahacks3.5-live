export default function FaqPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="w-full h-screen">
        <iframe 
          src="https://docs.google.com/document/d/e/2PACX-1vRLvQ9lL8Tskw6zl8nANJvjYWHKxegnShuCmpNeAkAR-C_hQbrpEoYwtNbCgwGg7FxxFzpd5ynBHh7U/pub?embedded=true"
          className="w-full h-full border-0 rounded-lg"
          title="FAQ Document"
        />
      </div>
    </div>
  )
}
