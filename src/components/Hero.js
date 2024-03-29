import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>I'm Maciek</h1>
            <h4>Full-stack Software Engineer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => (
                <a
                  key={link.id}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero_2.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
