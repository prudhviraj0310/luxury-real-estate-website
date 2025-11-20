export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/6 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-electric font-semibold">Quick Links</h4>
            <ul className="mt-3 text-sm text-muted">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-electric font-semibold">Services</h4>
            <ul className="mt-3 text-sm text-muted">
              <li>Fixed Deposits</li>
              <li>Loans</li>
            </ul>
          </div>
          <div>
            <h4 className="text-electric font-semibold">Connect</h4>
            <div className="flex gap-3 mt-3">
              <a href="#" className="px-3 py-2 rounded bg-white/5">in</a>
              <a href="#" className="px-3 py-2 rounded bg-white/5">tw</a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-muted mt-6">
          © {new Date().getFullYear()} TTCECS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
