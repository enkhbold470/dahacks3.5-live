export default function MapPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Event Map</h1>

      <div className="bg-[#1a1a3a] border border-[#2a2a4a] rounded-lg p-6 text-center">
        <p className="mb-4">The event will be held at:</p>
        <h2 className="text-xl font-semibold mb-2">Conference Room A&B</h2>
        <p>De Anza College, Cupertino, CA 95014</p>

        <div className="mt-8 aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9019239029656!2d-122.04918368469437!3d37.31935197984859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4cce0358a1d%3A0x6a6a9f235a6f5a3!2sDe%20Anza%20College!5e0!3m2!1sen!2sus!4v1621436343222!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
