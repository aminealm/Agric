import React, { useEffect, useRef, useState } from "react";
import "./team-showcase.css";

import {
  aboutIntro,
  aboutCards,
  aboutAmbition,
  boardMembers,
  values,
  teamIntro,
  principles,
} from "./teamData";

function SplitTitle({ text }) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <h2 className="split-title" aria-label={text}>
      {words.map((word, wordIndex) => (
        <span className="split-word" key={`${word}-${wordIndex}`}>
          {word.split("").map((char) => {
            const currentIndex = charIndex;
            charIndex += 1;

            return (
              <span
                className="split-char"
                key={`${char}-${currentIndex}`}
                aria-hidden="true"
                style={{ "--char": currentIndex }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
}

function AnimatedNumber({ value, suffix = "", duration = 1400 }) {
  const numberRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const finalLength = String(value).length;
  const digits = String(displayValue).padStart(finalLength, "0").split("");

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return undefined;

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const stopAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const startAnimation = () => {
      stopAnimation();
      setDisplayValue(0);
      startTimeRef.current = null;

      const animate = (time) => {
        if (!startTimeRef.current) {
          startTimeRef.current = time;
        }

        const progress = Math.min(
          (time - startTimeRef.current) / duration,
          1
        );

        const easedProgress = easeOutExpo(progress);
        const current = Math.round(easedProgress * value);

        setDisplayValue(current);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAnimation();
        } else {
          setIsVisible(false);
          setDisplayValue(0);
          stopAnimation();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      stopAnimation();
    };
  }, [value, duration]);

  return (
    <strong
      ref={numberRef}
      className={`animated-number animated-number--roller ${
        isVisible ? "number-is-visible" : ""
      }`}
    >
      {digits.map((digit, digitIndex) => (
        <span className="digit-window" key={digitIndex}>
          <span
            className="digit-track"
            style={{
              transform: `translateY(-${Number(digit) * 10}%)`,
              transitionDelay: `${digitIndex * 55}ms`,
            }}
          >
            {Array.from({ length: 10 }, (_, number) => (
              <span key={number}>{number}</span>
            ))}
          </span>
        </span>
      ))}

      {suffix && <span className="number-suffix">{suffix}</span>}
    </strong>
  );
}

function TeamCard({ member, index }) {
  const telNumber = member.numero ? member.numero.replace(/\s/g, "") : "";

  const socialLinks = [
    {
      key: "linkedin",
      href: member.linkedin,
      label: "LinkedIn",
      text: "in",
    },
    {
      key: "twitter",
      href: member.twitter || member.x,
      label: "Twitter / X",
      text: "𝕏",
    },
  ].filter((item) => item.href);

  return (
    <article
      className="team-card"
      data-reveal
      style={{
        "--delay": `${index * 90}ms`,
        "--image-position": member.imagePosition || "center center",
      }}
    >
      <div className="team-card__media">
        <img
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          loading="lazy"
        />
      </div>

      <div className="team-card__body">
        
        <h3>{member.name}</h3>

        <p className="team-card__role">{member.role}</p>

        <p className="team-card__quote">{member.quote}</p>

        <div className="team-card__bottom">
          <div className="team-card__contact">
            {member.email && (
              <a href={`mailto:${member.email}`} className="team-card__email">
                {member.email}
              </a>
            )}

            {member.numero && (
              <a href={`tel:${telNumber}`} className="team-card__phone">
                {member.numero}
              </a>
            )}
          </div>

          {socialLinks.length > 0 && (
            <div className="team-card__socials" aria-label="Réseaux sociaux">
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} - ${social.label}`}
                >
                  {social.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function TeamShowcase() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const revealItems = root.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    const cards = root.querySelectorAll(".team-card");

    const handlePointerMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateX = (y / rect.height - 0.5) * -5;
      const rotateY = (x / rect.width - 0.5) * 5;

      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
    };

    const resetTilt = (event) => {
      const card = event.currentTarget;

      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "50%");
    };

    cards.forEach((card) => {
      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", resetTilt);
    });

    const handlePageMouseMove = (event) => {
      const rect = root.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      root.style.setProperty("--page-x", x.toFixed(3));
      root.style.setProperty("--page-y", y.toFixed(3));
    };

    root.addEventListener("pointermove", handlePageMouseMove);

    return () => {
      observer.disconnect();

      cards.forEach((card) => {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", resetTilt);
      });

      root.removeEventListener("pointermove", handlePageMouseMove);
    };
  }, []);

  return (
    <section className="team-showcase" id="about-page" ref={rootRef}>
      <div className="team-showcase__noise" aria-hidden="true" />

      <div
        className="team-showcase__orb team-showcase__orb--one"
        aria-hidden="true"
      />

      <div
        className="team-showcase__orb team-showcase__orb--two"
        aria-hidden="true"
      />

      <div className="team-showcase__container">
        <div className="team-about-intro" data-reveal>
          <span className="eyebrow">{aboutIntro.eyebrow}</span>
          <h1>{aboutIntro.title}</h1>
          <p>{aboutIntro.description}</p>
        </div>

        <div className="team-about-grid" data-reveal>
          {aboutCards.map((item, index) => (
            <article className="team-about-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="team-about-highlight" data-reveal>
          <span>Notre ambition</span>
          <p>{aboutAmbition}</p>
        </div>

        <div className="team-hero" data-reveal>
          <div>
            <span className="eyebrow">{teamIntro.eyebrow}</span>
            <SplitTitle text={teamIntro.title} />
            <p>{teamIntro.description}</p>
          </div>

          <div className="team-stats" aria-label="Statistiques équipe">
            <div>
              <AnimatedNumber value={boardMembers.length} />
              <span className="team-stats__label">Membres de l’équipe</span>
            </div>

            <div>
              <AnimatedNumber value={boardMembers.length} />
              <span className="team-stats__label">Contacts directs</span>
            </div>

            <div>
              <AnimatedNumber value={360} suffix="°" />
              <span className="team-stats__label">Vision globale</span>
            </div>
          </div>
        </div>

        <div className="team-marquee" aria-hidden="true">
          <div>
            {[...values, ...values].map((value, index) => (
              <span key={`${value}-${index}`}>{value}</span>
            ))}
          </div>
        </div>

        <div className="team-grid team-grid--bureau" data-panel>
          {boardMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        <div className="team-principles" data-reveal>
          <div>
            <span className="eyebrow">Notre fonctionnement</span>
            <h3>
              Une organisation structurée autour d’une équipe professionnelle et
              complémentaire.
            </h3>
          </div>

          <div className="principles-grid">
            {principles.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="team-cta" data-reveal>
          <h3>Une équipe engagée pour vos projets.</h3>
          <p>
            Découvrez une organisation professionnelle portée par l’expertise,
            la rigueur et l’innovation.
          </p>
          <a href="#contact" className="btn-main">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default TeamShowcase;