function Login() {
  return (
    <div className="login-page">
      <div className="login-shell">

        {/* LEFT SIDE — RPL INTRO */}
        <section className="login-hero">
          <div className="hero-badge">
            ✦ AI-Powered RPL Platform
          </div>

          <div className="hero-content">
            <h1>
              Your experience
              <span> deserves recognition.</span>
            </h1>

            <p>
              Turn the skills you've gained through work and experience
              into verified, recognised competencies.
            </p>
          </div>

          <div className="journey-card">
            <div className="journey-icon">✦</div>

            <div>
              <strong>From experience to certification</strong>
              <span>
                AI skill extraction → competency mapping → human verification
              </span>
            </div>
          </div>

          <div className="skill-cloud">
            <span>Skills</span>
            <span>Experience</span>
            <span>Evidence</span>
            <span>Assessment</span>
            <span>Certification</span>
          </div>

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
        </section>

        {/* RIGHT SIDE — LOGIN */}
        <section className="login-panel">
          <div className="login-brand">
            <div className="brand-icon">R</div>

            <div>
              <h2>RPL-COPILOT</h2>
              <p>Recognition of Prior Learning</p>
            </div>
          </div>

          <div className="login-content">
            <div className="welcome-label">WELCOME BACK</div>

            <h3>Continue your journey</h3>

            <p className="login-subtitle">
              Sign in to continue building your verified skill profile.
            </p>

            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <div className="password-label">
                  <label htmlFor="password">Password</label>
                  <button type="button">Forgot?</button>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="login-button">
                Sign In
                <span>→</span>
              </button>
            </form>

            <div className="secure-note">
              <span>✓</span>
              Secure access · Human-verified learning
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Login;