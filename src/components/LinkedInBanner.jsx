import React from "react";

export default function LinkedInBanner() {
  return (
    <section className="section--tight linkedin">
      <div className="wrap reveal">
        <h2>Success is your duty, obligation, responsibility.</h2>
        <a className="li" href="#" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </svg>
        </a>
        <small>Connect with us on LinkedIn</small>
      </div>
    </section>
  );
}
