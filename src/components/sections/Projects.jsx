import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chatty */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Chatty</h3>
              <p className="text-gray-400 mb-4">
                Real-time chat app with group chat, media sharing, translation
                (Groq API), and authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MERN", "Socket.IO", "JWT", "DaisyUI"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://chatyy-mvd1.onrender.com"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/SHANKAR-YADAVA/ChatApp"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Netwatcher */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">
                Netwatcher – NPM Package
              </h3>
              <p className="text-gray-400 mb-4">
                A lightweight React utility for detecting online/offline status
                using a custom hook and UI component. Supports toast/banner
                display, customizable messages, and zero dependencies—150+
                downloads on NPM.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Custom Hook",
                  "Toast UI",
                  "NPM",
                  "Network Detection",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center gap-4">
                <a
                  href="https://github.com/SHANKAR-YADAVA/netwatcher"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
                <a
                  href="https://www.npmjs.com/package/netwatcher"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  NPM →
                </a>
              </div>
            </div>

            {/* Expense Tracker */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">
                Expense Tracker (GraphQL)
              </h3>
              <p className="text-gray-400 mb-4">
                Expense tracker with GraphQL API and secure authentication using
                Passport.js.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["GraphQL", "React", "Passport.js", "Node.js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/SHANKAR-YADAVA/Expense-Tracker-GraphQL"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Crypto Hunter */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">Crypto Hunter</h3>
              <p className="text-gray-400 mb-4">
                Real-time crypto tracker with search, charts, and CoinGecko API
                integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "CoinGecko API", "Chart.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://crypto-hunter-sage.vercel.app"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/SHANKAR-YADAVA/Crypto_hunter"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
